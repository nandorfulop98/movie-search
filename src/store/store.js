import React, { createContext, useReducer } from "react";
import AppReducer from "./reducer";

const initialState = {
  loadingMovies: false,
  movies: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setMovies = (movies) => {
    movies &&
      dispatch({
        type: "SET_MOVIES",
        payload: movies,
      });
  };

  const addExtractTo = (index, extract, url) => {
    dispatch({
      type: "ADD_EXTRACT_TO",
      payload: { index, extract, url },
    });
  };

  const setLoadingMovies = (value) => {
    dispatch({
      type: "SET_LOADING_MOVIES",
      payload: value,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addExtractTo,
        setMovies: (movies) => setMovies(movies),
        setMoviesLoading: (loading) => setLoadingMovies(loading),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
