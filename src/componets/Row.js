import React, { useState, useEffect } from 'react'
import requests from '../request';
import axios from './axios';
import './Row.css';

const baseurl = "https://image.tmdb.org/t/p/original"
function Row(props) {
  const [movies, setMovies] = useState([]);
  const { title, fetchUrl } = props

  useEffect(() => {
    axios.get(fetchUrl)
      .then((request) => {
        setMovies(request.data.results);

      })
      .catch((error) => {
        console.log(error.message);
      })

  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) =>
          <img 
          className="row__poster"
          src={`${baseurl}${movie.poster_path}`} 
          alt={movie.name} 
          key={movie.id} 
          />
        )}
      </div>
    </div>
  )
}

export default Row