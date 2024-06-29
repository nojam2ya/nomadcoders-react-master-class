import { Wrap } from '@src/components/DraggableCard/style';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: IDraggableCardProps) => {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided, snapshot) => (
        <Wrap
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Wrap>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
