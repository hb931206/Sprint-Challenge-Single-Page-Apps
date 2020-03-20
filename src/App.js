import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main data-testid="app">
      <Header />
      <Route exact path="/" component={WelcomePage} />
    </main>
  );
}
