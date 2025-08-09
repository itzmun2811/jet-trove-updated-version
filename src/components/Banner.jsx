import React from 'react';
import { NavLink } from 'react-router';
import banner from "../assets/beach1.jpeg"
import img1 from ".././assets/garden.jpg"
import img2 from ".././assets/sajek.jpeg"
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (

 <div
  className="hero container mx-auto"
  style={{
    backgroundImage:
      `url(${banner}))`,
  }}
>
<div className=' p-12 mb-2 text-white mx-auto max-w-xl  px-4 flex gap-4'>
  <input type="text" placeholder="Where You Want to GO"
   className="input input-bordered px-12 rounded-2xl shadow-sm
    py-3  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold text-gray-700"
    
   
   
   />
   
 
   <button className='btn bg-gradient-to-l from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-2xl font-bold shadow-md hover:scale-105
   
   '> GO</button>
    </div>

  <div className="hero-overlay"></div>


  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
     <h1 className='text-2xl font-bold p-4 '>
<Typewriter
 options={{
    loop: true,
    delay: 50,
  }}
  onInit={(typewriter) => {
    typewriter.typeString(
    "From Dreaming to Departing - We've Got You Covered"
    )
    .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
    
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</h1>
      <p className="mb-5">
        Whether you're planning your first trip or 
 your next big adventure, JetTrove is your trusted travel companion. <br />Browse curated packages, connect with expert guides, and book your journey — all in one place.
      </p>
  
    </div>
  </div>
</div>




















//         <div className='w-11/12 mx-auto mb-9  flex flex-col justify-center items-center text-white text-center
//         rounded-xl shadow-lg  "
// ' >
       /* <div className='px-6 max-w-2xl'
<div className=' p-12 mb-2 text-white mx-auto max-w-xl  px-4 flex gap-4'>
  <input type="text" placeholder="Where You Want to GO"
   className="input input-bordered px-12 rounded-2xl shadow-sm
    py-3  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold text-gray-700"
    
   
   
   />
 
   <button className='btn bg-gradient-to-l from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-2xl font-bold shadow-md hover:scale-105
   
   '> GO</button>
    </div> */

    // {/*  */}

 



 /* <div className='text-sky-700 flex flex-col items-center justify-center mx-auto pt-4 px-12 pb-12 mt-12 mb-12 w-11/12'>
     <h1 className='text-2xl font-bold p-4 '>
<Typewriter
 options={{
    loop: true,
    delay: 50,
  }}
  onInit={(typewriter) => {
    typewriter.typeString(
    "From Dreaming to Departing - We've Got You Covered"
    )
    .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteAll()
    
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</h1>


 
  <p className='w-3/4 pt-3 pb-4 text-center'>
 Whether you're planning your first trip or 
 your next big adventure, JetTrove is your trusted travel companion. <br />Browse curated packages, connect with expert guides, and book your journey — all in one place.



   </p>
    <button className='btn btn-info bg-white text-center'>
   <NavLink to='/allPackages'>Explore Now!!
  </NavLink>

  </button>
    </div> */


   
// </div>
         


/* <div className='flex w-11/12 mx-auto gap-9'>
        <div className='flex gap-9 w-[400px]'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
        </div>
    </div> */

        // </div>
    )}


export default Banner;











 
 