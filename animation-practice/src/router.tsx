import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Boxes from './components/Boxes';
import PopContainer from './components/PopContainer';
import Slider from './components/Slider';
import LayoutAnimation from './components/LayoutAnimation';
import Board from './components/Board';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      { path: 'boxes', element: <Boxes /> },
      { path: 'pop', element: <PopContainer /> },
      { path: 'slider', element: <Slider /> },
      { path: 'layout-animation', element: <LayoutAnimation /> },
      { path: 'board', element: <Board /> },
    ],
  },
]);
