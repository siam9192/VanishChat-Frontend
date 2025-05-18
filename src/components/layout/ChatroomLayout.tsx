import React from 'react'
import { Outlet } from 'react-router'
import Header from '../shared/Header'

function ChatroomLayout() {
  return ( 
      <>
        <Header/>
        <Outlet/>
      </>
   
  )
}

export default ChatroomLayout