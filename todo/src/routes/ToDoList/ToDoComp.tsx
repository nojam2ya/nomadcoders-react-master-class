import { ToDosAtom } from '@src/atoms';
import { Categories, IToDo } from '@src/interfaces';
import { CateBtn } from '@src/routes/ToDoList/style';
import { useSetRecoilState } from 'recoil';

const ToDoComp = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(ToDosAtom);

  const nextToDos = (toDos: IToDo[], category: Categories) => {
    const index = toDos.findIndex((toDo) => toDo.id === id);
    return [
      ...toDos.slice(0, index),
      {
        ...toDos[index],
        category: category,
      },
      ...toDos.slice(index + 1),
    ];
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => nextToDos(prev, name as Categories));
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <CateBtn name={Categories.TO_DO} type="button" onClick={onClick}>
          To Do
        </CateBtn>
      )}
      {category !== Categories.DOING && (
        <CateBtn name={Categories.DOING} type="button" onClick={onClick}>
          Doing
        </CateBtn>
      )}
      {category !== Categories.DONE && (
        <CateBtn name={Categories.DONE} type="button" onClick={onClick}>
          Done
        </CateBtn>
      )}
    </li>
  );
};

export default ToDoComp;
