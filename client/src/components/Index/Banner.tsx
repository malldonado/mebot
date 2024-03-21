import '../../index.css';

function Banner() {
  return (
    <div className=" w-[70%] mx-auto max-w-7xl px-4 sm:px-6 mt-10 lg:px-8">
        <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline mr-2 text-[60px] quicksand">Help customers instantly with an AI-driver</span>
                <span className="block text-[#1D74F5] xl:inline text-[60px] quicksand">mebot</span>
            </h1>
            <p className="mt-[20px] text-[25px] text-gray-500 sm:mx-auto lg:mx-0 quicksand pr-[10%]">ChatBot scans your website, help center, or other designated resource to provide quick and accurate AI-generated answers to customer questions.</p>
        </div>
    </div>
  )
}

export default Banner
