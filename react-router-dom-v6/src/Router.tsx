import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import About from './routes/About';
import Home from './routes/Home';
import NotFound from './NotFound';
import ErrorComp from './components/ErrorComp';
import User from './routes/User';
import Followers from './components/Followers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // root(모든 페이지 감싸는 컴포넌트)
    errorElement: <NotFound />, // root의 에러페이지

    // root 컴포넌트로 감싸인 자식 컴포넌트
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComp />, // 해당 페이지의 에러페이지
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'user/:userId',
        element: <User />,
        children: [{ path: 'followers', element: <Followers /> }],
      },
    ],
  },
]);

export default router;
