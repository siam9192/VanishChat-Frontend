import { useEffect } from 'react';
import ChatBox from '../components/section/chatroom/ChatBox';
import ChatBoxSidebar from '../components/ui/ChatBoxSidebar';
import socket from '../socket';
import { useParams } from 'react-router';

function ChatRoom() {

const {roomCode} = useParams()

   useEffect(() => {
    socket.on('connect',()=>{
      socket.emit("join-room",{code:roomCode})
    })
    return () => {
      socket.on('disconnect',()=>{
        console.log("Disconnected")
      })
    };
  }, []);
  
  return (
    <div className="h-screen lg:grid grid-cols-8">
      <div className="col-span-6">
        <ChatBox />
      </div>
      <div className="col-span-2 overflow-y-auto p-5 hide-scrollbar border-l-2 border-gray-700/20 dark:border-gray-800 lg:block hidden">
        <ChatBoxSidebar socket={socket}/>
      </div>
    </div>
  );
}

export default ChatRoom;
