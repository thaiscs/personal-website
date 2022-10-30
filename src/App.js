import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { InView } from "react-intersection-observer";
import { BrowserRouter as Router } from "react-router-dom";

const highlightNavigation = (inView, navItem) => {
  inView
    ? document.querySelector(`a[href="#${navItem}"]`).classList.add("active")
    : document
        .querySelector(`a[href="#${navItem}"]`)
        .classList.remove("active");
};
const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <InView onChange={(inView) => highlightNavigation(inView, "home")}>
          {({ ref }) => (
            <section className="banner" id="home" ref={ref}>
              <Banner />
            </section>
          )}
        </InView>
      </Router>
      <InView onChange={(inView) => highlightNavigation(inView, "skills")}>
        {({ ref }) => (
          <section className="skill" id="skills" ref={ref}>
            <Skills />
          </section>
        )}
      </InView>
      <InView onChange={(inView) => highlightNavigation(inView, "contact")}>
        {({ ref }) => (
          <section className="contact" id="contact" ref={ref}>
            <Contact />
          </section>
        )}
      </InView>
      <Footer />
    </div>
  );
};

export default App;
