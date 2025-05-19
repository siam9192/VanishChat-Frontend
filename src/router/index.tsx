import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import CommonLayout from '../components/layout/CommonLayout';
import ChatroomLayout from '../components/layout/ChatroomLayout';
import ChatRoom from '../pages/ChatRoom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/:code',
    element: <ChatroomLayout />,
  },
]);

export default router;
