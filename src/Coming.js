import React from "react";
import axios from "axios";
import Movie from "./Movie";

class Coming extends React.Component {
  state = { data: [] };
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US&page=1&region=US"
      )
      .then(res => {
        this.setState({ data: res.data.results });
      });
  }
  render() {
    return (
      <>
        <h1>Coming Soon</h1>
        <div className="movie-carousel">
          {this.state.data.map((movie, i) => (
            <Movie key={i} index={i} movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Coming;
