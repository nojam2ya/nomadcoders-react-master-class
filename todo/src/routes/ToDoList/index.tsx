import { ToDoSelector, categoryAtom } from '@src/atoms';
import { Categories } from '@src/interfaces';
import CreateToDoComp from '@src/routes/ToDoList/CreateToDoComp';
import ToDosComp from '@src/routes/ToDoList/ToDoComp';
import { useRecoilState, useRecoilValue } from 'recoil';

const ToDoList = () => {
  const [category, setCategory] = useRecoilState(categoryAtom);

  const list = useRecoilValue(ToDoSelector);

  const handleCategory = (event: React.FormEvent<HTMLSelectElement>) =>
    setCategory(event.currentTarget.value as Categories);

  return (
    <div>
      <h2>TO DOS</h2>
      <CreateToDoComp />
      <select
        name="category"
        id="category"
        value={category}
        onInput={handleCategory}
      >
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <ul>
        {list.map((toDo) => (
          <ToDosComp key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
