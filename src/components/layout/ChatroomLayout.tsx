import { useContext, useEffect, useRef, useState } from 'react';
import ChatRoom from '../../pages/ChatRoom';
import ChatRoomRequest from '../../pages/ChatRoomRequest';
import { useParams } from 'react-router';
import { SocketContext } from '../../provider/SocketProvider';
function ChatroomLayout() {
  const [access, setAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const socket = useContext(SocketContext);
  const { roomCode } = useParams();
  useEffect(() => {
    if (!socket) return;
    const handelConnect = () => {
      socket.emit('seeking-access', {
        roomCode,
      });
    };

    const handeSeekingAccess =  (res: { status: boolean }) => {
      setAccess(res.status);
      setIsLoading(false);
    }
    socket.emit('seeking-access',{roomCode})
    socket.on('seeking-access-response',handeSeekingAccess );

    socket.on('connect', handelConnect);

    return () => {
      socket.off('connect', handelConnect);
       socket.off('seeking-access-response',handeSeekingAccess );
    };
  }, []);

  const updateAccess = (st: boolean) => setAccess(st);
  console.log(123,isLoading)
  if (isLoading) return <p>loading...</p>;

  return(
    <>
    {
      access ? <ChatRoom/> : <ChatRoomRequest setAccess={updateAccess}/>
    }
    </>
  )
}

export default ChatroomLayout;
