import axios from "axios";
import {GET_MOVIE_DATA_REQ , GET_MOVIE_DATA_SUCCESS , GET_MOVIE_DATA_FAILURE,FILTER_BY_GENRE } from "./actionTypes";
// thunk call to fetch movie list


// action object for filter  feature

export const filterByGenre = (payload) => ({
  type: FILTER_BY_GENRE,
  payload
});

export const getMovieDataReq = () => ({
  type: GET_MOVIE_DATA_REQ,
});

export const getMovieDataSuccess=(payload) => ({
  type: GET_MOVIE_DATA_SUCCESS,
  payload
});

export const getMovieDataFailure = () => ({
  type: GET_MOVIE_DATA_FAILURE,
});


export const getMovieData = () => (dispatch) => {
  dispatch(getMovieDataReq());
  axios
    .get("https://movie-fake-server.herokuapp.com/data")
    .then((res) => dispatch(getMovieDataSuccess(res.data)))
    .catch(() => dispatch(getMovieDataFailure()));
};
