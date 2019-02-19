import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Trending from "./Trending";
import Playing from "./Playing";
import Coming from "./Coming";
import Nav from "./Nav";
import Search from "./Search";

const Main = props => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => {
          return (
            <div>
              <Nav />
              <Search />
              <Playing />
            </div>
          );
        }}
      />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route
        path="/nowplaying"
        render={props => {
          return (
            <div>
              <Nav />
              <Search />
              <Playing />
            </div>
          );
        }}
      />
      <Route
        path="/comingsoon"
        render={props => {
          return (
            <div>
              <Nav />
              <Search />
              <Coming />
            </div>
          );
        }}
      />
      <Route
        path="/trending"
        render={props => {
          return (
            <div>
              <Nav />
              <Search />
              <Trending />
            </div>
          );
        }}
      />
      <Route
        path="/search"
        render={props => {
          return (
            <div>
              <Nav />
              <Search />
            </div>
          );
        }}
      />
      <Redirect to="/search" component={Trending} />
    </Switch>
  );
};

export default Main;
