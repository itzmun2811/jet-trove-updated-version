import React, { use, useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../pages/Loading';

const ManagePackage = () => {

     const {user} =useContext(AuthContext);
     const[info,setInfo] =useState([]);
     const navigate =useNavigate();
      const [loading, setLoading] = useState(true);
     console.log(user.accessToken)

        useEffect(()=>{
            axios.get(`https://tour-management-server-kappa.vercel.app/addPackageByEmail?email=${user.email}`,{
                headers:{
                    authorization:`Bearer ${user.accessToken}`
                }
            })
            .then(result=>{
                console.log(result)
                setInfo(result.data)
                setLoading(false)
            })
            .catch(error=>{
                 console.log(error)
            })

        },[user])


const handleDelete = (id) => {
        Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`https://tour-management-server-kappa.vercel.app/addPackage/${id}`,
         {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setInfo(prev => prev.filter(item => item._id !== id));
          }
        })
        .catch((error) => {
          console.error("Delete failed:", error);
         
        });
    }
  });
};


        const handleUpdate=(id)=>{
            navigate(`/updatePackage/${id}`)
        }

 if(loading){
  <Loading></Loading>
 }
    return (
        <div className='w-11/12 mx-auto max-w-6xl my-12'>
            
            <h1 className='text-2xl font-bold text-center pt-8 text-pink-600 '>Manage Your Packages</h1>
            <p className='text-lg text-pink-400 text-center pb-6'>Keep your tours fresh and exciting! Update your package info, add new destinations,
             or remove ones that are no longer active.</p>
            <div className="overflow-x-auto py-12">
  <table className="table">
    {/* head */}
    <thead>




        
      <tr className='text-pink-600'>
    
        <th>Tour Name</th>
        <th>Duration</th>
        <th>Price</th>
        <th>Date</th>
        <th>Image</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
        {info.map(data=>(
  <tr className="bg-base-200 text-pink-400">
        <th>{data['tour-name']}</th>
        <th>{data.duration}</th>
        <th>{data.price}</th>
        <th>{data.date}</th>
        <td>{data.image}</td>
      
        <td>
       <button className="btn button-primary" onClick={()=> handleUpdate(data._id)} >
        <NavLink to='/updatePackage'>Update</NavLink>
    </button>
       <button onClick={()=>handleDelete(data._id)} className="btn mr-2 button-secondary">Delete</button>

        </td>

</tr>
        ))
        }
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManagePackage;