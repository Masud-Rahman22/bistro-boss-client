import { Elements } from "@stripe/react-stripe-js";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
    return (
        <div>
            <SharedTitle subHeading={'PAYMENT'}></SharedTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;