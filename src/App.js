import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
 
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";
import MasterGrid from "./components/MasterGrid";
import MasterGridActions from "./components/MasterGridActions";


function App() {
  return (
    <Router>
      <div>
        <ul>
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
        </ul>

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
 