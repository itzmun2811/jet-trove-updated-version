import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import { Zoom } from 'react-awesome-reveal';

const AllPackages = () => {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  const { user } = React.useContext(AuthContext);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/packageDetails/${id}`);
  };

  const handleSearchText = () => {
    if (searchValue) {
      axios
        .get(`https://tour-management-server-kappa.vercel.app/addPackageBySearch?search=${searchValue}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    } else {
      axios
        .get('https://tour-management-server-kappa.vercel.app/addPackage')
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      {/* Header Section */}
      <div className="shadow-lg p-4 rounded-2xl mt-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-pink-700">All Packages</h2>
        <p className="text-center text-pink-400 mt-2 mb-4 max-w-2xl mx-auto">
          From beach escapes to mountain retreats, explore our hottest travel deals at unbeatable prices. Only
          available for a short time — act fast before they're gone!
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center bg-white rounded-full shadow-md mt-6 mb-6 p-2 border border-gray-200 max-w-xl mx-auto">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a package..."
          className="w-full px-5 py-2 bg-transparent focus:outline-none text-gray-700"
        />
        <button
          onClick={handleSearchText}
          className="flex items-center gap-1 bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
        >
          <FiSearch size={20} />
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-6">
        {Array.isArray(data) &&
          data.map((info, idx) => (
          <Zoom key={info._id || idx}>
  <div className="w-80 h-[500px] mx-auto bg-white shadow-md rounded-2xl overflow-hidden border flex flex-col justify-between">
    
    {/* Image Section */}
    <div className="h-52 w-full overflow-hidden">
      <img
        src={info.image}
        alt={info?.['tour-name']}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="p-4 flex-1 flex flex-col justify-between">
      <h3 className="text-xl font-bold text-center text-sky-700 mb-2 line-clamp-2">
        {info?.['tour-name']}
      </h3>

      {/* Guide Info */}
      <div className="flex items-center gap-3 justify-center mb-4">
        <img
          src={info?.['guide-photo']}
          alt={info?.['guide-name']}
          className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
        />
        <div className="text-center">
          <p className="text-sm font-semibold text-pink-600">{info?.['guide-name']}</p>
          <p className="text-xs text-gray-500">Tour Guide</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="text-sm text-gray-700 space-y-1 text-center mb-4">
        <p><span className="font-semibold text-sky-700">Duration:</span> {info?.duration}</p>
        <p><span className="font-semibold text-sky-700">Price:</span> {info?.price}</p>
        <p><span className="font-semibold text-sky-700">Date:</span> {info?.date}</p>
      </div>

      {/* Button */}
      <button
        onClick={() => handleDetails(info._id)}
        className="btn btn-primary button-secondary w-full text-white font-semibold"
      >
        View Details
      </button>
    </div>
  </div>
</Zoom>

          ))}
      </div>
    </div>
  );
};

export default AllPackages;
