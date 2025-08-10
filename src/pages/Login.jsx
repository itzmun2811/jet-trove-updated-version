import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
    const {signInUser,googleSignIn,setLoading}=use(AuthContext);
     const navigate =useNavigate();
    const location =useLocation();
   const from=location.state?.from?.pathname || '/';
   console.log("Redirect from path:", location.state?.from?.pathname);

 const  handleLogin  = (e)=>{
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            signInUser(email,password)
            .then(result=>{
                console.log(result.user);
                  Swal.fire({
            title: " You've logged in successfully.",
            icon: "success",
            draggable: true});

     navigate(from, {replace:true});

                })
             .catch(error=>{
                console.log(error)
                

setLoading(false)


           
             })}


    



    const handleGoogleLogIn =()=>{
    googleSignIn()
    .then(result=>{
        console.log(result.user)
         navigate(from, { replace: true }); 
    })
    .catch(error=>{
        console.log(error)
    })
    }

    return (
      <div className="hero w-11/12 my-6 mx-auto button-secondary ">

  <form onSubmit={handleLogin}>
<div className="card bg-base-100 lg:mt-12 lg:mb-12 shadow-2xl p-8">
      <div className="card-body">
         <h1 className="text-5xl text-pink-600 font-bold">Login now!</h1>
        <fieldset className="fieldset text-pink-600">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button type='submit' className="btn button-primary mt-4">Login</button>
        </fieldset>
       
        <p className='text-center text-pink-600 my-2 font-semibold'>Or</p>
                <div className='flex items-center justify-center'>
                <button onClick={handleGoogleLogIn} className="btn 
                 text-black ">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                 Login with Google
               </button>
                </div>
   <p className='border-t font-bold text-pink-600 mt-3 pt-3'>
    Just Joined to this site <Link to="/register" className='text-pink-400 font-bold m-1 border-b text-[19px]'>Register</Link>Now</p>


      </div>
    </div>

  </form>
    
  </div>
    );
};

export default Login;