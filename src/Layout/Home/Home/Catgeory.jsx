import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Catgeory = () => {
    return (
        <Swiper
            slidesPerView={3}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper my-20 w-8/12 mx-auto"
        >
            <SwiperSlide>
                <img src={img1} alt="" />
                <h1 className='uppercase text-3xl font-normal font-cinzel -mt-20 text-center mr-16 text-white'>Salads</h1>
                </SwiperSlide>
            <SwiperSlide><img src={img2} alt="" />
            <h1 className='uppercase text-3xl font-normal font-cinzel -mt-20 text-center mr-16 text-white'>Pizza</h1></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" />
            <h1 className='uppercase text-3xl font-normal font-cinzel -mt-20 text-center mr-16 text-white'>Soups</h1></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" />
            <h1 className='uppercase text-3xl font-normal font-cinzel -mt-20 text-center mr-16 text-white'>Deserts</h1></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" />
            <h1 className='uppercase text-3xl font-normal font-cinzel -mt-20 text-center mr-16 text-white'>Salads</h1></SwiperSlide>
        </Swiper>
    );
};

export default Catgeory;