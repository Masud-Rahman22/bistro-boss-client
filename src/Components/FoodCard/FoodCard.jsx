import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hookes/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hookes/useAxiosSecure";
import useCart from "../../Hookes/useCart";



const FoodCard = ({ menu }) => {
    const { image, name, recipe, price, _id } = menu;
    const { user } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart()
    const handleToAddCart = () => {
        if (user && user?.email) {
            const cartItem = {
                itemId: _id,
                user: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Added to your cart",
                            showClass: {
                                popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                        `
                            },
                            hideClass: {
                                popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                        `
                            }
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please, Login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mx-5 mt-3 bg-black text-white px-5 py-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleToAddCart} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;