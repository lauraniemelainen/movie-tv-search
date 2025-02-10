import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { WatchContext } from "./context/watch-context";


function Movie(props) {

    const { addMovieToFavourites, favourites } = useContext(WatchContext);
    const { addMovieToWatched, watched } = useContext(WatchContext);
    const { t, i18n } = useTranslation();

    let storedMovie = favourites.find(o => o.id === props.imdbID);
    let storedWatched = watched.find(o => o.id === props.imdbID);

    // The buttons are disabled when the movie or TV series is moved to "Favorites" or "Watched"
    const favouritesDisabled = storedMovie ? true : false;
    const watchedDisabled = storedWatched ? true : false;

    return (
        <Card className="movie-card" style={{width: '18rem', height: '40rem', marginBottom: '25px', 
            background: "#bebcbc"}} key={props.id}>
            <Card.Footer>
            <Card.Title>{props.Title ? props.Title.substring(0, 60) : "Unknown Title"}</Card.Title>
            </Card.Footer>
            <Card.Body>
                <Card.Img src={props.Poster ? props.Poster : 'https://placehold.co/300x450?text=No+Image+Available'} 
                alt={props.Title ? props.Title.substring(0, 60) : "Unknown Title"} height="350px"/>
                <Card.Text><strong>{t("Release year")}:</strong> {props.Year ? props.Year : "Unknown Year"}</Card.Text>
                <Card.Text><strong>{t("Type")}:</strong> {props.Type ? props.Type : "Unknown Type"}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="dark" disabled={favouritesDisabled} onClick={() => addMovieToFavourites({
                    id: props.imdbID,
                    Title: props.Title,
                    Poster: props.Poster,
                    Year: props.Year,
                    Type: props.Type
                })}
                    >
                        {t("Add to Favourites")}
                        </Button>
            </Card.Footer>
            <Card.Footer>
                <Button variant="dark" disabled={watchedDisabled} onClick={() => addMovieToWatched({
                    id: props.imdbID,
                    Title: props.Title,
                    Poster: props.Poster,
                    Year: props.Year,
                    Type: props.Type
                })}
                    >
                        {t("Add to Watched")}
                        </Button>
            </Card.Footer>
        </Card>
    );
}

export default Movie;