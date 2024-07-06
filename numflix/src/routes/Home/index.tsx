import { useQuery } from '@tanstack/react-query';
import { Wrap } from './style';
import { getMovies } from '@src/apis';

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: () => getMovies(),
  });

  console.log(data?.dates, isLoading);

  return <Wrap>home</Wrap>;
};

export default Home;
