import React from "react";
import Row from "./componets/Row";
import requests from "./request";
import "./App.css";
import Banner from "./componets/Banner";
function App() {
  return (
    <div className="App">
      {/* Navebar */}
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fectchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fectchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fectchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fectchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fectchDocumentaries} />
    </div>
  );
}

export default App;
