import { Wrap } from '@src/components/Title/style';
import { IChildren } from '@src/interface';

const Title = ({ children }: IChildren) => {
  return (
    <Wrap>
      <>{children}</>
    </Wrap>
  );
};

export default Title;
