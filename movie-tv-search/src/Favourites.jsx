import React, {useContext} from "react";
import { WatchContext } from "./context/watch-context";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FavouriteCard from "./FavouriteCard";


export const Favourites = () => {

    const { favourites } = useContext(WatchContext);
    const { t, i18n } = useTranslation();

    return(
        <>
            <Container>
            <h1 style={{color: "#4A90E2"}}>{t("* Favourite movies *")}</h1>
            <br/>
                <Row>
                    {favourites.length > 0 ? (
                        favourites.map((movie) => (
                                <Col sm={12} md={6} lg={3} key={movie.imdbID}>
                                    <FavouriteCard
                                        movie={movie} 
                                        type="favourites"
                                    />
                                </Col> 
                        ))
                    ) : (
                        <h3 className="no-add-or-watch">{t("No favourites added yet!")}</h3>
                    )}
                </Row>
            </Container>
        </>
    );
};