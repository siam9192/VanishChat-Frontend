import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../shared/Header';

function ChatroomLayout() {
  const [access, setAccess] = useState(false);
  return (
    <>
      <Outlet />
    </>
  );
}

export default ChatroomLayout;
