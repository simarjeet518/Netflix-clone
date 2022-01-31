import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "../request";

const baseurl = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((request) => {
      let movies = request.data.results;
      let randomNumber = Math.floor(Math.random() * movies.length - 1);
      setMovie(movies[randomNumber]);
    });
  }, []);

  return (
    <header>
      <img
        src={`${baseurl}${movie.backdrop_path}`}
        alt={movie.name}
        key={movie.id}
      />
    </header>
  );
}

export default Banner;
