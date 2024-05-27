import React from 'react';
import Image from 'next/image';
import ativo from '../../public/ativo.svg'

const Header = () => {
  return (
    <header className="bg-preto h-12 py-3.5">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center">
        <Image
        priority
        src={ativo}
        width={150}
        height={150}
        alt='Agência Comece'
        />
        </div>
      </div>
    </header>
  );
};

export default Header;