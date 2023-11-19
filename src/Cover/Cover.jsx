import { Parallax } from 'react-parallax';
const Cover = ({ img, title, caption }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero md:h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:px-96 md:py-32 bg-[#15151599] ">
                        <h1 className="mb-5 text-7xl font-bold font-cinzel">{title}</h1>
                        <p className="mb-5 text-xl font-normal">{caption}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;