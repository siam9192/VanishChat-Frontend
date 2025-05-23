import { createContext, useContext, useEffect, useState } from 'react';
import ChatBox from '../components/section/chatroom/ChatBox';
import ChatBoxSidebar from '../components/ui/ChatBoxSidebar';
import { useNavigate, useParams } from 'react-router';
import type { IMessage, IRoom, IRoomJoinRequest, IRoomMember } from '../types';
import { Socket } from 'socket.io-client';
import { getRoomByCode } from '../services';
import { SocketContext } from '../provider/SocketProvider';
import { Bounce, toast } from 'react-toastify';

interface IChatroomContext {
  joinRequests: IRoomJoinRequest[];
  members: IRoomMember[];
  messages: IMessage[];
  room: IRoom | null;
  socket: Socket | null;
  isLoading: boolean;
}

export const ChatroomContext = createContext<IChatroomContext>({
  joinRequests: [],
  members: [],
  messages: [],
  room: null,
  socket: null,
  isLoading: true,
});

function ChatRoom() {
console.log("hello")
  const [members, setMembers] = useState<IRoomMember[]>([]);
  const [joinRequests, setJoinRequests] = useState<IRoomJoinRequest[]>([]);
  const [room, setRoom] = useState<IRoom | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { roomCode } = useParams();
  const socket = useContext(SocketContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!socket) return;

    const handleNewJoin = (data: IRoomMember) => {
      setMembers((prev) => {
        if (prev.some((member) => member.userId === data.userId)) return prev;
        return [...prev, data];
      });
    };

    const handelEnterRoom  = (data:IRoom)=>{
      setRoom(data);
      setMembers(data.members);
      setJoinRequests(data.joinRequests);
      setIsLoading(false);
      setMessages(data.messages)
    }  

    const handelNewJoinRequest = (data: IRoomJoinRequest) => {
      setJoinRequests((p) => [...p, data]);
    };

    const handelMemberLeave =  (id:number)=>{
        setMembers((p) => {
             
      const find =  p.find(_=>_.id=== id)
      if(find){
 toast.info(`${find.isAnonymous ? 'Anonymous':find.name} has left`, {
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
        return   p.filter((_) => _.id !== id)
        });
    }

    // socket.emit('join-room', { code: roomCode });
    socket.emit('join_room', { code: roomCode });
    socket.on('new_join', handleNewJoin);
    socket.on('new-join-request', handelNewJoinRequest);
    socket.emit("current-room",roomCode)
    socket.on("current-room-data",handelEnterRoom)
    socket.on('join-request-response-client', (id) => {
      setJoinRequests((p) => p.filter((_) => _.id !== id));
    });
    socket.on('remove', () => {
      navigate('/', { replace: true });
    });
    socket.on('closed',() => {
      navigate('/', { replace: true });
    })
    socket.on('member-removed', (id) => {
      setMembers((p) => p.filter((_) => _.id !== id));
    });
    socket.on("member-leave",handelMemberLeave)
    socket.on("leaved",()=>{
      navigate('/')
    })
    socket.on("member-offline",(id)=>{
      const find =  members.find(_=>_.id)
      if(find){
 toast.info(`${find.isAnonymous ? 'Anonymous':find.name} got offline`, {
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
      const updated = members.map((_)=>{
        if(_.id === id){
          _.status = 'Inactive'
        }
        return _
      })
      setMembers(updated)
    })

    const handelNewMessage = (message:IMessage)=>{
      setMessages(p=>[message,...p])
    }
    socket.on('new-message',handelNewMessage)
    return () => {
      socket.off('new_join', handleNewJoin);
      socket.off('new-join-request', handelNewJoinRequest);
      socket.off("member-leave",handelMemberLeave)
      socket.off('new-message',handelNewMessage)
        socket.off("current-room-data",handelEnterRoom)
    };
  }, [roomCode, socket]);

  
  
  if (isLoading) return <p>loading..</p>;
  const value = {
    joinRequests,
    members,
    messages: messages,
    room,
    socket,
    isLoading,
  };
  
  return (
    <ChatroomContext.Provider value={value}>
      <div className="h-screen lg:grid grid-cols-8">
        <div className="col-span-6">
          <ChatBox />
        </div>
        <div className="col-span-2 overflow-y-auto p-5 hide-scrollbar border-l-2 border-gray-700/20 dark:border-gray-800 lg:block hidden">
          <ChatBoxSidebar />
        </div>
      </div>
    </ChatroomContext.Provider>
  );
}

export default ChatRoom;
