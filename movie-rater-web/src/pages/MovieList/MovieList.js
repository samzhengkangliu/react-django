import React, { useState } from "react";
import { Button } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import axios from "axios";

import { UpdateModal } from "../../components/";

import "./MovieList.scss";

const MovieList = ({ movies, setMovies, setSelectedMovie }) => {
  const [editing, setEditing] = useState(false);

  const deleteMovie = (delMovie) => {
    axios
      .delete(`/api/movies/${delMovie.id}/`, {
        headers: {
          Authorization: "Token 48e6b4d813c078788df2f26464c935e19b55c7c6",
        },
      })
      .then(function (response) {
        setMovies(movies.filter((movie) => movie.id !== delMovie.id));
        setSelectedMovie(null);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return (
          <>
            <div className="movie" key={movie.id}>
              <h3 onClick={() => setSelectedMovie(movie)}>{movie.title}</h3>
              <Button
                className="edit"
                shape="circle"
                icon={<EditFilled />}
                onClick={() => setEditing(true)}
              />
              <Button
                className="delete"
                shape="circle"
                danger
                icon={<DeleteFilled />}
                onClick={() => deleteMovie(movie)}
              />
            </div>
            <UpdateModal editing={editing} setEditing={setEditing} />
          </>
        );
      })}
    </div>
  );
};

export default MovieList;
