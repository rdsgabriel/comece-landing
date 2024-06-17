'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
const Services = () => {
  const [bgColor, setBgColor] = useState('bg-transparent');

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <div className='bg-preto aos' data-aos='fade-up'>
     <div className="p-4 py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
     <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-bege  md:text-4xl ">Nossos Serviços</h2>
     <div className="flex bg-preto">
            <button
              onClick={() => handleButtonClick('bg-green-500')}
              className="flex-1 text-gray-700 bg-bege text-center py-2 m-2 rounded-r-xl hover:border hover:border-bege hover:bg-rosa hover:text-bege focus:bg-rosa focus:text-bege focus:border focus:border-bege"
            >
             Marketing
            </button>
            <button
              onClick={() => handleButtonClick('bg-blue-500')}
              className="flex-1 text-gray-700 bg-bege text-center py-2 m-2 rounded-r-xl hover:border hover:border-bege hover:bg-rosa hover:text-bege focus:bg-rosa focus:text-bege focus:border focus:border-bege"
            >
             Desenvolvimento
            </button>
            <button
              onClick={() => handleButtonClick('bg-yellow-500')}
              className="flex-1 text-gray-700 bg-bege text-center py-2 m-2 rounded-r-xl border-double hover:border hover:border-bege hover:bg-rosa hover:text-bege focus:bg-rosa focus:text-bege focus:border focus:border-bege"
            >
             Design
            </button>
          </div>
      <div className="flex px-10 py-10">

        
      <div className={`w-full  ${bgColor} p-4 text-center text-bege border border-bege rounded-xl`}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
        distinctio alias voluptatum blanditiis laudantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.</p>
      </div>
      
      <div className="w-full p-4 text-center text-bege mb-4">
        
          
          <div className={`${bgColor} w-full border rounded-xl flex items-center justify-center border-bege min-h-full`} >
          <p>foto</p>
        </div>
      </div>
    </div></div>
    </div>
  );
};

export default Services;
