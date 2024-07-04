import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate('/about');
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button onClick={onAboutClick}>to about</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
