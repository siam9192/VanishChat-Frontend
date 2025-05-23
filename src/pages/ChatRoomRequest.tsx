import React, { useContext, useEffect, useState } from 'react';
import Container from '../components/container/Container';
import { AiOutlineUser } from 'react-icons/ai';
import JoinRequestLoadingModal from '../components/ui/JoinRequestLoadingModal';
import { useNavigate, useParams } from 'react-router';
import type { IAvatar, IRoom } from '../types';
import api from '../api';
import { getAvatars } from '../services';
import { SocketContext } from '../provider/SocketProvider';
interface IProps {
  setAccess: (st: boolean) => void | any;
}
function ChatRoomRequest({ setAccess }: IProps) {
  const socket = useContext(SocketContext);

  const [userName, setUserName] = useState('');
  const [avatars, setAvatars] = useState<IAvatar[]>([]);
  const [viewAllAvatar, setViewAllAvatar] = useState(false);
  const [choosedAvatar, setChoosedAvatar] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { roomCode } = useParams();
  const [room, setRoom] = useState<IRoom | null>(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    api.GET(`rooms/public/${roomCode}`).then((res) => {
      if (res.success) {
        setRoom(res.data);
        setIsLoading(false);
      }
    });

    getAvatars().then((data) => {
      setAvatars(data);
    });
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on('join-request-response', (res: { status: boolean }) => {
      setAccess(res.status);
      setIsWaiting(false);
    });
  }, [socket]);

  function requestJoin() {
    const user: Record<string, unknown> = {
      isAnonymous,
      avatarId: avatars[choosedAvatar].id,
    };

    if (!isAnonymous) {
      user.name = userName;
    }

    socket?.emit('join-request', { code: roomCode, ...user });
    setIsWaiting(true);
  }
  const isValid = !isAnonymous ? userName.length > 0 && userName.length <= 20 : true;

  if (isLoading) return <p>Loading..</p>;
  return (
    <Container addedClass="">
      <div className="mt-32 w-1/2 mx-auto">
        <img src={room?.photo.url} alt="" className="size-40 rounded-full mx-auto" />
        <h2 className="text-3xl text-white  font-medium text-center mt-2">{room?.name}</h2>

        <div className="mt-10">
          <div>
            <div className={`${isAnonymous ? 'hidden' : ''}`}>
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
          {/* Avatar */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium">Chose your avatar</p>
              <button className=" text-secondary font-semibold">View All</button>
            </div>
            <div className="mt-3  grid grid-cols-4 lg:grid-cols-8  gap-4">
              {avatars.map((_, index) => (
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
        </div>
        <div className="mt-20 space-x-4 text-end">
          <button onClick={() => navigate('/')} className="px-6 py-3 bg-red-500 rounded-full">
            Go Back
          </button>
          <button
            disabled={!isValid}
            onClick={requestJoin}
            className="px-6 py-3 bg-primary disabled:bg-gray-700 rounded-full"
          >
            Join Request
          </button>
        </div>
      </div>
      {isWaiting ? <JoinRequestLoadingModal /> : null}
    </Container>
  );
}

export default ChatRoomRequest;
