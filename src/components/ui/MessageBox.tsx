import { useContext, useRef, useState } from 'react';
import { BsEmojiSurprise } from 'react-icons/bs';
import { LuSend } from 'react-icons/lu';
import { SocketContext } from '../../provider/SocketProvider';
import { ChatroomContext } from '../../pages/ChatRoom';
import { useParams } from 'react-router';

function MessageBox() {
  const socket =  useContext(SocketContext)
  const {room} =  useContext(ChatroomContext)
  const ref =  useRef<HTMLTextAreaElement>(null)
  const [value,setValue] = useState('')
  const {roomCode} =  useParams()
  const sendMessage =  ()=>{
     const current =  ref.current
        if(!socket||!current) return
        socket.emit('send-message',{
          roomCode,
          message:value
        })

        setValue('')
        current.value = ''
      
  }
  return (
    <div className=" p-2 md:p-5 flex  gap-2  ">
      <textarea ref={ref} onChange={(e)=>setValue(e.target.value)} className="w-full py-2 bg-gray-100 dark:bg-black outline-none border-none hide-scrollbar p-2 max-h-14 lg:max-h-20 rounded-md" />
      <div className="flex items-center gap-4">
        <button onClick={sendMessage} className="text-white text-xl">
          <LuSend />
        </button>
        <button className="text-white text-xl">
          <BsEmojiSurprise />
        </button>
        {/* <button className="text-white text-xl">
          <GoFileMedia />
        </button> */}
      </div>
    </div>
  );
}

export default MessageBox;
