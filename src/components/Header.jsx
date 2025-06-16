import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, Links, NavLink } from 'react-router';
import logo2 from "../../src/assets/logo2.webp"
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ onToggleTheme, theme }) => {
  const {user,logOut} =use(AuthContext);
  console.log(user?.photoURL)

  const links=<>
  <Link to="/">Home</Link>
  <Link className='mx-3' to="/allPackages">All Packages</Link>
  <Link className='mr-3' to="/about">About Us</Link>
  {user && <Link to='/mybookings'>My Bookings</Link>}
  </>

  const handleLogOut=()=>{
  logOut()
  .then(console.log('no user'))
  .catch(error=>{console.log(error)})
  }
    return (
       <>
<div className="navbar w-3/4 md:w-4/5 lg:w-11/12 mx-auto mb-6
 p-0 bg-gradient-to-bl from-sky-700 to-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center'>
      <div className='rounded-full w-10 h-10 md:w-14 md:h-14 ml-1 lg:ml-4 
      lg:w-16 lg:h-16 shadow-2xl overflow-hidden '>
<img className=' w-full h-full object-cover lg:ml-2' src={logo2} alt="" />
      </div>
      
      < h1 className=" text-xs md:text-sm lg:text-xl font-bold">Jet_Trove</h1>
    </div>
 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
{(user) ? 
   
   <>
<div className="dropdown dropdown-start mr-8">
  <div tabIndex={0} role="" className="m-1">
<div className="avatar">
  <div className=" w-16 md:w-20 lg:w-24 rounded-full">
    <img className=" w-[60px] md:w-[80px] lg:w-[100px]  p-4 rounded-full" src={user?.photoURL} alt="" />
  </div>
</div>


</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100
   rounded-box z-1 w-32 md:w-44 lg:w-52 p-2 md:mr-4 lg:mr-8 shadow-sm">
   <li><NavLink to='/addPackage'>Add Package
    </NavLink>
    </li>
   <li><NavLink to='/managePackage'>Manage Package
    </NavLink></li>

       <li><button onClick={handleLogOut}>Logout</button></li> 
  </ul>
</div>

</> :<>
     <button className='btn'><NavLink to='/login'>Login</NavLink> 
    </button>
   
    </>
    
  
  }
  
       <button onClick={onToggleTheme} className='bg-sky-700 ml-0 pl-0  lg:ml-2'> 
       {theme === "light" ? <MdModeNight size={30} /> : 
       <MdOutlineLightMode size={30} />}
      </button>
  </div>


      

  


</div>
       </>
    );
};

export default Header;