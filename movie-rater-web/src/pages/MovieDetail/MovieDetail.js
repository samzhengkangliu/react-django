import React, { useState, useEffect } from "react";
import { StarFilled } from "@ant-design/icons";
import { message } from "antd";
import axios from "axios";

import "./MovieDetail.scss";

const MovieDetail = ({ movie, setSelectedMovie }) => {
  const [hightlighted, setHighlighted] = useState(-1);
  const [newRatingSubmitted, setNewRatingSubmitted] = useState(false);

  const submitRating = (stars) => {
    axios
      .post(
        `/api/movies/${movie.id}/rate_movie/`,
        {
          stars: stars,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Token 48e6b4d813c078788df2f26464c935e19b55c7c6",
          },
        }
      )
      .then((res) => {
        console.log("Response received: ", res);
        if (res.status === 200) {
          setNewRatingSubmitted(true);
          message.success("You have successfully submitted your rating!", 3);
        }
        setNewRatingSubmitted(false);
      })
      .catch((error) => {
        console.log("Axios Error: ", error);
        message.error("Oops, something went wrong", 3);
      });
  };

  useEffect(() => {
    if (movie && newRatingSubmitted) {
      axios
        .get(`/api/movies/${movie.id}/`, {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Token 48e6b4d813c078788df2f26464c935e19b55c7c6",
          },
        })
        .then(function (response) {
          console.log(response);
          setSelectedMovie(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [movie, newRatingSubmitted]);

  return (
    <div className="MovieDetail">
      {movie ? (
        <div>
          <h3>{movie.title}</h3>
          <StarFilled className={movie.avg_rating > 0 ? "rate" : ""} />
          <StarFilled className={movie.avg_rating > 1 ? "rate" : ""} />
          <StarFilled className={movie.avg_rating > 2 ? "rate" : ""} />
          <StarFilled className={movie.avg_rating > 3 ? "rate" : ""} />
          <StarFilled className={movie.avg_rating > 4 ? "rate" : ""} />(
          {movie.number_of_ratings})<p>{movie.description}</p>
          <div>
            <h2>Rate it!</h2>
            {[...Array(5)].map((event, index) => {
              return (
                <StarFilled
                  key={index}
                  className={hightlighted > index - 1 ? "rate" : ""}
                  onMouseEnter={() => setHighlighted(index)}
                  onMouseLeave={() => setHighlighted(-1)}
                  onClick={() => submitRating(index + 1)}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieDetail;
