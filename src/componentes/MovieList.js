import React from "react";
import InfoMovie from "./InfoMovie";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
            <a className="info-btn" href="">
                <InfoMovie />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
