import './App.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import api from './api';
import Cookies from 'js-cookie';
import SocketProvider from './provider/SocketProvider';
function App() {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    api
      .GET('users/init')
      .then((res) => {
        if (res.success) {
          Cookies.set('accessToken', res.data.generatedToken, {
            expires: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
          });
        }
        setIsLoading(false)
      })
      .catch((err) =>  setIsLoading(false));
  }, []);

  if(isLoading) return <p>Loading..</p>
  return (
    <>
      <SocketProvider>
        <RouterProvider router={router}></RouterProvider>
      </SocketProvider>
      <ToastContainer />
    </>
  );
}

export default App;
