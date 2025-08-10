import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://tour-management-server-kappa.vercel.app/addPackage/${id}`)
      .then((result) => {
        setPackageDetails(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, user.accessToken]);

  const handleBookNow = (id) => {
    axios
      .patch(
        `https://tour-management-server-kappa.vercel.app/addPackage/${id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((result) => {
        console.log('Booking count updated', result.data);
        navigate(`/bookNow/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!packageDetails) {
    return <div className="w-11/12 mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-10">
      <div className="card lg:card-side bg-base-100 shadow-lg p-6 rounded-xl">
        <figure className="lg:w-1/2">
          <img
            src={packageDetails.image}
            alt={packageDetails?.['tour-name']}
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>

        <div className="card-body lg:w-1/2 space-y-4">
          {/* Guide Info */}
          <div className="flex gap-4 items-center">
            <img
              className="w-20 h-20 rounded-full shadow-lg"
              src={packageDetails?.['guide-photo']}
              alt="Guide"
            />
            <div>
              <h2 className="text-pink-600 font-bold text-lg">
                {packageDetails?.['guide-name']}
              </h2>
              <p className="text-pink-400 text-sm">
                Contact: {packageDetails?.contact}
              </p>
            </div>
          </div>

          {/* Tour Title */}
          <h2 className="text-2xl font-bold text-pink-600 mt-4">
            {packageDetails?.['tour-name']}
          </h2>

          {/* Details */}
          <div className="space-y-1 text-pink-400 text-sm">
            <p>
              <span className="text-pink-600 font-semibold">Duration:</span>{' '}
              {packageDetails?.duration}
            </p>
            <p>
              <span className="text-pink-600 font-semibold">Price:</span>{' '}
              ${packageDetails?.price}
            </p>
            <p>
              <span className="text-pink-600 font-semibold">Description:</span>{' '}
              {packageDetails?.details}
            </p>
            <p>
              <span className="text-pink-600 font-semibold">Location:</span>{' '}
              {packageDetails?.location}
            </p>
            <p>
              <span className="text-pink-600 font-semibold">Date:</span>{' '}
              {packageDetails?.date}
            </p>
            <p>
              <span className="text-pink-600 font-semibold">Destination:</span>{' '}
              {packageDetails?.destination}
            </p>
            <p>
              <span className="text-pink-600 font-semibold">Booking Count:</span>{' '}
              {packageDetails?.bookingCount}
            </p>
          </div>

          {/* Book Now Button */}
          <div className="mt-6">
            <button
              onClick={() => handleBookNow(packageDetails._id)}
              className="btn button-secondary w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
