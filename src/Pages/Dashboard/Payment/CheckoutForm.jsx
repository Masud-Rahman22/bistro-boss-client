import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hookes/useAxiosSecure";
import useCart from "../../../Hookes/useCart";
import useAuth from "../../../Hookes/useAuth";


const CheckoutForm = () => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId,setTransactionId] = useState('')
    const stripe = useStripe();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const elements = useElements();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        else{
            console.log('payment intent',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id)
                const paymentInfo = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    cartIds: cart.map(item=> item._id),
                    menuItemIds: cart.map(item=> item.itemId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payment',paymentInfo)
                console.log('payment saved',res);
            }
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-5" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {
                transactionId && <p className="text-green-500">{transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;