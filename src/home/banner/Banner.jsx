import { Link } from 'react-router-dom';
import bannerImage from '../../assets/Images/home-page/banner.jpg'
import useAuth from '../../hooks/useAuth';

const Banner = () => {
    const {user} = useAuth()

    return (
        <div className="relative" style={{
            backgroundImage: `url(${bannerImage})`,
            height: '95vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
        >
            <div className='absolute bg-gradient-to-r from-red-400/50 to-slate-200/45 h-full w-full text-white flex justify-center items-center'>
                <div className='flex gap-5'>
                    {
                        !user && 
                        <Link to={'/sign-up'}>
                    <button className='bg-[#ef3b32d7] hover:bg-[#e6dcdbcb] text-black rounded px-4 py-3 md:text-lg
                    '>Join as a donor</button>
                    </Link>
                    }
                    <button className='bg-[#e6dcdb] hover:bg-[#ef3b32af] text-black rounded px-4 py-3 md:text-lg'>Search Donors</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;