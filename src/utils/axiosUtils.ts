import { TMDB_MOIVE_API_BASE_URL } from "../constants";

export const getAxiosTMDBMovieDetailOption = (movieId: string | number) => {
  return {
    method: "GET",
    url: `${TMDB_MOIVE_API_BASE_URL}/${movieId}`,
    params: { language: "ko" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    },
  };
};

type MOVIE_LIST_ORDER = "now_playing" | "popular" | "top_rated" | "upcoming";
export const getAxiosTMDBMovieListOption = ({
  page = 0,
  order,
}: {
  page: number;
  order: MOVIE_LIST_ORDER;
}) => {
  return {
    method: "GET",
    url: `${TMDB_MOIVE_API_BASE_URL}/${order}`,
    params: { language: "ko", page: `${page}` },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    },
  };
};

export const getAxiosTMDBMovieSearchOption = ({
  page = 1,
  isIncludingAdult = false,
  query,
}: {
  page?: number;
  isIncludingAdult?: boolean;
  query: string;
}) => {
  return {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      include_adult: `${isIncludingAdult}`,
      language: "ko",
      page: `${page}`,
      query,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    },
  };
};
