import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../shared/Header';
import ChatRoom from '../../pages/ChatRoom';
import ChatRoomRequest from '../../pages/ChatRoomRequest';

function ChatroomLayout() {
  const [access, setAccess] = useState(true);
  return <>{access ? <ChatRoom /> : <ChatRoomRequest />}</>;
}

export default ChatroomLayout;
