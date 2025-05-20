import { useEffect, useRef, useState } from 'react';
import MessageBox from '../../ui/MessageBox';
import MessageBubble from '../../ui/MessageBubble';
import OwnMessageBubble from '../../ui/OwnMessageBubble';
import ChatBoxHeader from '../../ui/ChatBoxHeader';
import { Bounce, toast } from 'react-toastify';

function ChatBox() {
  const [width, setWidth] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

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
  }, []);

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
        {Array.from({ length: 50 }).map((_, index) => {
          const isOwn = index % 2 === 0;
          if (isOwn) return <OwnMessageBubble key={index} />;
          else return <MessageBubble key={index} />;
        })}
      </div>
      {/* Message box container */}
      <div
        onClick={() => showJoinRequestAlert()}
        style={{ width: `${width}px` }}
        className="fixed    left-0 bottom-0 w-full bg-secondary"
      >
        <MessageBox />
      </div>
    </div>
  );
}

export default ChatBox;
