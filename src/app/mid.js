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

const Mid = ({toggleExpand, expanded}) => {
  const number1 = useNumberAnimation(0, 14, 100);
  const number2 = useNumberAnimation(0, 200, 6);
  const number3 = useNumberAnimation(0, 52, 25);
  return (
    <div className="p-4 bg-[url('/teste-mobile.svg')] bg-cover md:bg-[url('/teste.svg')]">
      <div className="container mx-auto max-w-screen-lg items-center py-12 md:py-24">
        <div className="flex justify-center mb-6 number-animation">
          <Image
            src={comeceIcon}
            alt="Logo"
            width={92}
            height={92}
          />
        </div>
        <div className="container mx-auto max-w-screen-lg items-center py-4">
          <h1 className="text-rosa text-center text-4xl md:text-7xl font-bold tracking-tight leading-tight">Marketing, Criatividade</h1>
          <h1 className="text-center text-rosa text-4xl md:text-7xl font-bold tracking-tight leading-tight">& Soluções</h1>
        </div>

        <div className="flex justify-center py-10 text-rosa space-x-4 md:space-x-12 ml-8">
          <div className="w-28 h-28 flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl ">{number1}</h1>
            <h2 className="text-base md:text-lg">Anos de</h2>
            <h2 className="text-base md:text-lg">Mercado</h2>
          </div>
          <div className="w-28 h-28 flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl">+{number2}</h1>
            <h2 className="text-base md:text-lg">Clientes</h2>
            <h2 className="text-base md:text-lg">Atendidos</h2>
          </div>
          <div className="w-28 h-28 flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl">+{number3}</h1>
            <h2 className="text-base md:text-lg">Marcas</h2>
            <h2 className="text-base md:text-lg">Atendidas</h2>
          </div>
        </div>

        <div className="mt-12 text-center">
      <a
      onClick={toggleExpand}
        href="#Lets"
        className="inline-block rounded-full bg-preto bg-opacity-70 border border-rosa px-8 py-3 text-sm font-medium text-bege transition hover:bg-rosa focus:outline-none focus:ring focus:ring-red-400 number-animation tracking-tight leading-tight"
      >
        Comece agora
      </a>
    </div>
      </div>
    </div>
  );
};

export default Mid;
