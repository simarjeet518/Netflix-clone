import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "../request";
import "./Banner.css";

const baseurl = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(requests.fetchNetflixOriginals)
      .then((request) => {
        let movies = request.data.results;
        let randomNumber = Math.floor(Math.random() * movies.length - 1);
        setMovie(movies[randomNumber]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function truncateString(str, num) {
    return str.length > num
      ? str.slice(0, num >= 3 ? num - 3 : num) + "..."
      : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "Cover",
        backgroundImage: `url(${baseurl}${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {movie.overview ? truncateString(movie.overview, 150) : ""}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
