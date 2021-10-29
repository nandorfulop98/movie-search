/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (state, { payload, type }) => {
  switch (type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: payload ?? state.movies,
      };
    case "ADD_EXTRACT_TO":
      return {
        ...state,
        movies: state.movies.map((movie, index) =>
          index === payload.index
            ? { ...movie, extract: payload.extract, url: payload.url }
            : movie
        ),
      };
    case "SET_LOADING_MOVIES":
      return {
        ...state,
        loadingMovies: payload,
      };
    default:
      return state;
  }
};
