import { useEffect, useState, type ReactNode } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineGroups2 } from 'react-icons/md';
import Logo from './Logo';
import { getAvatars, getRoomPhotos } from '../../services';
import type { IAvatar, IRoomPhoto } from '../../types';
import z from 'zod';

interface IProps {
  children: ReactNode;
  onSuccess?: () => void;
  onFail?: () => void;
  onCancel?: () => void;
}

function CreateChatModal(props: IProps) {
  const { children, onSuccess, onCancel, onFail } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [avatars, setAvatars] = useState<IAvatar[]>([]);
  const [roomPhotos, setRoomPhotos] = useState<IRoomPhoto[]>([]);
  const [choosedAvatar, setChoosedAvatar] = useState(0);
  const [choosedRoomPhoto, setChoosedRoomPhoto] = useState(0);
  const [viewAllAvatar, setViewAllAvatar] = useState(false);
  const [viewAllRoomPhoto, setViewAllRoomPhoto] = useState(false);
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    getAvatars().then((data) => {
      setAvatars(data);
    });
    getRoomPhotos().then((data) => {
      setRoomPhotos(data);
    });
  }, []);

  function validate() {
    return z
      .object({
        roomName: z.string({ required_error: 'room name is  required' }).nonempty().max(30),
        userName: z
          .string({ required_error: 'user name is required' })
          .nonempty()
          .max(20)
          .optional(),
        isAnonymous: z.boolean(),
      })
      .refine((data) => {
        if (!data.isAnonymous && !data.userName) {
          return false;
        }
        return true;
      })
      .safeParse({ roomName, userName, isAnonymous }).success;
  }

  const isValid = validate();

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
              <div className={`${isAnonymous ? 'hidden' : 'block'}`}>
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
              </div>

              <div className="mt-3  flex justify-end items-center gap-2 ">
                <input
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  type="checkbox"
                  className="size-5 accent-primary"
                />
                <label htmlFor="" className=" font-secondary">
                  Anonymous
                </label>
              </div>
            </div>

            <div>
              <p className="text-end">
                <span className={`${roomName.length > 30 ? 'text-red-500' : ''}`}>
                  {roomName.length}
                </span>
                /<span>30</span>
              </p>

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
          </div>

          {/* Chose photos  */}
          <div className="mt-20">
            {/* Avatar */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">Chose your avatar</p>
                <button
                  onClick={() => setViewAllAvatar((p) => !p)}
                  className=" text-secondary font-semibold"
                >
                  {viewAllAvatar ? 'View Less' : 'View All'}
                </button>
              </div>
              <div className="mt-3  grid grid-cols-4 lg:grid-cols-8  gap-4">
                {avatars.slice(0, viewAllAvatar ? avatars.length : 8).map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setChoosedAvatar(index)}
                    className={`${choosedAvatar === index ? ' border-2 md:border-4 border-primary ' : ''}`}
                  >
                    <img src={_.url} className=" " alt="" />
                  </div>
                ))}
              </div>
            </div>

            {/* Room photo */}

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">Chose room photo</p>
                <button
                  onClick={() => setViewAllRoomPhoto((p) => !p)}
                  className=" text-secondary font-semibold"
                >
                  {viewAllAvatar ? 'View Less' : 'View All'}
                </button>
              </div>
              <div className="mt-3  grid grid-cols-3 lg:grid-cols-6  gap-4">
                {roomPhotos.slice(0, viewAllRoomPhoto ? roomPhotos.length : 6).map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setChoosedRoomPhoto(index)}
                    className={`${choosedRoomPhoto === index ? ' border-2 md:border-4 border-primary ' : ''}`}
                  >
                    <img src={_.url} alt="" />
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
