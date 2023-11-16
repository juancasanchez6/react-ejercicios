import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./componentes/MovieList";
import MovieListHeading from "./componentes/MovieListHeading";
import SearchBox from "./componentes/SearchBox";
import AddFavourites from "./componentes/AddFavourites";
import RemoveFavourites from "./componentes/RemoveFavourites";
// import axios from "axios";
// import YouTube from "react-youtube";
// import CrudApp from "./componentes/CrudApp";
// import SongSearch from './componentes/SongSearch';
//import CrudApi from './componentes/CrudApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
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

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  // isFavourite = mklxcjvklsdjfg some
  const addFavouriteMovie = (movie) => {
    const isFavourite = favourites.some((m) => m.imdbID === movie.imdbID);
    // if(isfavourite) -> te sales : newfavouritelist

    if (!isFavourite) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (m) => m.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const handleFavouritesClick = (movie) => {
    const isFavourite = favourites.some((m) => m.imdbID === movie.imdbID);
    if (isFavourite) {
      removeFavouriteMovie(movie);
    } else {
      addFavouriteMovie(movie);
    }
  };

  return (
    <div className="container-fluid movie-app">
      <div
        className="row d-flex align-items-center mt-1 mb-1"
        key={movies.imdbID}
      >
        <MovieListHeading heading="Películas" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={handleFavouritesClick}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-1 mb-1">
        <MovieListHeading heading="Favoritos" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={handleFavouritesClick}
          favouriteComponent={RemoveFavourites}
        />
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
