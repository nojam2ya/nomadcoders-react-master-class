import { Wrap } from '@src/components/Board/style';
import DraggableCard from '@src/components/DraggableCard';
import { Droppable } from 'react-beautiful-dnd';

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <Wrap
          isDraggingOver={snapshot.isDraggingOver}
          isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h5>{boardId}</h5>
          {toDos.map((toDo, index) => (
            <DraggableCard index={index} key={boardId + toDo} toDo={toDo} />
          ))}
          {provided.placeholder}
        </Wrap>
      )}
    </Droppable>
  );
};

export default Board;
