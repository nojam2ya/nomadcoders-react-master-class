import App from '@src/App';
import Home from '@src/routes/Home';
import Search from '@src/routes/Search';
import Tv from '@src/routes/Tv';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'movies/:movieId',
        element: <Home />,
      },
      { path: 'tv', element: <Tv /> },
      { path: 'search', element: <Search /> },
    ],
  },
]);
