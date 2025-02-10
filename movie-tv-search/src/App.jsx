import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Col, Row, Nav, Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import MovieList from "./MovieList";
import { Favourites } from "./Favourites";
import { Watched } from "./Watched";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { WatchProvider } from "./context/watch-context";

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="body">
      <WatchProvider>
        <Router>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand style={{color: "#4A90E2"}} as={Link} to="/"><h2>{t("Movie&TVSearch")}</h2></Navbar.Brand>
                  <Nav className="justify-content-center">
                    <Nav.Link as={Link} to="/favourites">{t("Favourites")}</Nav.Link>
                    <Nav.Link as={Link} to="/watched">{t("Watched")}</Nav.Link>

                    <DropdownButton variant="dark" onSelect={(lng) => changeLanguage(lng)} title={t("Language")}>
                      <Dropdown.Item eventKey="en">English</Dropdown.Item>
                      <Dropdown.Item eventKey="fi">Finnish</Dropdown.Item>
                      <Dropdown.Item eventKey="fr">French</Dropdown.Item>
                      <Dropdown.Item eventKey="es">Spanish</Dropdown.Item>
                    </DropdownButton>
                  </Nav>
            </Container>
          </Navbar>
          <br/>
          <Routes>
              <Route path="/" element={<MovieList />} />  
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/watched" element={<Watched />} />
          </Routes>
        </Router>
      </WatchProvider>
    </div>
  );
}

export default App
