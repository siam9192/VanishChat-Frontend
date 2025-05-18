import React from 'react'
import Header from '../shared/Header'
import { Outlet } from 'react-router'

function CommonLayout() {
  return (
   <>
        <Header/>
      <div className='md:h-[calc(100vh_-_120px)] h-[calc(100vh_-_80px)] overflow-y-auto '>
             <Outlet/>
      </div>
      </>
  )
}

export default CommonLayout