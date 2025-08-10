import React from 'react';

const destinations = [
  {
    title: "Cox's Bazar",
    img: "https://i.ibb.co/ccx53wT2/Inani-Beach-Rivers-Cox-s-Bazar-10.jpg",
    history: "Named after Captain Hiram Cox, a British officer who rehabilitated refugees in the 18th century.",
    popularFor: "World’s longest natural sea beach (120 km). Known for sunbathing, surfing & beach tourism.",
    link: "https://en.wikipedia.org/wiki/Cox%27s_Bazar",
  },
  {
    title: "Bagerhat (Sixty Dome Mosque)",
    img: "https://i.ibb.co/F13CMC7/images-5.jpg",
    history: "Founded in the 15th century by saint Khan Jahan Ali, Bagerhat was a flourishing medieval city.",
    popularFor: "Sixty Dome Mosque (Shat Gambuj), a UNESCO World Heritage Site with historic Islamic architecture.",
    link: "https://en.wikipedia.org/wiki/Sixty_Dome_Mosque",
  },
  {
    title: "Saint Martin’s Island",
    img: "https://i.ibb.co/xKQcVHyL/st-martin-island-1-1.jpg",
    history: "The only coral island of Bangladesh, named after British captain James Martin.",
    popularFor: "Crystal-clear water, coral reefs, and a tropical island experience like no other.",
    link: "https://en.wikipedia.org/wiki/Saint_Martin%27s_Island",
  },
  {
    title: "Ratargul Swamp Forest",
    img: "https://i.ibb.co/h1CMLnkQ/Ratargul-2.jpg",
    history: "One of the world's rare freshwater swamp forests, located near Sylhet.",
    popularFor: "Amazon-like experience during monsoon with tree-covered waterways and boat rides.",
    link: "https://en.wikipedia.org/wiki/Ratargul_Swamp_Forest",
  },
];

const TopDestination = () => {
  return (
    <section  className="lg:w-11/12 mx-auto px-4 py-12 ">
    
      <div  className="text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">Top Destinations in Bangladesh</h2>
        <p className="text-pink-400 max-w-2xl mx-auto">
          Discover the most iconic travel spots, each rich in history, culture, and breathtaking scenery. Whether you're a beach lover or a history buff, there's something for everyone.
        </p>
      </div>


      <div  data-aos="flip-up-down"
     data-aos-duration="3000"   className="grid grid-cols-1  gap-8">
        {destinations.map((place) => (
          <div
      
            className=" shadow-md rounded-xl 
            overflow-hidden hover:shadow-xl transition duration-300"
          >
           
<img
              src={place.img}
              alt={place.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-xl font-bold text-pink-700 mb-2">{place.title}</h3>
              <p className="text-sm text-pink-400 mb-2">
                <span className="font-semibold text-pink-600">History:</span> {place.history}
              </p>
              <p className="text-sm text-pink-400 mb-4">
                <span className="font-semibold text-pink-700">Popular For:</span> {place.popularFor}
              </p>
              <a
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-primary text-pink-700 text-sm font-semibold px-4 py-2 rounded hover:bg-pink-700 transition"
              >
                Learn More-{place.link}
              </a>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestination;
