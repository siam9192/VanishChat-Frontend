import { useState, type ReactNode } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineGroups2 } from 'react-icons/md';
import Logo from './Logo';

interface IProps {
  children: ReactNode;
  onSuccess?: () => void;
  onFail?: () => void;
  onCancel?: () => void;
}

function CreateChatModal(props: IProps) {
  const { children, onSuccess, onCancel, onFail } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [choosedAvatar, setChoosedAvatar] = useState(0);
  const [choosedGroupPhoto, setChoosedGroupPhoto] = useState(0);
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const isValid = false;
  return (
    <>
      {/* Open Button */}
      <div onClick={() => setIsOpen(true)} className="w-fit hover:cursor-pointer">
        {children}
      </div>

      <div
        className={`w-full h-full fixed inset-0   bg-gray-900/70 flex justify-center items-center text-start  ${isOpen ? '' : 'hidden'}`}
      >
        <div className=" w-full lg:w-1/2  min-h-60 h-full lg:h-[90vh]  overflow-y-auto  bg-white dark:bg-black  p-5  rounded-md hide-scrollbar ">
          {/* Heading */}
          <div className="flex items-center gap-2">
            <Logo />
            <h1 className="text-2xl font-medium ">Create your chatroom</h1>
          </div>
          {/*All  Name  inputs */}

          <div className="mt-10 space-y-4">
            <div>
              <p className="text-end">
                <span className={`${userName.length > 20 ? 'text-red-500' : ''}`}>
                  {userName.length}
                </span>
                /<span>32</span>
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
            <div className="  flex items-center gap-2  border-b-2 px-2  border-gray-700/20 dark:border-gray-800 ">
              <span className="text-3xl">
                <MdOutlineGroups2 />
              </span>
              <input
                type="text"
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Your room name here.."
                className="bg-transparent py-3 w-full outline-none border-none "
              />
            </div>
          </div>

          {/* Chose photos  */}
          <div className="mt-20">
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

            {/* Room photo */}

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">Chose room photo</p>
                <button className=" text-secondary font-semibold">View All</button>
              </div>
              <div className="mt-3  grid grid-cols-3 lg:grid-cols-6  gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setChoosedGroupPhoto(index)}
                    className={`${choosedGroupPhoto === index ? ' border-2 md:border-4 border-primary ' : ''}`}
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/005/877/721/non_2x/video-chatting-modern-flat-concept-for-web-banner-design-group-of-friends-communicate-in-online-call-write-messages-remote-employees-confer-online-illustration-with-isolated-people-scene-vector.jpg"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process buttons */}
          <div className="mt-10  text-end space-x-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-500 font-semibold font-secondary"
            >
              Cancel
            </button>
            <button
              disabled={!isValid}
              className="px-6 py-3 bg-secondary hover:bg-primary disabled:bg-gray-600  font-secondary  text-white rounded-full"
            >
              Create Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateChatModal;
