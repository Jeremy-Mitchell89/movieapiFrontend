import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class Playing extends Component {
  state = { data: [] };
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US&page=1"
      )
      .then(res => this.setState({ data: res.data.results }));
  }
  render() {
    return (
      <>
        <h1 className="page-heading">Now Playing</h1>
        <div className="movie-carousel">
          {this.state.data.map((movie, i) => (
            <Movie key={i} index={i} movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Playing;
