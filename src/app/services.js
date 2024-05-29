'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import comeceIcon from '../../public/icone2.svg';
const Services = () => {
  const [bgColor, setBgColor] = useState('bg-gray-100');

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <div className='bg-white'>
     <div className="p-4">
      <div className="flex md:flex-row-reverse flex-wrap px-10 py-10">
      <div className={`w-full md:w-2/5 ${bgColor} p-4 text-center text-gray-600`}>foto exemplo
      </div>
      
      <div className="w-full md:w-3/5 p-4 text-center text-gray-700 mb-4">
        <div className="flex flex-col">
          <div className="flex bg-gray-200">
            <button
              onClick={() => handleButtonClick('bg-green-500')}
              className="flex-1 text-gray-700 text-center bg-gray-100 px-4 py-2 m-2 hover:bg-rosa"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick('bg-blue-500')}
              className="flex-1 text-gray-700 text-center bg-gray-100 px-4 py-2 m-2 hover:bg-rosa"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick('bg-yellow-500')}
              className="flex-1 text-gray-700 text-center bg-gray-100 px-4 py-2 m-2 hover:bg-rosa"
            >
              3
            </button>
          </div>
          <div className={`${bgColor} w-full`} style={{ minHeight: '6rem' }}>
           
          </div>
        </div>
      </div>
    </div></div>
    </div>
  );
};

export default Services;
