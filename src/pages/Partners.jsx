import React from 'react';

const partners = [
  {
    name: 'Emirates',
    logo: 'https://i.ibb.co.com/ymFC4twQ/original-ace9287a37a77971bb8058f68dd27417.webp',
  },
  {
    name: 'AirAsia',
    logo: 'https://i.ibb.co.com/rRBgCpkK/malaysia-november-11-2024-airasia-260nw-2544203065.webp',
  },
  {
    name: 'Radisson Hotel',
    logo: 'https://i.ibb.co.com/v6vrrBBn/radisson-hotel-vrindavan.jpg',
  },
  {
    name: 'Marriott',
    logo: 'https://i.ibb.co.com/R4MbDyQH/21375617.jpg',
  },
  {
    name: 'Qatar Airways',
    logo: 'https://i.ibb.co.com/YTDW1nJg/images-16.jpg',
  }
 
];

const Partners = () => {
  return (
    <section className="w-11/12 mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pink-600">Our Trusted Partners</h2>
        <p className="text-pink-400 mt-2">
          We proudly collaborate with global travel leaders to provide the best experiences for you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
        {partners.map((partner) => (
          <div  className="flex mx-auto justify-center items-center">
           <div >
             <img data-aos="zoom-in-out"
              src={partner.logo}
              alt={partner.name}
              className=" w-40 h-40  object-contain grayscale
               hover:grayscale-0 transition duration-300"
            />
         <h2 data-aos='flip-right' className="text-xl font-bold text-pink-600">{partner.name}</h2>
           </div>
      
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
