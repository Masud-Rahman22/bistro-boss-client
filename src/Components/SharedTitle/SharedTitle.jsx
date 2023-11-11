

const SharedTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto mt-20 mb-10">
            <h1 className="text-[#D99904] text-xl font-normal border-b-4 pb-3">{heading}</h1>
            <p className="text-4xl font-normal border-b-4 py-5">{subHeading}</p>
        </div>
    );
};

export default SharedTitle;