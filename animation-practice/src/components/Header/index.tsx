import { Link } from 'react-router-dom';
import { Wrap } from './style';

const Header = () => {
  return (
    <Wrap>
      <nav>
        <ul>
          <li>
            <Link to="/boxes">box</Link>
          </li>
          <li>
            <Link to="/pop">pop</Link>
          </li>
        </ul>
      </nav>
    </Wrap>
  );
};

export default Header;
