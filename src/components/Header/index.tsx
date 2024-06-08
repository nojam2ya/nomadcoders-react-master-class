import { ChildrenI } from '@src/interface';
import { Wrap } from './style';

const Header = ({ children }: ChildrenI) => {
  return <Wrap>{children}</Wrap>;
};

export default Header;
