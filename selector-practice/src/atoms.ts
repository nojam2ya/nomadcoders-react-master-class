import { atom, selector } from 'recoil';

export const minuteState = atom({
  key: 'minutes',
  default: 0,
});

export const hoursSelector = selector<number>({
  key: 'hours',
  get: ({ get }) => get(minuteState) / 60,
  set: ({ set }, newValue) => set(minuteState, +newValue * 60),
});
