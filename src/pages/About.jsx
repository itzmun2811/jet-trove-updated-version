import React from 'react';

const About = () => {
    return (
        <div className='w-11/12 mx-auto text-center p-12 shadow-2xl rounded-2xl bg-base-200'>
            <div data-aos="zoom-in">
                <h1 className='text-3xl font-bold mb-4 text-pink-600'>About Us -JetTrove
                </h1>
                <p  className='font-bold text-pink-400'> Beyond Destinations, Experience the Spirit of Bangladesh.</p>
               
                   
             
            </div>
<div data-aos="fade-left" className='shadow-xl p-4 mt-4'>
                <h1 className='text-3xl font-bold text-pink-600 mb-4 pt-4'>Our Identity</h1>
                <p className='text-lg text-pink-400 mb-6 w-3/4 text-center mx-auto'>
                   At JetTrove, we believe travel is more than just a
     destination—it's an experience that creates memories for a lifetime.
     Founded in 2023, our mission is to make booking amazing tours simple, enjoyable, and reliable. Whether you’re seeking relaxation on tropical beaches, thrilling mountain adventures, 
     or vibrant city explorations, JetTrove has got you covered.
                </p>
            </div>





             <div data-aos="fade-up-right" className="mb-16 shadow-2xl mt-4 pt-4 py-12 px-8">
    <h1 className="text-2xl font-bold text-center text-pink-600 mb-7">Why Choose Us?</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      <div className="bg-white p-6 rounded-lg shadow ">
        <h4 className="text-lg font-semibold text-pink-400 mb-3">Local Expertise</h4>
        <p className="text-sm text-gray-600">Our team knows the land like no one else — ensuring you uncover hidden gems, not just tourist traps.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow ">
        <h4 className="text-lg font-semibold text-pink-400 mb-3">Custom Packages</h4>
        <p className="text-sm text-gray-600">Every traveler is different. We craft tours that suit your pace, interests, and budget.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow ">
        <h4 className="text-lg font-semibold text-pink-400 mb-3">Trusted Support</h4>
        <p className="text-sm text-gray-600">Our team is here 24/7 — from planning to return — for complete peace of mind.</p>
      </div>
    </div>
        </div>

  <div data-aos="fade-up-right">
                <h1 className='text-3xl font-bold text-pink-600 mb-4'>Our Mission</h1>
                <p className='text-lg text-pink-400 mb-6 w-3/4 text-center mx-auto'>
                   To empower every traveler — local or international — with authentic, safe, and seamless tour experiences across Bangladesh. From the lush hills of Sylhet to the serene beaches of Cox's Bazar, we aim to make your trip extraordinary.
                </p>
            </div>

 <div data-aos="fade-down-right">
    <h1 className="text-3xl font-semibold text-center mb-6 text-pink-600">Our Values</h1>
    <div>
      <div className="bg-white p-4 rounded-lg shadow text-center">
  
      
      <ul className=" shadow-2xl p-4 text-pink-400 space-y-2">
        <li>1.Customer First: Your satisfaction is our priority.</li>
        <li>2.Trusted Experiences: We partner with trusted tour providers worldwide.</li>
        <li>3.Passion for Adventure: Helping you explore the world with excitement.</li>
        <li>4.Transparency & Support: Clear pricing and excellent customer service.</li>
      </ul>
      
      </div>

    </div>
  </div>
</div>

    
    );
};

export default About;