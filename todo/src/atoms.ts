import { Categories, IToDo } from '@src/interfaces';
import { atom, selector } from 'recoil';

export const ToDosAtom = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const categoryAtom = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const ToDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) =>
    get(ToDosAtom).filter((toDo) => toDo.category === get(categoryAtom)),
});
