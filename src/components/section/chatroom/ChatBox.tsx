import { useContext, useEffect, useRef, useState } from 'react';
import MessageBox from '../../ui/MessageBox';
import MessageBubble from '../../ui/MessageBubble';
import OwnMessageBubble from '../../ui/OwnMessageBubble';
import ChatBoxHeader from '../../ui/ChatBoxHeader';
import { Bounce, toast } from 'react-toastify';
import type { IMessage } from '../../../types';
import api from '../../../api';
import { useParams } from 'react-router';
import { ChatroomContext } from '../../../pages/ChatRoom';

function ChatBox() {
  const [width, setWidth] = useState(0);
  const { roomCode } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const {messages,isLoading} = useContext(ChatroomContext)
  
  useEffect(() => {
    const current = ref.current;
    if (!current) return;
    setWidth(current.clientWidth);

    const handler = () => {
      const current = ref.current;
      if (!current) return;
      setWidth(current.clientWidth);
    };

    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [isLoading]);

  
  function showJoinRequestAlert() {
    toast.info('🦄 Md hasan sent join request!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  }
  
 

  return (
    <div ref={ref} className="h-screen overflow-y-auto relative  hide-scrollbar ">
      <ChatBoxHeader />
      <div className="px-5 flex flex-col-reverse pb-40">
        {messages.map((_, index) => {
          const isOwn = _.isOwn
          if (isOwn) return <OwnMessageBubble message={_} key={index} />;
          else return <MessageBubble message={_} key={index} />;
        })}
      </div>
      {/* Message box container */}
      <div
       
        style={{ width: `${width}px` }}
        className="fixed    left-0 bottom-0 w-full bg-secondary"
      >
        <MessageBox />
      </div>
    </div>
  );
}

export default ChatBox;
