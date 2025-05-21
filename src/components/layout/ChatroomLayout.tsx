import React, { useEffect, useRef, useState } from 'react';
import ChatRoom from '../../pages/ChatRoom';
import ChatRoomRequest from '../../pages/ChatRoomRequest';
import { io, Socket } from 'socket.io-client';
import Cookies from 'js-cookie';
import { useParams } from 'react-router';
function ChatroomLayout() {
  const [access, setAccess] = useState(false);
  const socketRef = useRef<Socket>(null);
  const [isLoading,setIsLoading] =  useState(true)
  const accessToken =  Cookies.get('accessToken')
  const {roomCode }=  useParams()
  useEffect(() => {
    socketRef.current = io('http://localhost:7000',{
      auth:{
        accessToken
      }
    });
    const current = socketRef.current;

    if (!current) return;
     current.on('connect', () => {
       current.emit('seeking-access',{
        roomCode
       })
      current.on('seeking-access-response',(res:{status:boolean})=>{
         setAccess(res.status)
         setIsLoading(false)
      })
    });
  
    return () => {
      current.disconnect();
    };
  }, []);
  
  if(isLoading) return <p>loading...</p>
  return <>{access ? <ChatRoom /> : <ChatRoomRequest />}</>;
}

export default ChatroomLayout;
