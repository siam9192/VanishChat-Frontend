import React from 'react';
import Logo from './Logo';
import { AiOutlineMenuFold } from 'react-icons/ai';
import ResponsiveChatBoxSidebar from './ResponsiveChatBoxSidebar';

function ChatBoxHeader() {
  return (
    <div className=" lg:hidden sticky top-0 left-0 w-full  bg-black py-3 px-2 z-20 flex  justify-between items-center">
      <div>
        <Logo />
      </div>

      <div className="flex items-center gap-2">
        <img
          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740"
          alt=""
          className="size-10 rounded-full"
        />
        <div>
          <p className="font-secondary font-medium">Friends Zone...</p>
          <p className="text-xs font-medium text-secondary">20 online</p>
        </div>

        <ResponsiveChatBoxSidebar />
      </div>
    </div>
  );
}

export default ChatBoxHeader;
