import { ToDosAtom, categoryAtom } from '@src/atoms';
import { IFormData } from '@src/interfaces';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const CreateToDoComp = () => {
  const setToDos = useSetRecoilState(ToDosAtom);
  const category = useRecoilValue(categoryAtom);

  const { register, handleSubmit, reset } = useForm<IFormData>();

  const onValid = (data: IFormData) => {
    setToDos((prev) => [
      ...prev,
      { id: Date.now(), text: data.toDo, category },
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        type="text"
        placeholder="Write a to do"
        {...register('toDo', {
          required: 'Please write a To Do.',
        })}
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDoComp;
