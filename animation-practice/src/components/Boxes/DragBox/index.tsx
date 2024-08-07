import { InnerBox, Wrap } from './style';
import { useRef } from 'react';

const DragBox = () => {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <Wrap ref={constraintRef}>
      <InnerBox drag dragConstraints={constraintRef} />
    </Wrap>
  );
};

export default DragBox;
