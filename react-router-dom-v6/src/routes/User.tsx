import { users } from '@src/db';
import { Link, Outlet, useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with id {userId} is named:{' '}
        {users.find((user) => user.id === Number(userId))?.name}
      </h1>
      <Link to="followers">see followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users.find((user) => user.id === Number(userId))?.name,
        }}
      />
    </div>
  );
};

export default User;
