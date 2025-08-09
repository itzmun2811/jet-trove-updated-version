import React from 'react';
import { Bounce, Fade, Flip, Roll, Slide } from 'react-awesome-reveal';
import { FiStar } from "react-icons/fi";

const Reviews = () => {
    return (
        <div  data-aos="zoom-in-out"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
     className='w-11/12 mx-auto'>
            <div className='shadow-lg p-2  rounded-2xl'>
     <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center 
     mt-4 pt-6 pb-3 text-sky-800">
    Loved By Explorers Like You</h2>
<p className="text-center text-gray-600 mb-7 w-2/5 md:3/4 lg:3/4 mx-auto">Discover what 
our travelers  say about their experiences with us. From breathtaking
 destinations to caring guides, our guests share real stories that inspire 
 new journeys. Your adventure could be next!


</p>

   </div>

   <div className=' w-2/5 md:3/4 lg:w-3/4 mb-12 mx-auto flex flex-col
    justify-center items-center'>
<Slide>
<div className='lg:w-[500px] md:w-[500px] w-[300px] mx-auto text-center p-3 rounded-2xl mt-6 mb-6 shadow-2xl button-secondary'>
     <div>
<img className='mx-auto p-1 bg-white rounded-xl shadow' 
src="https://i.ibb.co/3Yrj078Y/download-1.jpg" alt="" />

<h1 className='text-2xl font-bold text-white py-2'>Shamima Akther</h1>
     </div>
     <div className='w-3/4 mx-auto bg-white p-2 rounded-xl shadow-md hover:shadow-lg space-y-4
     '> <h1><span className='text-2xl font-bold text-sky-600'>Tour-</span>
     <span className='text-gray-700 font-bold'>Jaflong Adventure</span></h1>
      <h1><span className='text-xl text-sky-600'>Description-</span>
      <span className='italic'>This was my first solo trip, and I felt so safe and cared for. 
      Highly recommend!</span>
      </h1>
      <h1><span className='text-xl text-sky-600'>Badge-</span>
      <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full
         text-md font-medium ml-2">#First Time Traveler</span>
      </h1>
      <h1>
        <div className='flex  flex-col lg:flex-row md:flex-row items-center justify-center'>
        <span className='text-xl text-sky-600'>Catagory Ratings-</span>
       
      <ul className='p-2 shadow m-1'>
       
 <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Guide:</span>
             <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
         
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Transport:</span>
          <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Value:</span>
          <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Accomodation:</span>
           <span>4</span>   <FiStar fill="orange" className="text-yellow-500" size={24} />
             
          </li>
      
       
       
      </ul>
      </div>
      </h1>

    
     </div>
</div>
</Slide>
{/*  */}
<Slide>
<div className='w-[300px] lg:w-[500px] md:w-[500px] mx-auto text-center p-3 
rounded-2xl mt-6 mb-6 shadow-2xl button-secondary'>
     <div>
<img className='mx-auto w-[200px] h-[200px] p-1 bg-white rounded-xl shadow object-contain' 
src="https://i.ibb.co/9HTYM7Hp/young-man-traveler-with-backpack-relaxing-outdoor-1421-175.jpg" alt="" />

<h1 className='text-2xl font-bold text-white py-2'>Rafiul Islam</h1>
     </div>
     <div className='w-4/5 mx-auto bg-white p-1 rounded-xl shadow-md hover:shadow-lg space-y-4
     '> <h1><span className='text-2xl font-bold text-sky-600'>Tour-</span>
     <span className='text-gray-700 font-bold'>Ratargul Swamp Forest
        </span></h1>
      <h1><span className='text-xl text-sky-600'>Description-</span>
      <span className='italic'>Incredible views and a very professional guide. Booking process was smooth and simple
      </span>
      </h1>
      <h1><span className='text-xl text-sky-600'>Badge-</span>
      <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full
         text-md font-medium ml-2">#Global Explorer</span>
      </h1>
      <h1>
        <div className='flex  flex-col lg:flex-row md:flex-row items-center justify-center'>
        <span className='text-xl text-sky-600'>Catagory Ratings-</span>
       
      <ul className='p-2 shadow m-1'>
       
 <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Guide:</span>
             <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
         
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Transport:</span>
          <span>4</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Value:</span>
          <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Accomodation:</span>
           <span>4</span>   <FiStar fill="orange" className="text-yellow-500" size={24} />
             
          </li>
      
       
       
      </ul>
      </div>
      </h1>

    
     </div>
</div>
</Slide>
{/*  */}
<Slide>
<div className='w-[300px] lg:w-[500px] md:w-[500px] mx-auto text-center p-3
 rounded-2xl mt-6 mb-6 shadow-2xl button-secondary'>
     <div>
<img className='mx-auto p-1 bg-white rounded-xl shadow' 
src="https://i.ibb.co/kgDX2ssQ/images-7.jpg" alt="" />

<h1 className='text-2xl font-bold text-white py-2'>Nusrath Jahan</h1>
     </div>
     <div className='w-3/4 mx-auto bg-white p-2 rounded-xl shadow-md hover:shadow-lg space-y-4
     '> <h1><span className='text-2xl font-bold text-sky-600'>Tour-</span>
     <span className='text-gray-700 font-bold'>Bandarban Trip</span></h1>
      <h1><span className='text-xl text-sky-600'>Description-</span>
      <span className='italic'>
        Booking was super simple and fast. I got confirmation within minutes and clear instructions in my email.</span>
      </h1>
      <h1><span className='text-xl text-sky-600'>Badge-</span>
      <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full
         text-md font-medium ml-2">#Frequent Traveler</span>
      </h1>
      <h1>
        <div className='flex  flex-col lg:flex-row md:flex-row items-center justify-center'>
        <span className='text-xl text-sky-600'>Catagory Ratings-</span>
       
      <ul className='p-2 shadow m-1'>
       
 <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Guide:</span>
             <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
         
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Transport:</span>
          <span>4</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Value:</span>
          <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Accomodation:</span>
           <span>4</span>   <FiStar fill="orange" className="text-yellow-500" size={24} />
             
          </li>
      
       
       
      </ul>
      </div>
      </h1>

    
     </div>
</div>
</Slide>
{/*  */}
<Slide>
<div className='w-[300px] lg:w-[500px] md:w-[500px] mx-auto text-center p-3 
rounded-2xl mt-6 mb-6 shadow-2xl button-secondary'>
     <div>
<img className='mx-auto p-1 bg-white rounded-xl shadow' 
src="https://i.ibb.co/0j0DXWmY/images-90.jpg" alt="" />

<h1 className='text-2xl font-bold text-white py-2'>Ahmed Reja</h1>
     </div>
     <div className='w-3/4 mx-auto bg-white p-2 rounded-xl shadow-md 
     hover:shadow-lg space-y-4
     '> <h1><span className='text-2xl font-bold text-sky-600'>Tour-</span>
     <span className='text-gray-700 font-bold'>Inani Beach Tour</span></h1>
      <h1><span className='text-xl text-sky-600'>Description-</span>
      <span className='italic'>Absolutely loved our trip to Inani Beach! The guide was amazing and every
         detail was taken care of.
        </span>
      </h1>
      <h1><span className='text-xl text-sky-600'>Badge-</span>
      <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full
         text-md font-medium ml-2">#Verified Traveler</span>
      </h1>
      <h1>
        <div className='flex flex-col lg:flex-row md:flex-row items-center justify-center'>
        <span className='text-xl text-sky-600'>Catagory Ratings-</span>
       
      <ul className='p-2 shadow m-1'>
       
 <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Guide:</span>
             <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
         
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Transport:</span>
          <span>4</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Value:</span>
          <span>5</span>  <FiStar fill="orange" className="text-yellow-500" size={24} /> 
            
          </li>
      
       <li className="flex items-center gap-2">
            <span className="w-32 text-gray-700 font-medium">Accomodation:</span>
           <span>4</span>   <FiStar fill="orange" className="text-yellow-500" size={24} />
             
          </li>
      
       
       
      </ul>
      </div>
      </h1>

    
     </div>
</div>
</Slide>
</div>

        </div>
    );
};

export default Reviews;