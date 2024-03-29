import '../../index.css';

function Band() {
  return (
    <div className="bg-[#121F33]">
      <div className="max-w-[100%] mx-auto py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex justify-start items-center">
            <button className="flex p-2 hover:bg-indigo-500 rounded-lg bg-[#121F33]">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
            </svg>
            </button>
            <p className="ml-3 font-medium text-white truncate">
              <span className="hidden md:inline nunito-font">
                {" "}
                Ativa suas notificações para acompanhar seu pedido
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Band;
