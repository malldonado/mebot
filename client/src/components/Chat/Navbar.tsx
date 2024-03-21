import { RiMessage2Line } from 'react-icons/ri';

function Navbar() {
  return (
    <div className="w-[30%] bg-white h-full flex justify-between flex-col">
      <div>
        <div className="text-center h-[50px] flex justify-start items-center mt-5 border-2 border-[#d0d7de] w-[90%] mx-auto pl-4 cursor-pointer">
          <RiMessage2Line className="mr-2" />
          <span className='text-[16px]'>ChatBot scans your website, help center...</span>
        </div>
      </div>
      <div className="w-[90%] h-[50px] flex justify-center items-center mx-auto mb-5 text-center bg-black text-white font-medium rounded-[2px] cursor-pointer">
        New chat
      </div>
    </div>
  );
}

export default Navbar;
