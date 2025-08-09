import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router';  // <-- corrected import
import banner1 from "../assets/photo-1533371452382-d45a9da51ad9.jpeg";
import banner2 from "../assets/b3bd8d7e24021eae0a6bf95f0b0cb7fe.jpg";
import banner3 from "../assets/blue-purple-sunset-on-a-tropical-beach-free-photo.webp";


const banners = [
  {
    img: banner1,
    heading: "From Dreaming to Departing - We've Got You Covered",
    description:"Start your adventure with confidence. Our expert planning and trusted guides ensure every step of your journey is seamless, safe, and unforgettable."
  },
  {
    img: banner2,
    heading: "Discover Hidden Gems Across the Globe",
    description:"Unlock the world’s best-kept secrets. Explore lesser-known destinations rich with culture, beauty, and authentic experiences waiting just for you"
  },
  {
    img: banner3,
    heading: "Enjoy peace of mind with our carefully curated travel packages.",
    description:"Enjoy peace of mind with our carefully curated travel packages. We prioritize your safety and comfort so you can focus on making amazing memories."
  }
 
];

const Banner1 = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {banners.map(({ img, heading,description }, index) => (
          <SwiperSlide key={index}>
            <div data-aos="flip-right"
              className="hero relative min-h-screen w-3/4 md:w-4/5 lg:w-full mx-auto bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="hero-overlay bg-black/50"></div>
              <div className="hero-content text-neutral-content text-center ">
                <div className=" rounded-lg mx-auto">
                  <h1 className="text-3xl md:text-4xl font-bold p-4 text-white">
                    <Typewriter
                      options={{
                        strings: [heading],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 40,
                        pauseFor: 2500,
                      }}
                    />
                  </h1>
                  <p className="mb-6 text-gray-200 text-lg leading-relaxed">
           {description}
                  </p>
                  <NavLink to="/allPackages">
                    <button className="btn btn-info bg-white text-sky-700 font-semibold hover:bg-sky-100 transition px-8 py-3 rounded-lg">
                      Explore Now!!
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner1;
