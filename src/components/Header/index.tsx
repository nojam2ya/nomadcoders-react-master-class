import { IChildren } from '@src/interfaces';
import { Wrap } from './style';

const Header = ({ children }: IChildren) => {
  return <Wrap>{children}</Wrap>;
};

export default Header;
