import axios from 'axios';

const token = import.meta.env.VITE_APP_THEMOVIE_API_TOKEN;

const AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${token}`,
    accept: 'application/json',
  },
});

export interface IMove {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGetMoviesResult {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMove[];
  total_pages: number;
  total_results: number;
}

export const getMovies = async <T = IGetMoviesResult>(): Promise<T> =>
  await AxiosInstance.get<T>(
    '/movie/now_playing?language=en-US&region=kr',
  ).then((res) => res.data);

export interface IGetMovieResult {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMovie = async <T = IGetMovieResult>(
  movieId: string,
): Promise<T> =>
  await AxiosInstance.get<T>(`/movie/${movieId}`, {
    params: { language: 'en-US' },
  }).then((res) => res.data);

export interface ISearchByMultiParams {
  query: string;
  page: number;
}

export interface ISearchByMultiResult {
  page: number;
  results: {
    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
  }[];
  total_pages: number;
  total_results: number;
}

export const getSearchByMulti = async <T = ISearchByMultiResult>(
  params: ISearchByMultiParams,
): Promise<T> =>
  await AxiosInstance.get<T>('/search/multi', {
    params: {
      ...params,
      include_adult: false,
      language: 'en-US',
    },
  }).then((res) => res.data);
