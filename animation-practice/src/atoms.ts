import { atom } from 'recoil';

export const gradientState = atom<string>({
  key: 'gradient state',
  default: 'linear-gradient(-90deg, #1ed7b5, #f0f9a7)',
});
