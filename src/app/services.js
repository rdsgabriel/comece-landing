'use client';
import React from 'react';
import { useState } from 'react';

const Services = () => {
  const [bgColor, setBgColor] = useState('bg-red-500');

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <div className='bg-gray-100'>
      <h1 className=' text-4xl pt-10 md:text-7xl text-center font-franklin font-bold md:py-10'>Nossos Serviços</h1>
      <div className="flex md:flex-row-reverse flex-wrap px-10 py-10">
      <div className={`w-full md:w-2/5 ${bgColor} p-4 text-center text-gray-200`}>foto exemplo</div>
      <div className="w-full md:w-3/5 p-4 text-center text-gray-700 mb-4">
        <div className="flex flex-col">
          <div className="flex bg-gray-200">
            <button
              onClick={() => handleButtonClick('bg-green-500')}
              className="flex-1 text-gray-700 text-center bg-green-500 px-4 py-2 m-2 hover:bg-rosa"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick('bg-blue-500')}
              className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 hover:bg-rosa"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick('bg-yellow-500')}
              className="flex-1 text-gray-700 text-center bg-yellow-500 px-4 py-2 m-2 hover:bg-rosa"
            >
              3
            </button>
          </div>
          <div className={`${bgColor} w-full`} style={{ minHeight: '6rem' }}>
            <ul className="list-disc text-left ml-10 m-1014">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
