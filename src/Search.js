import React from "react";
import axios from "axios";
import Movie from "./Movie";

class Search extends React.Component {
  state = { search: "", data: { data: { results: [] } } };
  render() {
    const Movies = this.state.data.data.results.map(movie => {
      return <Movie movie={movie} />;
    });
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            axios
              .get(
                `https://api.themoviedb.org/3/search/movie?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US&query=${
                  this.state.search
                }&page=1&include_adult=true&region=US`
              )
              .then(res => {
                console.log(res);
                this.setState({ data: res });
              });
          }}
        >
          <input
            value={this.state.search}
            type="text"
            placeholder="Search Movie Title"
            onChange={e => {
              this.setState({ search: e.target.value });
            }}
          />
          <button type="submit">Search</button>
        </form>
        {Movies}
      </div>
    );
  }
}

export default Search;
