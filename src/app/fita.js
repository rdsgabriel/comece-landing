import Image from "next/image";
import comeceIcon from '../../public/icone2.svg';

const Fita = () => {
  return (
    <div className="bg-preto flex justify-center items-center py-2 font-franklinheavy">
      {[...Array(28)].map((_, index) => (
        <Image
          key={index}
          src={comeceIcon}
          alt="Logo"
          width={40}
          height={40}
          className="mx-0.5"
        />
      ))}
    </div>
  );
};

export default Fita;
