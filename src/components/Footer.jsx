import React from 'react';
import logo2 from "../assets/logo2.webp"
import { NavLink } from 'react-router';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
    
    <footer className="w-full mx-auto footer bg-background
     to-white footer-vertical md:footer-horizontal lg:footer-horizontal footer-start bg-base-200 text-base-content rounded p-10">
  
  <div className=''>
        <div className='rounded-full w-16 h-16 shadow-2xl overflow-hidden '>
  <img className=' w-full h-full object-cover' src={logo2} alt="" />
        </div>
        
        < h1 className=" text-xl font-bold">Jet_Trove</h1>
        
      </div>

      <div>
        <p className="text-sm">
        123 Travel Street<br />
        Dhaka, Bangladesh 1205<br />
        Phone: +880 1234 567890<br />
        Email: info@jettrove.com
      </p>
      </div>
  <nav className="grid grid-flow-row gap-4">
   
    <li><NavLink to='/about'>About Us</NavLink></li>
    <li><a className="link link-hover">Contact</a></li>
    <li><a href="https://www.booking.com/content/terms.html" className="hover:underline">Terms & Conditions</a></li>
    <li><a href="https://www.booking.com/content/terms.html" className="hover:underline">Privacy Policy</a></li>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.instagram.com" target="_blank">
           <BsInstagram size={25} fill='pink'></BsInstagram>
           </a>
       <a href="https://www.youtube.com" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
        <a href="https://www.github.com" target="_blank">
           <BsGithub size={25}></BsGithub>
          </a>
            <a href="https://www.facebook.com" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <nav>
<aside >
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Jet_Trove Industries Ltd</p>
  </aside>
  </nav>
   
  
</footer>

    );
};

export default Footer;