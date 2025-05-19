import React, { useState } from 'react';
import Container from '../components/container/Container';
import { AiOutlineUser } from 'react-icons/ai';
import JoinRequestLoadingModal from '../components/ui/JoinRequestLoadingModal';

function ChatRoomRequest() {
  const [userName, setUserName] = useState('');
  const [choosedAvatar, setChoosedAvatar] = useState(0);

  return (
    <Container addedClass="">
      <div className="mt-32 w-1/2 mx-auto">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/877/721/non_2x/video-chatting-modern-flat-concept-for-web-banner-design-group-of-friends-communicate-in-online-call-write-messages-remote-employees-confer-online-illustration-with-isolated-people-scene-vector.jpg"
          alt=""
          className="size-40 rounded-full mx-auto"
        />
        <h2 className="text-3xl text-white  font-medium text-center mt-2">Friends secret zone</h2>
        <p className="text-center font-medium text-secondary">20 Members online</p>

        <div className="mt-10">
          <div>
            <p className="text-end">
              <span className={`${userName.length > 20 ? 'text-red-500' : ''}`}>
                {userName.length}
              </span>
              /<span>20</span>
            </p>
            <div className="   flex items-center gap-2  border-b-2 px-2 border-gray-700/20 dark:border-gray-800  ">
              <span className="text-3xl">
                <AiOutlineUser />
              </span>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name here.."
                className="bg-transparent py-3 w-full outline-none border-none "
              />
            </div>

            <div className="mt-3  flex justify-end items-center gap-2 ">
              <input type="checkbox" className="size-5 accent-primary" />
              <label htmlFor="" className=" font-secondary">
                Anonymous
              </label>
            </div>
          </div>
          {/* Avatar */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium">Chose your avatar</p>
              <button className=" text-secondary font-semibold">View All</button>
            </div>
            <div className="mt-3  grid grid-cols-4 lg:grid-cols-8  gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => setChoosedAvatar(index)}
                  className={`${choosedAvatar === index ? ' border-2 md:border-4 border-primary ' : ''}`}
                >
                  <img
                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740"
                    className=" "
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 space-x-4 text-end">
          <button className="px-6 py-3 bg-red-500 rounded-full">Go Back</button>
          <button className="px-6 py-3 bg-primary rounded-full">Join Request</button>
        </div>
      </div>
      <JoinRequestLoadingModal />
    </Container>
  );
}

export default ChatRoomRequest;
