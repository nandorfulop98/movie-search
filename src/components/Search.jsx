/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import { API_URL, getMovie } from "../constants";
import { GlobalContext } from "../store/store";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = () => {
  const { setMovies, setMoviesLoading } = React.useContext(GlobalContext);
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setMoviesLoading(true);

      const queryResult = await axios.post(API_URL, {
        query: getMovie(searchString),
      });

      const data = queryResult?.data?.data?.searchMovies ?? [];
      data && setMovies(data);

      setMoviesLoading(false);
    };

    searchString !== "" && fetchData();
  }, [searchString]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={({ target: { value } }) => setInputValue(value)}
        style={{ cursor: "pointer" }}
        onKeyPress={({ key }) => key === "Enter" && setSearchString(inputValue)}
      />
    </Search>
  );
};

export default SearchBar;
