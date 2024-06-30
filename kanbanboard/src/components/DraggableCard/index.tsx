import { toDoState } from '@src/atoms';
import { Wrap } from '@src/components/DraggableCard/style';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSetRecoilState } from 'recoil';

interface IDraggableCardProps {
  boardId: string;
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({
  boardId,
  toDoId,
  toDoText,
  index,
}: IDraggableCardProps) => {
  const setToDos = useSetRecoilState(toDoState);

  const onDelete = () => {
    setToDos((prev) => ({
      ...prev,
      [boardId]: prev[boardId].filter((toDo) => toDo.id !== toDoId),
    }));
  };

  return (
    <Draggable key={toDoId} draggableId={toDoId + ''} index={index}>
      {(provided, snapshot) => (
        <Wrap
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDoText}
          <button className="delete" onClick={onDelete}>
            ❌
          </button>
        </Wrap>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
