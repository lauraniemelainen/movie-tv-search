import React, { useState, useEffect} from 'react'
import { Container, Col, Row, Button, Form, InputGroup, Alert, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Movie from './Movie';

function MovieList() {

    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const [movies, setMovies] = useState([]);
    const [start, setStart] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [show, setShow] = useState(true);
    const { t, i18n } = useTranslation();

    // Function to fetch the data from omdbapi.com
    const getData = async () => {
        
        if(!searchQuery.trim()) {
            setShow(true);
            return;
        }
        try {
            const res = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`);
            const json = await res.json();

            if(json.Response === "True") {
                setMovies(json.Search);
                setStart(false);
            } else {
                setMovies([]);
                setShow(true);
            }
        } catch (e) {
            console.error(e);
            setMovies([]); 
            setShow(true);
        } finally {
            setStart(false);
        }
        setSearchQuery("");
    };

    useEffect(() => {
        getData();
    }, []);

// Monitors changes in the search field 
const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
}

    return(
        <>
            <Container fluid="md">
                <Col sm={8} md={12} lg={12}>
                    <InputGroup className="input mb-3" style={{width: '60%', margin: "auto"}}>
                    <Form.Control
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder= {t("Enter movie or series name...")}
                        aria-label= "Enter movie or series name..."
                        aria-describedby="basic-addon2"
                        style={{background: "#f2ebeb"}}
                    />
                    <Button onClick={getData} variant="dark" id="button-addon2">
                        {t("Search")}
                    </Button>
                    </InputGroup>
                    <br/>
                </Col>
                <Row>
                {start ? (
                    <></>
                ) : (
                    movies.length > 0 ? (
                        movies.map((movie) => (
                            <Col sm={12} md={6} lg={3} key={movie.imdbID}>
                                <Movie
                                    key={movie.imdbID}
                                    Poster={movie.Poster}
                                    Title={movie.Title}
                                    Year={movie.Year}
                                    Type={movie.Type}
                                    imdbID={movie.imdbID}
                                />
                            </Col> 
                        ))
                    ) : (
                    <>
                    <Alert show={show} variant="dark" style={{width: '30rem', height: '12rem', margin: 'auto'}}>
                        <Alert.Heading>{t("Not found!")}</Alert.Heading>
                        <p>
                        {t("Unfortunately, the movie or series was not found.")}
                        <br/>
                        {t("Please search for another movie or series.")}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="dark">
                            {t("Close me")}
                        </Button>
                        </div>
                    </Alert>
                    </>
                    )
                )}
                </Row>
            </Container>
        </>
    );
}

export default MovieList;