import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    title: "Jaflong Adventure",
    text: "This was my first solo trip, and I felt so safe and cared for. Highly recommend!",
    name: "Shamima Akhter",
    img: "https://i.ibb.co/3Yrj078Y/download-1.jpg",
  },
  {
    title: "Ratargul Swamp Forest",
    text: "Incredible views and a very professional guide. Booking process was smooth and simple.",
    name: "Rafiul Islam",
    img: "https://i.ibb.co/9HTYM7Hp/young-man-traveler-with-backpack-relaxing-outdoor-1421-175.jpg",
  },
  {
    title: "Bandarban Trip",
    text: "Booking was super simple and fast. I got confirmation within minutes and clear instructions in my email.",
    name: "Nusrath Jahan",
    img: "https://i.ibb.co/kgDX2ssQ/images-7.jpg",
  },
  {
    title: "Inani Beach Tour",
    text: "Absolutely loved our trip to Inani Beach! The guide was amazing and every detail was taken care of.",
    name: "Ahmed Reja",
    img: "https://i.ibb.co/0j0DXWmY/images-90.jpg",
  },
];

const Reviews = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="w-11/12 mx-auto my-12"
    >
      <div className="shadow-lg p-6 rounded-2xl bg-white">
        <h2 className="text-center text-pink-700 font-bold text-xl md:text-2xl lg:text-3xl mb-4">
          Loved By Explorers Like You
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
          Discover what our travelers say about their experiences with us. From breathtaking
          destinations to caring guides, our guests share real stories that inspire new journeys.
          Your adventure could be next!
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {reviews.map((review) => (
          <SwiperSlide >
            <div className="text-center p-6 max-w-sm mx-auto">
              
              <div className="relative w-72 h-72 mx-auto text-white rounded-full button-secondary flex flex-col justify-center items-center shadow-md">
                <h3 className="text-xl font-bold border-b pb-1">{review.title}</h3>
                <p className="italic text-sm mt-3 px-4">{review.text}</p>
                <div className="flex justify-center mt-4 space-x-1">
                
                    <FaStar  size={20} fill="orange" />
                    <FaStar size={20} fill="orange" />
                    <FaStar size={20} fill="orange" />
                    <FaStar  size={20} fill="orange" />
                    <FaStar  size={20} fill="orange" />
            
                </div>

                <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-18 h-18 rounded-full border-2 border-white shadow-md"
                  />
                  <span className="text-white font-semibold text-sm">{review.name}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
