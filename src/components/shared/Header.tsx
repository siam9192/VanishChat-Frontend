import React from 'react'

function Header() {
  return (
    <header className='px-2 py-4 md:py-6 flex justify-between items-center'>
    <div className='flex items-center gap-2'>
      <img src=
      "/src/assets/logo.png" alt=""  className=' size-12 md:size-18'/>
        <h1 className=' text-2xl md:text-3xl  font-semibold '>Vasnish Chat</h1>
    </div>
      <div className='flex  items-center gap-2'>
        <p className=' text-sm md:text-xl font-medium'>
          {new Date().toDateString()}
        </p>
      </div>
    </header>
  )
}

export default Header