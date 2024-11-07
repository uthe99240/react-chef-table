import Image from '../../assets/image/home-page-banner.jpg';
const Banner = () => {
    return (
        <div className='relative'>
            <img className='object-cover w-full rounded-lg' src={Image} alt="" />
            <div className="max-w-3xl absolute inset-0 flex flex-col justify-center items-center text-center text-white mx-auto">
                <h2 className='text-5xl font-bold mb-5'>Discover an exaceptional cooking class tailored for you!</h2>
                <p className='mb-6'>Cooking is the art and science of preparing food by combining ingredients and applying techniques like heating, mixing, and seasoning. It transforms raw ingredients into flavorful, nutritious meals that reflect culture, creativity, and tradition.</p>
                <div>
                    <button className='py-3 px-5 text-black font-bold rounded-full me-4 bg-green-400'>Explore Now</button>
                    <button className='py-3 px-5 border-2 rounded-full'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;