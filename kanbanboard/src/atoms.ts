import { AtomEffect, atom } from 'recoil';

export interface IToDo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

const localStorageEffect =
  (key: string): AtomEffect<IToDoState> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: IToDoState) =>
      localStorage.setItem(key, JSON.stringify(newValue)),
    );
  };

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To do': [],
    Doing: [],
    Done: [],
  },
  effects: [localStorageEffect('toDoState')],
});
