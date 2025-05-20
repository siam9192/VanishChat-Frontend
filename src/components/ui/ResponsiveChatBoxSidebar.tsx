import React, { useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import ChatBoxSidebar from './ChatBoxSidebar';
import { RxCross1 } from 'react-icons/rx';

const ResponsiveChatBoxSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-3xl">
        <AiOutlineMenuFold />
      </button>
      <div
        className={`w-full h-full fixed inset-0 bg-gray-950 p-2  overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        <ChatBoxSidebar />
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl  absolute left-2 top-2 text-white"
        >
          <RxCross1 />
        </button>
      </div>
    </>
  );
};

export default ResponsiveChatBoxSidebar;
