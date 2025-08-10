import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookNow = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [bookInfo, setBookInfo] = useState(null);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://tour-management-server-kappa.vercel.app/addPackage/${id}`)
      .then((result) => {
        setBookInfo(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const Bookings = Object.fromEntries(formData.entries());

    const newBookings = {
      ...Bookings,
      status: 'pending',
      tourId: bookInfo._id,
      guideName: bookInfo['guide-name'],
      guideEmail: bookInfo['guide-email'],
      guideContact: bookInfo.contact,
      location: bookInfo.location,
      destination: bookInfo.destination,
    };

    axios
      .post(
        `https://tour-management-server-kappa.vercel.app/booking?email=${user.email}`,
        newBookings,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then(() => toast.success('Booking added successfully'))
      .catch((error) => console.log(error));
  };

  if (!bookInfo || loading) {
    return (
      <p className="text-center w-11/12 mx-auto p-4">Loading... Please wait</p>
    );
  }

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center text-pink-600 shadow-2xl mb-6">
        Book Now
      </h1>

      <form onSubmit={handleBooking}>
        <div className="bg-base-200 w-full mx-auto text-center py-6 px-4 rounded-xl shadow">
          <div className="card bg-base-100 shadow-xl p-6 max-w-3xl mx-auto">
            <div className="card-body space-y-4 text-left">
              {/* Tour Name */}
              <div className="flex flex-col">
                <label className="text-pink-600 font-semibold">Tour Name</label>
                <input
                  type="text"
                  name="tour-name"
                  className="input text-pink-400"
                  readOnly
                  value={bookInfo?.['tour-name'] || ''}
                />
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <label className="text-pink-600 font-semibold">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input text-pink-400"
                  readOnly
                  value={bookInfo?.price}
                />
              </div>

              {/* Booking Date */}
              <div className="flex flex-col">
                <label className="text-pink-600 font-semibold">Booking Date</label>
                <input
                  type="text"
                  name="date"
                  className="input text-pink-400"
                  defaultValue={date}
                />
              </div>

              {/* Buyer Name */}
              <div className="flex flex-col">
                <label className="text-pink-600 font-semibold">Buyer Name</label>
                <input
                  type="text"
                  name="buyer-name"
                  className="input text-pink-400"
                  defaultValue={user?.displayName}
                />
              </div>

              {/* Buyer Email */}
              <div className="flex flex-col">
                <label className="text-pink-600 font-semibold">Buyer Email</label>
                <input
                  type="text"
                  name="buyer-email"
                  className="input text-pink-400"
                  defaultValue={user?.email}
                />
              </div>

              {/* Special Note */}
              <div className="flex flex-col">
                <label className="text-pink-600 font-semibold">Special Note</label>
                <textarea
                  className="textarea h-24 text-pink-400"
                  name="note"
                  placeholder="Write a special note"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="text-center mt-6">
                <button type="submit" className="btn btn-neutral w-1/2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookNow;
