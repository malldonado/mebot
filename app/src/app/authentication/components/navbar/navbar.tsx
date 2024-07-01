// import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../img/logo.svg';

const Navbar: React.FC = () => {
  return (
    <div className="bg-white border-gray-200 mx-auto absolute top-0 h-14 z-10 w-full">
      <div className="container h-14 flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center max-w-7xl">
            <Image src={Logo} alt="Flowbite Logo" height={34} width={150} />
          </a>
      </div>
    </div>
  );
};

export default Navbar;
