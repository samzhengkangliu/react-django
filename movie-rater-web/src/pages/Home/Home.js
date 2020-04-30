import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail";

import "./Home.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Equivalent to CompondentDidMount
  useEffect(() => {
    axios
      .get("/api/movies/", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: "Token 48e6b4d813c078788df2f26464c935e19b55c7c6",
        },
      })
      .then(function (response) {
        console.log(response);
        setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="Home">
      <h2>Movie Rater</h2>
      <div className="layout">
        <MovieList movies={movies} setMovies={setMovies} setSelectedMovie={setSelectedMovie} />
        <MovieDetail
          movie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </div>
  );
};

export default Home;
