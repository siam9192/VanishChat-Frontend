import ChatBox from '../components/section/chatroom/ChatBox';
import ChatBoxSidebar from '../components/ui/ChatBoxSidebar';

function ChatRoom() {
  return (
    <div className="h-screen lg:grid grid-cols-8">
      <div className="col-span-6">
        <ChatBox />
      </div>
      <div className="col-span-2 overflow-y-auto p-5 hide-scrollbar border-l-2 border-gray-800 lg:block hidden">
     <ChatBoxSidebar/>
      </div>
    </div>
  );
}

export default ChatRoom;
