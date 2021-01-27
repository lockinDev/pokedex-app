import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { PokedexView } from "./components/pokedex_view/PokedexView";
import generations from "./helpers/generations";

export const AppRouter = () => {  

  return (
    <Router>
      <div className="pokedex-app">
        <div className = "title_language-div">
          <h1>
            P<i></i>kédex
          </h1>          
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to={generations[0].link} />
          </Route>

          {generations.map((gen, i) => (
            <Route key={i} exact path={"/" + gen.link}>
              <PokedexView generation={gen} />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};
