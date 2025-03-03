
export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_FAVOURITES":
            return {
                ...state,
                favourites: [action.payload, ...state.favourites],
            };
        case "DELETE_MOVIE_FROM_FAVOURITES":
            return {
                ...state,
                favourites: state.favourites.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                favourites: state.favourites.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched],
            };
        case "MOVE_TO_FAVOURITES":
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                favourites: [action.payload, ...state.favourites],
            };
        case "DELETE_MOVIE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
};