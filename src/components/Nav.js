import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const Nav = () =>  { 
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className="nav-wrap">  
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
                <li>
                    <Link to="/movie">Movies ({movies.length})</Link>
                </li>
                </ul>  
        </div>
    ) 
}
export default  Nav;
