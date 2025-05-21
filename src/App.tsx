import './App.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import api from './api';
import Cookies from 'js-cookie';
function App() {
  useEffect(() => {
    api.GET('users/init').then((res) => {
      if (res.success) {
        Cookies.set('accessToken', res.data.generatedToken, {
          expires: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        });
      }
    });
  }, []);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
