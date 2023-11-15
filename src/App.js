import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./componentes/MovieList";
import MovieListHeading from "./componentes/MovieListHeading";
import SearchBox from "./componentes/SearchBox";
// import axios from "axios";
// import YouTube from "react-youtube";
// import CrudApp from "./componentes/CrudApp";
// import SongSearch from './componentes/SongSearch';
//import CrudApi from './componentes/CrudApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9b57093c`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>

      {/* <hr /> */}
      {/* <SongSearch /> */}
      {/* <CrudApi /> */}
      {/* <hr /> */}
      {/* <CrudApp /> */}
    </div>
  );
}

export default App;
