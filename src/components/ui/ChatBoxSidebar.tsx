import { useContext, useEffect } from 'react';
import { ERoomMemberRole, type IRoomMember } from '../../types';
import { useParams } from 'react-router';
import type { Socket } from 'socket.io-client';
import { ChatroomContext } from '../../pages/ChatRoom';
import { SocketContext } from '../../provider/SocketProvider';
import { MdOutlineContentCopy } from 'react-icons/md';

function ChatBoxSidebar() {
  const socket = useContext(SocketContext);
  const { roomCode } = useParams();
  const { room, joinRequests, members } = useContext(ChatroomContext);

  const isOwner = room?.isOwner;
  const approveJoinRequest = (requestId: number) => {
    socket?.emit('join-request-approve', requestId);
  };
  const declineJoinRequest = (requestId: number) => {
    socket?.emit('join-request-decline', requestId);
  };

  const kickMember = (id: number) => {
    socket?.emit('member-remove', id);
  };

  const copyRoomCode = ()=>{
    navigator.clipboard.writeText(roomCode!)

  }
  return (
    <div>
      <div>
        <img src={room?.photo?.url} alt="" className="size-20 rounded-full mx-auto" />
        <h2 className="text-xl   font-medium text-center mt-2">{room?.name}</h2>
        < button onClick={copyRoomCode} className='mx-auto mt-2 flex items-center gap-2  text-sm active:opacity-60'>
          <span className='text-white'>
            <MdOutlineContentCopy />
          </span>
        <span>
            {
            roomCode
          }
        </span>
        </button>
        <div className="mt-5 text-end space-x-2">
          <button className="text-pink-500 font-medium" onClick={()=>socket?.emit('leave',roomCode)}>leave</button>
          {isOwner ? <button className="text-red-500 font-medium" onClick={()=>socket?.emit('close',roomCode)}>close room</button> : null}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-medium">Members({members.length})</h3>
        <div className="mt-4 grid grid-cols-3 lg:grid-cols-4 gap-3">
          {members.map((_, index) => (
            <div className="" key={index}>
              <img src={_.avatar?.url} alt="" className="size-20 mx-auto rounded-full" />
              <div className="mt-2">
                {_.isAnonymous ? (
                  <p className="text-pink-600 text-center">Anonymous</p>
                ) : (
                  <p className="text-center">{_.name}</p>
                )}
                {isOwner && _.role === ERoomMemberRole.Member ? (
                  <div className=" mt-1 text-center font-medium font-secondary">
                    <button onClick={() => kickMember(_.id)} className="text-red-500 text-sm">
                      Kickout
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOwner ? (
        <div className="mt-10">
          <h3 className="text-lg font-medium">Join Requests({joinRequests.length})</h3>
          {joinRequests.length ? (
            <div className="mt-4  space-y-4">
              {joinRequests.map((_, index) => (
                <div className="flex gap-2">
                  <img src={_.avatar.url} alt="" className="size-14 rounded-full" />
                  <div className="mt-2 ">
                    {_.isAnonymous ? (
                      <p className="text-pink-600">Anonymous</p>
                    ) : (
                      <p className="text-center">{_.name}</p>
                    )}
                    {isOwner ? (
                      <div className=" mt-1 text-sm font-medium font-secondary space-x-2">
                        <button onClick={() => declineJoinRequest(_.id)} className="text-red-500">
                          Decline
                        </button>
                        <button onClick={() => approveJoinRequest(_.id)} className="text-secondary">
                          Accept
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm">No Requests</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default ChatBoxSidebar;
