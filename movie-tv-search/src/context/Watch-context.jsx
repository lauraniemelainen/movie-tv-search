import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    favourites: localStorage.getItem("favourites") 
        ? JSON.parse(localStorage.getItem("favourites")) 
        : [],
    watched: localStorage.getItem("watched") 
        ? JSON.parse(localStorage.getItem("watched")) 
        : [],
};

// create context
export const WatchContext = createContext(initialState);

// provider components
export const WatchProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(state.favourites));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    // actions to add, move and delete the movies from different sections
    const addMovieToFavourites = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_FAVOURITES", payload: movie });
    };

    const deleteMovieFromFavourites = (id) => {
        dispatch({ type: "DELETE_MOVIE_FROM_FAVOURITES", payload: id });
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    };

    // add movie from watched back to favourites
    const moveToFavourites = (movie) => {
        dispatch({ type: "MOVE_TO_FAVOURITES", payload: movie });
    }

    const deleteMovieFromWatched = (id) => {
        dispatch({ type: "DELETE_MOVIE_FROM_WATCHED", payload: id });
    }

    return (
        <WatchContext.Provider 
        value={{ 
            favourites: state.favourites, 
            watched: state.watched, 
            addMovieToFavourites,
            deleteMovieFromFavourites,
            addMovieToWatched,
            moveToFavourites,
            deleteMovieFromWatched,
            }}
            >
            {props.children}
        </WatchContext.Provider>
    );
};