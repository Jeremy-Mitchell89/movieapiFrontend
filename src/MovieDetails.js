import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = props => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          props.match.params.id
        }?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US`
      )
      .then(res => {
        setData(res.data);
      });
  }, []);

  return (
    <div>
      {console.log(data)}
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
      <p>Rating: {data.vote_average}/10</p>
      <a href={`https://www.imdb.com/title/${data.imdb_id}`}>imdb</a>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt="Poster"
      />
    </div>
  );
};

export default MovieDetails;
