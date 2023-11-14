import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import YouTube from "react-youtube";
// import CrudApp from "./componentes/CrudApp";
// import SongSearch from './componentes/SongSearch';
//import CrudApi from './componentes/CrudApi';

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/11?api_key";
  const API_KEY = "2c0ffc5ddcf23aa76af1a9b401cdd629";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMG = "https://image.tmdb.org/t/p/original";

  //Variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ tittle: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  //funcion para realizar la peticion por get a la API
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movies`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    //setMovie(results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Ejercicios con React</h1>
      {/* Contenedor que va a mostrar posters de las películas */}
      <div className="container mt-3">
        <div className="row">
          {movies.map((movie) => {
            <div key={movie.id} className="col-md-4 mb-3">
              <img
                src={`${URL_IMG + movie.poster_path}`}
                alt=""
                height={600}
                width="100%"
              />
              <h4 className="text-center">{movie.tittle}</h4>
            </div>;
          })}
        </div>
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
