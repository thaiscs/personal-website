import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [rotationPosition, setRotationPosition] = useState(0);
  const [typingLetter, setTypingLetter] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300);
  const period = 2000;

  const typing = useCallback(() => {
    const toRotate = ["Hello world!", "Hello internet!"];
    let i = rotationPosition % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, typingLetter.length - 1)
      : fullText.substring(0, typingLetter.length + 1);

    setTypingLetter(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setRotationPosition(rotationPosition + 1);
      setDelta(300);
    }
  }, [isDeleting, rotationPosition, typingLetter.length]);

  useEffect(() => {
    let typer = setInterval(() => {
      typing();
    }, delta);

    return () => {
      clearInterval(typer);
    };
  }, [typingLetter, delta, typing]);

  return (
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <h1>
            <span className="wrap">{typingLetter}</span>
          </h1>
          <p>
            <span style={{ fontWeight: "bold", fontStyle: "normal" }}>
              Since 2019
            </span>{" "}
            navigating the <span>magic</span> world of developing the web.
          </p>
          <Router>
            <Link to="#contact">
              <button className="connectBtn">
                <span>Let’s Connect</span>
                <ArrowRightCircle size={25} />
              </button>
            </Link>
          </Router>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="Header Img" />
        </Col>
      </Row>
    </Container>
  );
};
