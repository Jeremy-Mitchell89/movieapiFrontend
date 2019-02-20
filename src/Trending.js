import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class Trending extends Component {
  state = { data: [] };
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=72ee3d3825c6b00b953e0fd471e755f2"
      )
      .then(res => {
        this.setState({ data: res.data.results });
      });
  }
  render() {
    return (
      <>
        <h1 className="page-heading">Trending Movies</h1>
        <div className="movie-carousel">
          {this.state.data.map((movie, i) => (
            <Movie key={i} index={i} movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Trending;
