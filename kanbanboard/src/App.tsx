import { toDoState } from '@src/atoms';
import Board from '@src/components/Board';
import CreateBoard from '@src/components/CreateBoard';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }

    setToDos((prev) => {
      // 다른 board 이동
      if (destination.droppableId !== source.droppableId) {
        // 목적지
        const { index: desIndex, droppableId: desDropId } = destination;
        // 이동대상
        const { index: srcIndex, droppableId: srcDropId } = source;

        // 목적지 리스트
        const desToDos = prev[desDropId];
        // 이동대상 리스트
        const srcToDos = prev[srcDropId];

        // 임시 목적지 리스트
        const desToDosTemp = [...desToDos];
        // 임시 이동대상 리스트
        const srcToDosTemp = [...srcToDos];

        srcToDosTemp.splice(srcIndex, 1); // 임시 이동대상 리스트에서 이동대상 삭제
        desToDosTemp.splice(desIndex, 0, srcToDos[srcIndex]); // 임시 목적지 리스트에서 목적지 인덱스에 이동대상 추가

        return {
          ...prev,
          [desDropId]: desToDosTemp,
          [srcDropId]: srcToDosTemp,
        };
      }
      // 같은 board 이동
      else {
        const { index: desIndex, droppableId } = destination;
        const { index: srcIndex } = source;

        const toDos = prev[droppableId];
        const toDosTemp = [...toDos];

        toDosTemp.splice(srcIndex, 1);
        toDosTemp.splice(desIndex, 0, toDos[srcIndex]);

        return { ...prev, [droppableId]: toDosTemp };
      }
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrap>
        <Boards>
          {Object.keys(toDos).map((key) => (
            <Board boardId={key} toDos={toDos[key]} />
          ))}
          <CreateBoard />
        </Boards>
      </Wrap>
    </DragDropContext>
  );
}

export default App;
