import { IToDo, toDoState } from '@src/atoms';
import { BoxCard, Form, Wrap } from '@src/components/Board/style';
import DraggableCard from '@src/components/DraggableCard';
import { Droppable } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}

interface IFormData {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, reset, handleSubmit } = useForm<IFormData>();

  const onValid = (data: IFormData) => {
    setToDos((prev) => ({
      ...prev,
      [boardId]: [...prev[boardId], { id: Date.now(), text: data.toDo }],
    }));
    reset();
  };

  return (
    <Wrap>
      <h5>✨ {boardId} ✨</h5>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register('toDo', { required: true })}
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <BoxCard
            $isDraggingOver={snapshot.isDraggingOver}
            $isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                index={index}
                key={boardId + toDo.id}
                boardId={boardId}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
            ))}
            {provided.placeholder}
          </BoxCard>
        )}
      </Droppable>
    </Wrap>
  );
};

export default Board;
