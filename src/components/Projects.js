import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import jsIcon from "../assets/img/icons8-javascript.svg";
import twIcon from "../assets/img/icons8-tailwind-css-240.svg";
import sassIcon from "../assets/img/icons8-sass.svg";
import rubyIcon from "../assets/img/icons8-ruby-programming-language.svg";
import postgresIcon from "../assets/img/icons8-postgresql.svg";
import expressIcon from "../assets/img/expressjs.svg";
import nodeIcon from "../assets/img/icons8-nodejs.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

// TODO: Use Emotion for fade-in of the section?
export const Projects = () => {
  const stack = Object.entries({
    frontend: [
      {
        title: "JavaScript",
        description: "ES6",
        imgUrl: jsIcon,
      },
      {
        title: "React",
        description: "Hooks",
        imgUrl:
          "https://img.icons8.com/external-fauzidea-gradient-fauzidea/256/000000/external-atom-back-to-school-fauzidea-gradient-fauzidea.png",
      },
      {
        title: "CSS3",
        description: "Flexbox & Grid",
        imgUrl: "https://img.icons8.com/nolan/256/css-filetype.png",
      },
      {
        title: "Tailwind CSS",
        description: "Responsive Design",
        imgUrl: twIcon,
      },
      {
        title: "Sass",
        description: "Functions & Modules",
        imgUrl: sassIcon,
      },
      {
        title: "Ruby on Rails",
        description: "Model-View-Controller",
        imgUrl: rubyIcon,
      },
    ],
    backend: [
      {
        title: "PostgreSQL",
        description: "Relational Database",
        imgUrl: postgresIcon,
      },
      {
        title: "Express",
        description: "RESTful APIs",
        imgUrl: expressIcon,
      },
      {
        title: "Node.js",
        description: "Server Side",
        imgUrl: nodeIcon,
      },
    ],
  });

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Stack</h2>
              <p>
                {" "}
                “With self-discipline most anything is possible.”
                <br />
                –Theodore Roosevelt
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="frontend">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  {stack.map(([side]) => {
                    return (
                      <Nav.Item>
                        <Nav.Link eventKey={side}>{side}</Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
                <Tab.Content id="slideInUp">
                  {stack.map(([side, list]) => {
                    return (
                      <Tab.Pane eventKey={side}>
                        <Row>
                          {list.map((stack) => {
                            return <ProjectCard key={stack} {...stack} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
