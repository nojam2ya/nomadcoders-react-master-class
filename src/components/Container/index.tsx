import { ChildrenI } from '@src/interface';
import { Wrap } from './style';

const Container = ({ children }: ChildrenI) => {
  return <Wrap>{children}</Wrap>;
};

export default Container;
