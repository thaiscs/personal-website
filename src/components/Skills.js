import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Projects } from "./Projects";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = {
    "Web Development": meter1,
    Frontend: meter3,
    Backend: meter2,
  };

  const slides = Object.entries(skills).map(([name, meter]) => {
    return (
      <div className="item" key={name}>
        <img src={meter} alt={name} />
        <h5>{name}</h5>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx wow zoomIn">
            <h2>Skills</h2>
            <p>
              “Clean code always looks like it was written by someone who
              cares.”
              <br />
              –Robert C. Martin
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              {slides}
            </Carousel>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
};
