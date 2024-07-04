import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser?: string;
}

const Followers = () => {
  /*
  // 1. param
  const { userId } = useParams();
  */

  // 2. useOutletContext
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <h1>Here are {nameOfMyUser}의 Followers</h1>;
};

export default Followers;
