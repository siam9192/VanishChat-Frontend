// src/socket.js
import { io } from 'socket.io-client';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
const socket = io('http://localhost:7000', {
  auth: {
    accessToken,
  },
}); // replace with your server URL/port

export default socket;
