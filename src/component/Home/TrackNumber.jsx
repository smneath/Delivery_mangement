import React from 'react';

function TrackNumber() {
  return (
    <div className='flex items-center justify-center h-screen bg-blue-500'>
      <div className='mt-20 ml-20 w-full'>
        <p className='text-white text-4xl w-1/3'>
          TRACK THE STATUS OF YOUR PARCEL
        </p>
        <p className='text-white mt-7 w-[190px]'>
          Enter the tracking number of your parcel to track the status of your parcel.
        </p>
        <button className='flex items-center px-4 py-2 mt-10 border-2 border-gray-400 
        rounded-lg hover:bg-gray-200 bg-white
         w-[500px] h-[80px] text-left shadow-lg text-xl'>
          Enter Your Tracking Number
        </button>
        <button className='px-4 py-2 mt-10 border-2 border-gray-400 rounded-lg hover:bg-gray-200 
            bg-white w-[150px] h-[80px] shadow-lg text-xl text-black'>
          Track
        </button>
      </div>
    </div>
  );
}

export default TrackNumber;
