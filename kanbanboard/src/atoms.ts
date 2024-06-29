import { atom } from 'recoil';

export interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To do': ['a', 'b', 'c', 'd', 'e', 'f'],
    Doing: ['ㄱ', 'ㄴ', 'ㄷ'],
    Done: ['1', '2', '3'],
  },
});
