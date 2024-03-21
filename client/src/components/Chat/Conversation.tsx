import { GrSend } from "react-icons/gr";

function Conversation() {
  return (
    <div className='w-[70%] h-full'>
      <div className="flex justify-center items-end h-full pb-5">
        <input type="text" className="w-[90%] mx-auto h-[50px] bg-white font-semibold placeholder:font-semibold px-5 outline-none" placeholder="Message mebot..." />
        <GrSend className="h-[50px] absolute right-[5%] text-[25px] cursor-pointer" />
      </div>
    </div>
  )
}

export default Conversation
