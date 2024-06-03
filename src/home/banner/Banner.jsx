import bannerImage from '../../assets/Images/home-page/banner.jpg'

const Banner = () => {

    return (
        <div className="relative" style={{
            backgroundImage: `url(${bannerImage})`,
            height: '95vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
        >
            <div className='absolute bg-black opacity-70 h-full w-full text-white flex justify-center items-center'>
                <div className='flex gap-5'>
                    <button className='btn'>Join as a donor</button>
                    <button className='btn'>Search Donors</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;