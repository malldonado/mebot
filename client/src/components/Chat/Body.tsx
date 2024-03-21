import Navbar from './Navbar'
import Conversation from './Conversation'

function Body() {
  return (
    <div className='flex justify-center items-start h-screen w-full relative bg-black'>
      <Navbar/>
      <Conversation/>
    </div>
  )
}

export default Body
