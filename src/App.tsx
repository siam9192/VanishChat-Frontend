import './App.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import api from './api';

function App() {
  useEffect(() => {
    api.GET('users/init');
  }, []);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
