import { MdGroups2 } from 'react-icons/md'
import { RxKeyboard } from 'react-icons/rx'
import Container from '../components/container/Container'
import { useState } from 'react'
import CreateChatModal from '../components/ui/CreateChatModal';

function Home() {
  const [code,setCode] =  useState('');

  return (
<Container addedClass='h-full flex justify-center items-center'>
     
     <div className='text-center w-full lg:w-1/2'>
     <img src="/src/assets/home-bg.png" alt=""  className='mx-auto'/>
    <div className='space-y-3'>
          <h1 className=' text-4xl md:text-5xl  font-primary'>Chat with your <span className='text-secondary'>favourite</span> one</h1>
       <p className='text-gray-800 dark:text-gray-200 font-secondary text-sm'>Stay connected with the people who matter most. Whether it’s a quick catch-up or a deep conversation, chat effortlessly with your favorite person anytime, anywhere. Our platform makes it easy to share moments, express yourself, and keep the conversation going—because great relationships begin with meaningful communication.</p>

    </div> 
    <div className='mt-10 flex md:flex-row flex-col  justify-center items-center gap-4  mx-auto '>
      <CreateChatModal>
        <button className='px-6 py-3 bg-primary hover:bg-secondary  text-white rounded-full flex items-center gap-2'> <span className='text-2xl'> <MdGroups2 /></span><span>
        Create Chat</span></button>
        </CreateChatModal>
        <div className= ' w-10/12 md:w-1/2 border-2 rounded-md border-gray-600/40 flex items-center gap-1 px-2'>
        <span className='text-2xl'>
          <RxKeyboard />
        </span>
          <input onChange={(e)=>setCode(e.target.value)} type="text" className='border-none outline-none placeholder:text-gray-800 dark:placeholder:text-gray-300 placeholder:capitalize placeholder:font-normal p-3 font-semibold  uppercase' placeholder='Enter room code..'/>
        </div>
        <button disabled={!code} className='font-bold text-secondary disabled:text-gray-700 '>Join now</button>
    </div>
     </div>
  
</Container>
  
  )
}

export default Home