import React, { useState, useContext} from 'react';

import Movie from "../components/Movie"
import AddMovie from "../components/AddMovie";

import {MovieContext} from '../context/MovieContext';
 
const MovieList = () => { 
    const [movies, setMovies] = useContext(MovieContext);

    return ( 
        <div>
        
            <AddMovie />

            <h1>Movie List</h1>
            {movies.map(movie=>(
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    ) 
}
export default MovieList;