import { useQuery } from '@tanstack/react-query';
import { Banner, Movie, Overview, Row, Slider, Title, Wrap } from './style';
import { getMovies } from '@src/apis';
import Loader from '@src/components/Loader';
import { makeImagePath } from '@src/utils';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: () => getMovies(),
  });
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    if (!leaving) {
      setLeaving(true);
      setIndex((prev) => prev + 1);
    }
  };
  const decreaseIndex = () => setIndex((prev) => prev - 1);

  return (
    <Wrap>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            $bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
            <p onClick={increaseIndex}>dfsdfs</p>
          </Banner>
          <Slider>
            <AnimatePresence onExitComplete={() => setLeaving(false)}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
              >
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrap>
  );
};

export default Home;
