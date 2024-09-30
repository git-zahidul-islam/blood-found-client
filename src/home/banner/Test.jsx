import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
// images
// import img1 from '../assets/banImg1.jpg';
// import img2 from '../assets/banImg2.jpg';
import img3 from '../../assets/Images/home-page/banner.jpg'

const Test = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Ensure navigation buttons are linked after Swiper is initialized
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full text-white/95">
            <div className="md:w-[30%] w-full bg-[#ce3d61] md:px-16 px-8 md:py-4 py-2 space-y-4 md:flex hidden flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                Reawaken your passion for collections
              </h1>
              <p className="text-lg">Explore a variety of unique cards on eBay.</p>
              <button className="border-[1px] border-white/50 rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#991747]">
                Shop Now
              </button>
            </div>
            <div className="md:w-[70%] w-full md:h-[450px] h-[280px]">
              <img className="object-cover w-full h-full" src={img3} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full text-white/95">
            <div className="hidden md:w-[30%] w-full bg-[#ce3d61] md:px-16 px-8 md:py-4 py-2 space-y-4 md:flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
                The right sneakers to pave your way
              </h1>
              <p className="text-lg">Explore a variety of unique cards on eBay.</p>
              <button className="border-[1px] border-white/50 rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#991747]">
                Shop Now
              </button>
            </div>
            <div className="md:w-[70%] w-full md:h-[450px] h-[280px]">
              <img className="object-cover w-full h-full" src={img3} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button ref={prevRef} className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
        <FaChevronCircleLeft className="text-white" size={40} />
      </button>
      <button ref={nextRef} className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <FaChevronCircleRight className="text-white" size={40} />
      </button>
    </div>
  );
};

export default Test;