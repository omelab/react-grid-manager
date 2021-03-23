import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
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
    <Router>
      <MovieProvider>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/data-table">Data Table</Link>
          </li>
          <li>
            <Link to="/movie">Movies</Link>
          </li>
        </ul> */}
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
      </MovieProvider>
    </Router>
  );
}

export default App;
 