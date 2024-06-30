import { toDoState } from '@src/atoms';
import { Wrap } from '@src/components/CreateBoard/style';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

interface IFormData {
  name: '';
}

const CreateBoard = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, reset } = useForm<IFormData>();

  const onAddBoard = (data: IFormData) => {
    setToDos((prev) => ({ ...prev, [data.name]: [] }));
    reset();
  };

  return (
    <Wrap onSubmit={handleSubmit(onAddBoard)}>
      <input type="text" {...register('name', { required: true })} />
      <button type="submit">add board</button>
    </Wrap>
  );
};

export default CreateBoard;
