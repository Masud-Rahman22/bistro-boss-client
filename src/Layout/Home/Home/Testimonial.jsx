import { useEffect, useState } from "react";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {BiSolidQuoteLeft} from 'react-icons/bi'
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    console.log(reviews);
    return (
        <div>
            <SharedTitle heading={'---what our clients say---'} subHeading={'TESTIMONIALS'}></SharedTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col gap-5 items-center justify-center my-10 md:w-1/2 mx-auto">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <BiSolidQuoteLeft className="w-[100px] h-[100px]"></BiSolidQuoteLeft>
                            <p className="text-center">{review.details}</p>
                            <h3 className="text-[#CD9003] text-2xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;