import ToDoList from '@src/routes/ToDoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
