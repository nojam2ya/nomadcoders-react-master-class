import { IGetMoviesResult } from '@src/apis';
import {
  Info,
  Movie,
  NextBtn,
  PrevBtn,
  Row,
  Slider,
} from '@src/routes/Home/style';
import { makeImagePath } from '@src/utils';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const offset = 6;

const rowVariants = {
  hidden: (isNext: boolean) => ({
    x: isNext ? window.outerWidth + 5 : -window.outerWidth - 5,
    opacity: 0.5,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        duration: 0.8,
      },
      opacity: {
        delay: 0.8,
      },
    },
  },
  exit: (isNext: boolean) => ({
    x: isNext ? -window.outerWidth - 5 : window.outerWidth + 5,
    opacity: 0.5,
    transition: {
      x: {
        duration: 0.8,
      },
      opacity: {
        delay: 0.8,
      },
    },
  }),
};

const movieVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,

    transition: {
      dealy: 0.5,
      duration: 0.3,
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,

    transition: {
      dealy: 0.5,
      duration: 0.3,
    },
  },
};

const SliderComp = ({ data }: { data: IGetMoviesResult }) => {
  const [page, setPage] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const navigate = useNavigate();
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  const increasePage = () => {
    if (leaving) return;
    if (!data?.results) return;

    toggleLeaving();
    setIsNext(true);
    setPage((prev) =>
      prev === Math.floor((data.results.length - 1) / offset) ? 0 : prev + 1,
    );
  };

  const decreasePage = () => {
    if (leaving) return;
    if (!data?.results) return;

    toggleLeaving();
    setIsNext(false);
    setPage((prev) =>
      prev === 0 ? Math.floor((data.results.length - 1) / offset) : prev - 1,
    );
  };

  return (
    <Slider>
      <PrevBtn onClick={decreasePage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </PrevBtn>
      <NextBtn onClick={increasePage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </NextBtn>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          key={page}
          custom={isNext}
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'tween', duration: 1 }}
        >
          {data?.results
            .slice(1)
            .slice(page * offset, page * offset + offset)
            .map((movie) => (
              <Movie
                key={movie.id}
                layoutId={movie.id + ''}
                $bgPhoto={makeImagePath(movie.backdrop_path || '', 'w500')}
                variants={movieVariants}
                initial="normal"
                whileHover="hover"
                transition={{
                  type: 'tween',
                }}
              >
                <Info
                  variants={infoVariants}
                  onClick={() => onBoxClicked(movie.id)}
                >
                  <h4>{movie.title}</h4>
                </Info>
              </Movie>
            ))}
        </Row>
      </AnimatePresence>
    </Slider>
  );
};

export default SliderComp;
