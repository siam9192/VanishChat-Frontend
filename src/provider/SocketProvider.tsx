import React, { createContext, type ReactNode } from 'react';
import { io, type Socket } from 'socket.io-client';
import socket from '../socket';
interface IProps {
  children: ReactNode;
}
export const SocketContext = createContext<Socket | null>(null);

function SocketProvider({ children }: IProps) {
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}

export default SocketProvider;
