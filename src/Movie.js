import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  state = { hover: false };
  render() {
    const { title, poster_path, release_date, id } = this.props.movie;
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
          {console.log(this.props)}
          <p className="movie-title">
            {title}
            <Link to={`/movie/${id}`}>Details</Link>
          </p>
          <p className="movie-release">{release_date}</p>
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
