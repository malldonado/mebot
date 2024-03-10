// import Logo from '../../../images/'

function Navbar() {
  return (
    <div className="min-h-full">
      <nav className="bg-[#4f46e5]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-start">
            <div className="flex items-center">
              {/* <img src={Logo} alt="" className="h-9" /> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="" className="bg-white text-black rounded-md px-4 py-3 text-sm font-medium">Dashboard</a>
                <a href="#" className="text-gray-300 hover:bg-white hover:text-black rounded-md px-4 py-3 text-sm font-medium">Pacotes</a>
              <a href="#" className="text-gray-300 hover:bg-white hover:text-black rounded-md px-4 py-3 text-sm font-medium">Histórico</a>
              <a href="#" className="text-gray-300 hover:bg-white hover:text-black rounded-md px-4 py-3 text-sm font-medium">Matheus</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
