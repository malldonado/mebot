import Chat from '../../images/chat.gif';
import Background from '../../images/background.svg';

function Video() {
  return (
    <div>
      <div className="flex justify-center flex-col w-full items-center mt-5">
      <div className='h-[1000px] relative w-full'>
      <img className='w-full object-cover h-[800px]' src={Background} alt="" />
        <img className="w-[400px] absolute top-[45px] bottom-0 mx-auto right-0 left-0" src={Chat} alt="GIF" />
      </div>
      </div>
    </div>
  );
}

export default Video;
