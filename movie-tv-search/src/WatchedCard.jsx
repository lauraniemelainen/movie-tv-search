import React, { useContext } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { WatchContext } from "./context/watch-context";
import { Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function WatchedCard({ movie, type }) {
    
    const {moveToFavourites, deleteMovieFromWatched} = useContext(WatchContext);
    const { t, i18n } = useTranslation();

    return (
        <Card style={{width: '18rem', height: '40rem', marginBottom: '25px', background: "#bebcbc"}} key={movie.id}>
            <Card.Footer>
            <Card.Title>{movie.Title ? movie.Title.substring(0, 60) : "Unknown Title"}</Card.Title>
            </Card.Footer>
            <Card.Body>
                <Card.Img src={movie.Poster ? movie.Poster : 'https://placehold.co/300x450?text=No+Image+Available'} 
                alt={movie.Title ? movie.Title.substring(0, 60) : "Unknown Title"} height="350px"/>
                <Card.Text><strong>{t("Release year")}:</strong> {movie.Year ? movie.Year : "Unknown Year"}</Card.Text>
                <Card.Text><strong>{t("Type")}:</strong> {movie.Type ? movie.Type : "Unknown Type"}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="dark" onClick={() => moveToFavourites(movie)}
                    >
                        {t("Add to Favourites")}
                        </Button>
            </Card.Footer>
            <Card.Footer>
                <Button variant="outline-dark" onClick={() => deleteMovieFromWatched(movie.id)}>
                    {t("Delete from Watched")} <BsFillTrash3Fill /></Button> 
            </Card.Footer>
        </Card>
    );
}

export default WatchedCard;