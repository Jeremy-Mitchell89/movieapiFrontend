import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  state = { hover: false };
  render() {
    const {
      title,
      poster_path,
      release_date,
      id,
      vote_average
    } = this.props.movie;
    return (
      <div
        className="movie-item"
        onMouseOver={e => {
          this.setState({ hover: true });
        }}
        onMouseLeave={e => {
          this.setState({ hover: false });
        }}
      >
        <div className={this.state.hover ? "movie-info" : "movie-info-hidden"}>
          <div className="movie-title ">
            {title}
            <div>Release: {release_date}</div>
            <div>Rating: {vote_average}/10</div>
            <Link to={`/movie/${id}`}>View Movie Details</Link>
          </div>
          <div />
        </div>
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="movie poster"
        />
      </div>
    );
  }
}

export default Movie;
