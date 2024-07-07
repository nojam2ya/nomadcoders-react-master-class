import { Movie, MovieCover, MovieOverview, MovieTitle, Overlay } from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovie } from '@src/apis';
import Loader from '@src/components/Loader';
import { makeImagePath } from '@src/utils';

const MovieModal = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie(movieId ?? ''),
    enabled: !!movieId,
  });
  const navigate = useNavigate();

  const onOverlayClick = () => {
    navigate('/');
  };

  return (
    <>
      {movieId && (
        <Overlay
          onClick={onOverlayClick}
          transition={{ duration: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      {movieId && (
        <Movie
          layoutId={movieId}
          style={{
            display: movieId ? 'block' : 'none',
          }}
          transition={{ duration: 0.3 }}
        >
          {isLoading && !data ? (
            <Loader />
          ) : (
            <>
              <MovieCover
                src={makeImagePath(data?.backdrop_path ?? '', 'w500')}
              />
              <MovieTitle>{data?.title}</MovieTitle>
              <MovieOverview>{data?.overview}</MovieOverview>
            </>
          )}
        </Movie>
      )}
    </>
  );
};

export default MovieModal;
