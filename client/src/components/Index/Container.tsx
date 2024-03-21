import Banner from './Banner.tsx';
import Business from './Business.tsx';
import Footer from './Footer.tsx';
import Smartphone from './Smartphone.tsx';
import Video from './Video.tsx';
import Wave from './Wave.tsx';

function container() {
  return (
    <div className="h-[800px] relative bg-white-700 w-full">
      <div className="mx-auto relative">
        <div className="w-[100%] relative flex justify-center max-w-[1300px] m-auto">
          <Banner />
          <Smartphone />
        </div>
      </div>
      <Wave />
      <Business />
      <Video />
      {/* <Tracking/> */}
      <Footer/>
    </div>
  );
}

export default container;
