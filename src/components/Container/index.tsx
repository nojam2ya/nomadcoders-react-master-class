import { IChildren } from '@src/interface';
import { Wrap } from './style';

const Container = ({ children }: IChildren) => {
  return <Wrap>{children}</Wrap>;
};

export default Container;
