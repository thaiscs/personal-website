import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { InView, useInView } from "react-intersection-observer";
import { BrowserRouter as Router } from "react-router-dom";

const highlightNavigation = (inView, navItem) => {
  inView
    ? document.querySelector(`a[href="#${navItem}"]`).classList.add("active")
    : document
        .querySelector(`a[href="#${navItem}"]`)
        .classList.remove("active");
};
const App = () => {
  useInView({ rootMargin: "300px" });

  const sections = ["home", "skills", "contact"];

  return (
    <div className="App">
      <Router>
        <NavBar />
        {sections.map((section) => (
          <InView onChange={(inView) => highlightNavigation(inView, section)}>
            {({ ref }) => (
              <section className={section} id={section} ref={ref}>
                <Section name={section} />
              </section>
            )}
          </InView>
        ))}
      </Router>
      <Footer />
    </div>
  );
};

export default App;
