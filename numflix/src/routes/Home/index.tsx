import { useQuery } from '@tanstack/react-query';
import { Wrap } from './style';
import { getMovies } from '@src/apis';
import Loader from '@src/components/Loader';
import { AnimatePresence } from 'framer-motion';
import BannerComp from '@src/routes/Home/BannerComp';
import SliderComp from '@src/routes/Home/SliderComp';
import MovieModal from '@src/routes/Home/MovieModal';

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: () => getMovies(),
  });

  return (
    <Wrap>
      {isLoading && !data ? (
        <Loader />
      ) : (
        <>
          <BannerComp data={data!.results[0]} />
          <SliderComp data={data!} />
          <AnimatePresence>
            <MovieModal />
          </AnimatePresence>
        </>
      )}
    </Wrap>
  );
};

export default Home;
