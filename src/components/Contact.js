import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const removeFeedbackMessage = () => {
    setTimeout(() => {
      setStatus({});
      setButtonText("Send");
    }, 10000);
  };

  const isRequiredFieldFilled = () => {
    return Object.entries(formDetails)
      .filter(([category, value]) => category !== "phone")
      .every(([category, value]) => value !== "");
  };

  const sendEmail = async () => {
    setButtonText("Sending...");
    let response = await fetch(
      "https://effulgent-frangollo-391ad4.netlify.app/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      }
    );
    let result = await response.json();
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent!" });
      setFormDetails(formInitialDetails);
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isRequiredFieldFilled()
      ? sendEmail()
      : setStatus({
          success: false,
          message: "Fill out all required fields, please.",
        });
    removeFeedbackMessage();
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <img
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
                src={contactImg}
                alt=""
              />
            )}
          </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
          <div>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              {status.message && (
                <Row>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Row>
              )}

              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Telephone (optional)"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};