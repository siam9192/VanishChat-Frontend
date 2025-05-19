import React from 'react';
import MessageBox from '../../ui/MessageBox';
import MessageBubble from '../../ui/MessageBubble';
import OwnMessageBubble from '../../ui/OwnMessageBubble';
import ChatBoxHeader from '../../ui/ChatBoxHeader';

function ChatBox() {
  return (
    <div className="h-full relative ">
        <ChatBoxHeader/>
      <div className="px-5 ">
        {Array.from({ length: 50 }).map((_, index) => {
          const isOwn = index % 2 === 0;
          if (isOwn) return <OwnMessageBubble key={index} />;
          else return <MessageBubble key={index} />;
        })}
      </div>
      {/* Message box container */}
      <div className="sticky  top-[100vh]  left-0 w-full">
        <MessageBox />
      </div>
    </div>
  );
}

export default ChatBox;
