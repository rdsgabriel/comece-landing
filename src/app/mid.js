'use client'

import React, { useState, useEffect } from 'react';
import comeceIcon from '../../public/icone.svg';
import Image from 'next/image';

const useNumberAnimation = (initialNumber, finalNumber, intervalTime = 100) => {
  const [number, setNumber] = useState(initialNumber);

  useEffect(() => {
    if (initialNumber < finalNumber) {
      const interval = setInterval(() => {
        setNumber((prevNumber) => {
          if (prevNumber < finalNumber) {
            return prevNumber + 1;
          }
          return prevNumber;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [finalNumber, initialNumber, intervalTime]);

  return number;
};

const Mid = () => {
  const number1 = useNumberAnimation(0, 14, 100);
  const number2 = useNumberAnimation(0, 200, 5);
  const number3 = useNumberAnimation(0, 52, 25);

  return (
    <div className="p-4" style={{ backgroundImage: "url('/image.png')", backgroundSize: 'cover' }}>
      <div className="container mx-auto max-w-screen-lg items-center py-12 md:py-24">
        <div className="flex justify-center mb-6 number-animation">
          <Image
            src={comeceIcon}
            alt="Logo"
            width={92}
            height={92}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="container mx-auto max-w-screen-lg items-center py-4 font-franklinheavy ">
          <h1 className="text-white text-center text-4xl md:text-7xl font-bold">Marketing, Criatividade</h1>
          <h1 className="text-center text-white text-4xl md:text-7xl y font-bold">& Soluções</h1>
        </div>

        <div className="flex justify-center py-10 font-franklin text-white space-x-4 md:space-x-12 pl-10">
          <div className="w-28 h-28 flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl ">{number1}</h1>
            <h2 className="text-base md:text-xl">Anos de</h2>
            <h2 className="text-base md:text-xl">Mercado</h2>
          </div>
          <div className="w-28 h-28 flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl">+{number2}</h1>
            <h2 className="text-base md:text-xl">Clientes</h2>
            <h2 className="text-base md:text-xl">Atendidos</h2>
          </div>
          <div className="w-28 h-28 flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl">+{number3}</h1>
            <h2 className="text-base md:text-xl">Marcas</h2>
            <h2 className="text-base md:text-xl">Atendidas</h2>
          </div>
        </div>

        <div className="flex justify-center items-center max-w-screen-lg">
          <button className="bg-rosa hover:bg-rose-600 text-white font-franklin text-xl md:text-2xl font-bold rounded-full h-12 w-48">
            Comece já
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mid;
