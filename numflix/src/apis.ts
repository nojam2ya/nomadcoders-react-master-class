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
