import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <div data-testid="app">
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/list" component={CharacterList} />
    </div>
  );
}
