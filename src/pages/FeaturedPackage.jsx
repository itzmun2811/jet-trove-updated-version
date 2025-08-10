import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const FeaturedPackage = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://tour-management-server-kappa.vercel.app/featuredData')
      .then((result) => {
        setPackages(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mx-auto w-full m-4 px-4 sm:px-6 lg:px-8">

      <div className="text-center my-10 w-full">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">Featured Tour Packages</h2>
        <p className="max-w-2xl mx-auto text-pink-400">
          Embark on an unforgettable journey with our expertly curated travel experiences. Guided by professionals, each tour offers comfort, adventure, and culture — all in one.
        </p>
      </div>

      <div  data-aos="fade-up"
     data-aos-duration="3000"  className="grid grid-cols-1 md:grid-cols-2 
     lg:grid-cols-3 gap-10">
        {packages.map((singlePackage, index) => (
          <Fade key={index} triggerOnce>
            <div className="bg-white shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
 
              <div className="relative">
                <img
                  src={singlePackage.tourImage}
                  alt={singlePackage.tourName}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 px-4 py-2">
                  <h3 className="text-white text-lg font-semibold">{singlePackage.tourName}</h3>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-4">
         
                <div className="flex items-center gap-4">
                  <img
                    src={singlePackage.guideImage}
                    alt={singlePackage.guideName}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black text-base">Guide: {singlePackage.guideName}</h4>
                  </div>
                </div>

            
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <span>⏳</span>
                    <span>{singlePackage?.duration}</span>
                  </div>

                  <div className="flex items-center gap-1 text-gray-500">
                    <span>📅</span>
                    <span>{singlePackage?.departureDate}</span>
                  </div>

                  <div className="flex items-center gap-1 text-green-600 font-medium">
                    <FaMoneyBillWave className="text-lg" />
                    <span>{singlePackage.price}</span>
                  </div>
                </div>

            
                <button
                  onClick={() => navigate(`/allPackages`)}
                  className="mt-auto w-full button-primary py-2 px-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>


      <div className="text-center mt-8">
        <button
          className="btn button-secondary px-6 py-2 text-white font-medium hover:bg-sky-700 transition"
          onClick={() => navigate('/allPackages')}
        >
          Show All Packages
        </button>
      </div>
    </div>
  );
};

export default FeaturedPackage;
