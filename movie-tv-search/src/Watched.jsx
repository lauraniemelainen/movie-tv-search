import React, {useContext} from "react";
import { WatchContext } from "./context/watch-context";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import WatchedCard from "./WatchedCard";

export const Watched = () => {

    const { watched } = useContext(WatchContext);
    const { t, i18n } = useTranslation();

    return(
        <>
            <Container>
            <h1 style={{color: "#4A90E2"}}>{t("* Movies that you have watched *")}</h1>
            <br/>
                <Row>
                    {watched.length > 0 ? (
                        watched.map((movie) => (
                                <Col sm={12} md={6} lg={3} key={movie.imdbID}>
                                    <WatchedCard
                                        movie={movie} 
                                        type="watched"
                                    />
                                </Col> 
                        ))
                    ) : (
                        <h3 className="no-add-or-watch">{t("No watched movies yet!")}</h3>
                    )}
                </Row>
            </Container>
        </>
    );
};