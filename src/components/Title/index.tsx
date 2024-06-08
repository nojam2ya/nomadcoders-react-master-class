import { Wrap } from '@src/components/Title/style';
import { ChildrenI } from '@src/interface';

const Title = ({ children }: ChildrenI) => {
  return (
    <Wrap>
      <>{children}</>
    </Wrap>
  );
};

export default Title;
