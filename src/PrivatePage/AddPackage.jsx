import React, { use } from 'react';
import img from "../assets/tour.jpg"
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';


const AddPackage = () => {
    const {user} =use(AuthContext)
   
     
    

     const handleFormSubmit=(e)=>{
        e.preventDefault();
        const form= e.target;
        const formdata = new FormData(form);
        const packageData= Object.fromEntries(formdata.entries());
        console.log(packageData);
        const newPackageData ={
            ...packageData,
            bookingCount:0,
        }
        console.log(newPackageData)
        axios.post("https://tour-management-server-kappa.vercel.app/addPackage",newPackageData,
       
           
        )
        .then(res=>{
            console.log(res.data.data)
            toast.success('Your Tour Package added successfully!!')
        })
        .catch(error=>{
            console.log(error)
        })
     }
    return (
        <div className='my-8'>

  <h1 data-aos="zoom-out" className='text-xl text-pink-600 font-bold text-center py-4 '>Add Tour Package</h1>
      <div className='py-4' data-aos="fade-in-right">


<form onSubmit={handleFormSubmit}>
<div className="bg-base-200 w-11/12 mx-auto text-center m">

   
    <div className="card bg-base-100 ">
      <div className="card-body">
     <fieldset className="fieldset text-center font-bold text-[16px] p-4">

  <div className='flex gap-4 items-center'>
    <label className="label text-pink-600">Tour Name -</label>
    <input type="text" name='tour-name' className="input text-pink-400" placeholder="Tour Name" />
  </div>

  <div className='flex gap-4 items-center '>
    <label className="label text-pink-600">Image</label>
    <input type="text" name='image' className="input text-pink-400" placeholder="image" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Duration</label>
    <input type="text" name='duration' className="input text-pink-400" placeholder="duration" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Departure Location</label>
    <input type="text" name='location' className="input text-pink-400" placeholder="departure-Location" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Destination</label>
    <input type="text" name='destination' className="input text-pink-400" placeholder="destination" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Price</label>
    <input type="text" name='price' className="input text-pink-400" placeholder="price" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Departure Date</label>
    <input type="text" name='date' className="input text-pink-400" placeholder="departure-date" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Package Details</label>
    <input type="text" name='details' className="input text-pink-400" placeholder="Package-details" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Contact No</label>
    <input type="text" name='contact' className="input text-pink-400" placeholder="contact-no" />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Guide Name</label>
    <input type="text" name='guide-name' className="input text-pink-400" defaultValue={user.displayName} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Guide Photo</label>
    <input type="text" name='guide-photo' className="input text-pink-400" defaultValue={user.photoURL} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Guide Email</label>
    <input type="text" name='guide-email' className="input text-pink-400" defaultValue={user.email} />
  </div>

</fieldset>

        <button className='btn button-primary w-1/2' type="submit">add package</button>
      </div>
    </div>
  </div>
</form>


      </div>
            
        </div>
    );
};

export default AddPackage;