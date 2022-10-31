import { Banner } from "./Banner";
import { Contact } from "./Contact";
import { Skills } from "./Skills";

export const Section = ({ name }) => {
  return (
    <div>
      {(() => {
        switch (name) {
          case "home":
            return <Banner />;
          case "skills":
            return <Skills />;
          case "contact":
            return <Contact />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
