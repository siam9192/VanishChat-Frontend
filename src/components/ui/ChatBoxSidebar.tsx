import React from 'react'

function ChatBoxSidebar() {
  return (
    <div>
           <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/877/721/non_2x/video-chatting-modern-flat-concept-for-web-banner-design-group-of-friends-communicate-in-online-call-write-messages-remote-employees-confer-online-illustration-with-isolated-people-scene-vector.jpg"
            alt=""
            className="size-20 rounded-full mx-auto"
          />
          <h2 className="text-xl   font-medium text-center mt-2">Friends secret zone</h2>
          <div className='mt-5 text-end space-x-2'>
               <button className='text-pink-500 font-medium'>leave</button>
            <button className='text-red-500 font-medium'>close room</button>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-medium">Members(20)</h3>
          <div className="mt-4 grid grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="">
                <img
                  src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740"
                  alt=""
                  className="size-20 mx-auto rounded-full"
                />
                <div className="mt-2">
                  <p className="text-center">Member {index + 1} </p>
                  <div className=" mt-1 text-center font-medium font-secondary">
                    <button className="text-red-500 text-sm">Kickout</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-medium">Join Requests(20)</h3>
          <div className="mt-4  space-y-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="flex gap-2">
                <img
                  src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740"
                  alt=""
                  className="size-14 rounded-full"
                />
                <div className="mt-2 ">
                  <p className="">Member {index + 1} </p>
                  <div className=" mt-1 text-sm font-medium font-secondary space-x-2">
                    <button className="text-red-500">Decline</button>
                    <button className="text-secondary">Accept</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    
    
  )
}

export default ChatBoxSidebar