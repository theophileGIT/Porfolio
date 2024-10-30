import { useEffect, useRef } from "react";
import "./About.css";
import CV from "../../assets/CV_berthe.png";
import Cv_pdf from "../../assets/CV_berthe.pdf";

const About = () => {
  const newsletterRef = useRef();
  const newsletterRef2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newsletterRef.current.classList.add("animed-left");
        observer.unobserve(newsletterRef.current);
      }
    });
    observer.observe(newsletterRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newsletterRef2.current.classList.add("animed-right");
        observer.unobserve(newsletterRef2.current);
      }
    });
    observer.observe(newsletterRef2.current);
  }, []);

  return (
    <div id="about" className="abouts">
      <div ref={newsletterRef} className="about-img">
        <a href={Cv_pdf} target="_blank">
          <img src={CV} alt="CV" className="img-cv" />
        </a>
      </div>
      <div ref={newsletterRef2} className="about-text">
        <p>
          <strong>Je suis à la recherche d'une alternance</strong> pour
          développer mes compétences et{" "}
          <strong>enrichir mon expérience.</strong>
          <br />
          <hr /> <strong>Curieux, autonome, motivé, esprit d'équipe,</strong> je
          suis constamment à la recherche de nouveaux défis pour approfondir mes
          connaissances en programmation et{" "}
          <strong>contribuer à de nouveaux projets.</strong>
          <br /> <hr className="hr-2" /> J'aime créer des API Rest (Crud) et je
          travaille généralement avec{" "}
          <strong>
            JavaScript, React, Node.js, Express, MongoDB et JWT Token
          </strong>
          <br /> je suis sur que cette opportunité me permettra de grandir
          professionnellement{" "}
          <strong>
            tout en apportant une valeur ajoutée à l'équipe qui m'accueillera.
          </strong>
        </p>
        <a download="" href={Cv_pdf}>
          Téléchargez CV
        </a>
      </div>
    </div>
  );
};

export default About;
