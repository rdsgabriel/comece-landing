import React from 'react';

const Ocean = () => {
  return (
    <div className="bg-preto py-4">
      <div className="flex flex-col md:flex-row mx-auto max-w-screen-lg w-full h-auto md:h-96 justify-around pt-5">
        <div className='flex-1 text-bege flex flex-col justify-center font-bold text-3xl md:text-4xl px-6 md:px-10'>
          <h1 className='whitespace-nowrap '>um oceano de</h1>
          <h1>ideias que</h1>
          <h1 className='bg-rosa rounded-md'>transformam.</h1>
        </div>
        <div className='flex-1 text-bege text-base md:text-lg flex flex-col justify-center  px-6 md:px-10 pt-10 md:mt-0 break-words'>
          <h2>A agência Comece é norteada por acreditar que vale a pena trabalhar para que sonhos se tornem realidade. Nós acreditamos em um oceano de ideias que transformam.</h2>
          <h2 className='py-4'>Somos <span className='text-rosa font-bold'>Comece</span> porque temos pressa de surpreender.</h2>
        </div>
      </div>
    </div>
  );
};

export default Ocean;

