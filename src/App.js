import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
 
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";
import MasterGrid from "./components/MasterGrid";
import MasterGridActions from "./components/MasterGridActions";
import MovieList from "./pages/MovieList";
import {MovieProvider} from "./context/MovieContext";

function App() {
 
  return (
    <MovieProvider>
      <Router> 
        <Nav /> 
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/data-table/:slug">
            <MasterGrid />
          </Route> 
          <Route path="/data-table-action/:slug">
            <MasterGridActions />
          </Route>  
          <Route path="/movie">
            <MovieList />
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
      </Router>
    </MovieProvider>
  );
}

export default App;
 