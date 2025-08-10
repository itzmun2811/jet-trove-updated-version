import axios from 'axios';
import React, { use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Loading from '../pages/Loading';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://tour-management-server-kappa.vercel.app/booking?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((result) => {
        setBooking(result.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);
 if(loading) <Loading></Loading>
  const handleConfirm = (id) => {
    axios
      .patch(
        `https://tour-management-server-kappa.vercel.app/booking/${id}?email=${user.email}`,
        {},
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((result) => {
        toast.success('Status updated successfully');
        setBooking((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status: 'completed' } : item))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="w-11/12 mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        My Bookings 
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="table w-full text-sm">
          <thead className="bg-pink-100 text-pink-700 text-md">
            <tr>
              <th>Tour Name</th>
              <th>Guide Name</th>
              <th>Contact</th>
              <th>Departure Date</th>
              <th>Location</th>
              <th>Destination</th>
              <th>Note</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((book, index) => (
              <tr
                key={book._id}
                className="hover:bg-pink-50 transition-all duration-200"
                data-aos="zoom-in-left"
              >
                <td className="text-pink-600 font-medium">{book['tour-name']}</td>
                <td className="text-pink-400">{book.guideName}</td>
                <td className="text-pink-400">{book.guideContact}</td>
                <td className="text-pink-400">{book.date}</td>
                <td className="text-pink-400">{book.location}</td>
                <td className="text-pink-400">{book.destination}</td>
                <td className="text-pink-400">{book.note || '—'}</td>
                <td>
                  {book.status === 'pending' ? (
                    <button
                      onClick={() => handleConfirm(book._id)}
                      className="btn btn-sm bg-pink-600 text-white hover:bg-pink-700"
                    >
                      Confirm
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold">Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default MyBookings;
