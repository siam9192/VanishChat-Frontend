import { useEffect, useState } from "react";
import type { IRoom, IRoomJoinRequest, IRoomMember } from "../../types";
import { getRoomByCode } from "../../services";
import { useParams } from "react-router";
import type { Socket } from "socket.io-client";

interface IProps {
  socket:Socket
}

function ChatBoxSidebar({socket}:IProps) {
  const {roomCode} = useParams()
  const [room,setRoom] =  useState<IRoom|null>(null)
  const [isLoading,setIsLoading] =  useState(true)
  const [members,setMembers] = useState<IRoomMember[]>([])
  const [joinRequests,setJoinRequests] = useState<IRoomJoinRequest[]>([])
  
  useEffect(()=>{
    getRoomByCode(roomCode!).then(data=>{
      setRoom(data)
      setMembers(data.members)
      setJoinRequests(data.joinRequests)
      setIsLoading(false)
    })
  },[])

  

  const isOwner =  room?.isOwner
if(isLoading) return <p>loading..</p>

  return (
    <div>
      <div>
        <img
          src={room?.photo.url}
          alt=""
          className="size-20 rounded-full mx-auto"
        />
        <h2 className="text-xl   font-medium text-center mt-2">{room?.name}</h2>
        <div className="mt-5 text-end space-x-2">
          <button className="text-pink-500 font-medium">leave</button>
          {
            isOwner ? <button className="text-red-500 font-medium">close room</button> :
            null
          }
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-medium">Members({members.length})</h3>
        <div className="mt-4 grid grid-cols-3 lg:grid-cols-4 gap-3">
          {members.map((_, index) => (
            <div className="" key={index}>
              <img
                src={_.avatar.url}
                alt=""
                className="size-20 mx-auto rounded-full"
              />
              <div className="mt-2">
               {
                _.isAnonymous ? <p className="text-pink-600">Anonymous</p> :  <p className="text-center">{_.name}</p>

               }
              {
                isOwner ?   <div className=" mt-1 text-center font-medium font-secondary">
                  <button className="text-red-500 text-sm">Kickout</button>
                </div>
                :
                null
              }
              </div>
            </div>
          ))}
        </div>
      </div>
     {
      isOwner ?
       <div className="mt-10">
        <h3 className="text-lg font-medium">Join Requests({joinRequests.length})</h3>
 {
  joinRequests.length ?
         <div className="mt-4  space-y-4">
          {joinRequests.map((_, index) => (
            <div className="flex gap-2">
              <img
                src={_.avatar.url}
                alt=""
                className="size-14 rounded-full"
              />
              <div className="mt-2 ">
                {
                _.isAnonymous ? <p className="text-pink-600">Anonymous</p> :  <p className="text-center">{_.name}</p>
               }
             {
              isOwner ?    <div className=" mt-1 text-sm font-medium font-secondary space-x-2">
                  <button className="text-red-500">Decline</button>
                  <button className="text-secondary">Accept</button>
                </div>
                :
                null
             }
              </div>
            </div>
          ))}
        </div>
        :
        <p className="text-sm">
          No Requests
        </p>
 }
      </div>
      :
      null
     }
    </div>
  );
}

export default ChatBoxSidebar;
