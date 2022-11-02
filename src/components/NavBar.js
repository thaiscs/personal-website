import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Socials } from "./Socials";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const links = ["home", "skills", "contact"];

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <span className="tagline">
          Welcome to my <code>coding</code> journey
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => {
              return (
                <Nav.Link
                  href={`#${link}`}
                  className={
                    activeLink === link ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink(link)}
                  key={link}
                >
                  {link}
                </Nav.Link>
              );
            })}
          </Nav>
          <Socials />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
