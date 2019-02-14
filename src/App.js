import React, { Component } from "react";
import "./App.scss";
import axios from "axios";

class App extends Component {
  state = { data: {}, image: "" };
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=72ee3d3825c6b00b953e0fd471e755f2"
      )
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      });
    axios
      .get(`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`)
      .then(res => {
        console.log(res);
        const image = res.data;
        this.setState({ image });
        return res.data;
      });
  }
  render() {
    const { original_title, release_date, poster_path } = this.state.data;
    return (
      <div className="App">
        <h2>{original_title}</h2>
        <p>{release_date}</p>
        <img
          alt="Movie Poster"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />

        <p />
      </div>
    );
  }
}

export default App;
