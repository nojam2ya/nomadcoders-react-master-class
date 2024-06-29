import { toDoState } from '@src/atoms';
import { Wrap } from '@src/components/CreateBoard/style';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const CreateBoard = () => {
  const [name, setName] = useState('');
  const setToDos = useSetRecoilState(toDoState);

  const onChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const onAddBoard = () => {
    if (name) {
      setToDos((prev) => ({ ...prev, [name]: [] }));
      setName('');
    }
  };

  return (
    <Wrap onClick={onAddBoard}>
      <input type="text" value={name} onChange={onChangeName} />
      <span>add board</span>
    </Wrap>
  );
};

export default CreateBoard;
