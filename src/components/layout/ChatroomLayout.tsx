import React, { useEffect, useRef, useState } from 'react';
import ChatRoom from '../../pages/ChatRoom';
import ChatRoomRequest from '../../pages/ChatRoomRequest';
import { io, Socket } from 'socket.io-client';

function ChatroomLayout() {
  const [access, setAccess] = useState(true);
  const socketRef = useRef<Socket>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:7000');
    const current = socketRef.current;

    if (!current) return;
    current.on('connect', () => {
      console.log('Socket connected:', current.id);
    });

    return () => {
      current.disconnect();
    };
  }, []);

  return <>{access ? <ChatRoom /> : <ChatRoomRequest />}</>;
}

export default ChatroomLayout;
