import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Trending from "./Trending";
import Playing from "./Playing";

const Main = props => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => {
          return (
            <div>
              <Trending />
              <Playing />
            </div>
          );
        }}
      />
      <Route path="/movie/:id" component={MovieDetails} />
    </Switch>
  );
};

export default Main;
