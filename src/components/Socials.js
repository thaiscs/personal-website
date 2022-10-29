import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";

export const Socials = () => {
  return (
    <div className="social-icon">
      <a
        href="https://www.linkedin.com/in/thaiscristinasantos/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={navIcon1} alt="linkedin icon" />
      </a>
      <a href="https://github.com/thaiscs" target="_blank" rel="noreferrer">
        <img id="github-icon" src={navIcon2} alt="github icon" />
      </a>
    </div>
  );
};
