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
          <li>
            <Link to="/slider">slider</Link>
          </li>
          <li>
            <Link to="/layout-animation">layout-animation</Link>
          </li>
          <li>
            <Link to="/board">board</Link>
          </li>
        </ul>
      </nav>
    </Wrap>
  );
};

export default Header;
