export const API_URL = "https://tmdb.sandbox.zoosh.ie/dev/graphql";

export const getMovie = (query) => `query SearchMovies {
        searchMovies(query: "${query}") {
          id
          name
          overview
          releaseDate
          score
        }
      }`;
