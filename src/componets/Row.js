import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseurl = "https://image.tmdb.org/t/p/original";
function Row(props) {
  const [movies, setMovies] = useState([]);
  const { title, fetchUrl, isLargeRow } = props;

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((request) => {
        setMovies(request.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
