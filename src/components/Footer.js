import { Container, Row, Col } from "react-bootstrap";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <Socials />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
