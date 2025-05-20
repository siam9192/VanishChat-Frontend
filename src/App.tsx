import './App.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

function App() {
  useEffect(() => {});
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
