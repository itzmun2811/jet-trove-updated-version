import axios from 'axios';
import React, { use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import Loading from '../pages/Loading';

const UpdatePackage = () => {
 const {user} =useContext(AuthContext);
 const {id} =useParams()
 const[formData,setFormData]=useState([]);
  const [loading, setLoading] = useState(true);
    
  
  useEffect(()=>{
    axios.get(`https://tour-management-server-kappa.vercel.app/addPackage/${id}`)
    .then(result=>{
        console.log(result.data)
        setFormData(result.data)
        setLoading(false);
    })
    .catch(error=>{
        console.log(error)
    })
    
  },[id])
  
     const handleUpdate=(e,id)=>{
        e.preventDefault();
        const form= e.target;
        const formdata = new FormData(form);
        const updatedData= Object.fromEntries(formdata.entries());
          
        axios.put(`https://tour-management-server-kappa.vercel.app/addPackage/${id}?email=${user.email}`,updatedData,{
            headers:{
                authorization:`Bearer ${user.accessToken}`
            }
        })
        .then(result=>{
            console.log(result.data)
            toast.success('Your Tour Package updated successfully!!')
        })
        .catch(error=>{
            console.log(error);
        })
     }
 if(loading){
  return <Loading></Loading>
 }

  return (
        <>

  <h1 className='text-xl font-bold text-center mt-8 '>Update Your Package</h1>
     
     
     
      <div>
<div className='w-[400px] mx-auto'>
    <img className='w-3/4 mx-auto' src={formData.image} alt="" />
</div>

<form onSubmit={(e)=>handleUpdate(e,formData._id)}>
<div className="bg-base-200 w-11/12 mx-auto text-center">

   
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
   <fieldset className="fieldset text-center font-bold text-[16px] p-4">

  <div className='flex gap-4 items-center'>
    <label className="label text-pink-600">Tour Name -</label>
    <input type="text" name='tour-name' className="input text-pink-400" defaultValue={formData['tour-name']} />
  </div>

  <div className='flex gap-4 items-center '>
    <label className="label text-pink-600">Image</label>
    <input type="text" name='image' className="input text-pink-400" defaultValue={formData.image} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Duration</label>
    <input type="text" name='duration' className="input text-pink-400" defaultValue={formData.duration} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Departure Location</label>
    <input type="text" name='location' className="input text-pink-400" defaultValue={formData.location} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Destination</label>
    <input type="text" name='destination' className="input text-pink-400" defaultValue={formData.destination} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Price</label>
    <input type="text" name='price' className="input text-pink-400" defaultValue={formData.price} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Departure Date</label>
    <input type="text" name='date' className="input text-pink-400" defaultValue={formData.date} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Package Details</label>
    <input type="text" name='details' className="input text-pink-400" defaultValue={formData.details} />
  </div>

  <div className='flex gap-4'>
    <label className="label text-pink-600">Contact No</label>
    <input type="text" name='contact' className="input text-pink-400" defaultValue={formData.contact} />
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

        <button className='btn button-primary w-1/2' type="submit">update</button>
      </div>
    </div>
  </div>
</form>


      </div>
            
        </>
    );



    
};

export default UpdatePackage;