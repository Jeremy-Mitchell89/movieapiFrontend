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
    <div className="movie-details-container">
      {console.log(data)}
      <h1 className="page-heading">{data.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt="Poster"
      />
      <div>
        <p>
          <i>{data.tagline}</i>
        </p>
        <label>Release Date</label>
        <p>{data.release_date}</p>
        <label>Summary</label>
        <p>{data.overview}</p>
        <p>
          <b>Rating:</b> {data.vote_average}/10 ({data.vote_count} Votes)
        </p>
        <p>
          <b>Runtime:</b> {data.runtime} Minutes
        </p>
        <p />
      </div>
      <div className="details-link">
        <a href={`https://www.imdb.com/title/${data.imdb_id}`}>imdb</a>
        <a href={`${data.homepage}`}>Visit Movie Homepage</a>
      </div>
      <div className="details-link" />
    </div>
  );
};

export default MovieDetails;
