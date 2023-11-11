import SharedTitle from '../../../../Components/SharedTitle/SharedTitle';
import img1 from '../../.././../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white my-20'>
            <div className='bg-slate-800 bg-opacity-80 py-10'>
                <SharedTitle heading={'----check it out----'} subHeading={'FORM OUR MENU'}></SharedTitle>
                <div className='flex justify-center items-center py-10 px-36'>
                    <div className='flex-1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className="md:ml-10 flex-1">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
