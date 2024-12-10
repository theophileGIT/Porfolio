import { useEffect, useRef } from "react";
import "./Projet.css";
import Projet1 from "../../assets/Projet-1.png";
import Projet2 from "../../assets/Projet-2.png";
import Projet3 from "../../assets/Projet-3.png";
import Projet4 from "../../assets/Projet-4.png";
import icon_github from "../../assets/icon-github.png";
import icon_domaine from "../../assets/icon-domaine.png";


const Projet = () => {
  const newProjetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newProjetRef.current.classList.add("animed-right");
        observer.unobserve(newProjetRef.current);
      }
    });
    observer.observe(newProjetRef.current);
  }, []);

  return (
    <div ref={newProjetRef} id="projet" className="Projets">
      <div className="projet">
        <h1 className="titre">Jeu MMORPG - DR</h1>
        <img src={Projet2} alt="MMORPG - Jeu" className="projet-img" />
        <p>
          Création d'un jeu MMORPG en utilisant JavaScript, HTML, CSS, Github,
          API. Gestion des interactions utilisateur et des actions en temps
          réel. Le jeu comporte une architecture permettant une expansion future
          et une gestion dynamique des événements.
        </p>
        <div className="links">
          <a
            href="https://rpg-donjon-vs-dragon.vercel.app/"
            target={"_blank"}
            className="gray-link"
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/theophileGIT/RPG-Donjon-VS-Dragon"
            className="black-link"
            target={"_blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Site E-commerce </h1>
        <img src={Projet1} alt="Ecommerce" className="projet-img" />
        <p>
          Projet e-commerce/vitrine de vente de matcha  développé avec une stack composée de
          JavaScript, NodeJs, React, MySQL, API, et SASS.
          Intégration complète de la gestion des utilisateurs, de
          l'authentification sécurisée et de la gestion de la base de données.
        </p>
        <div className="links">
          <a
            href="https://kaishi-projet.vercel.app/"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/theophileGIT/Kaishi-projet"
            className="black-link"
            target={"__blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre">Site Vitrine </h1>
        <img src={Projet3} alt="SiteVitrine" className="projet-img" />
        <p>
          Projet d'un site web vitrine pour un cabinet médical dévelopé en utilisant JavaScript, React, Tailwind. Le site répond à un besoin de modernisation du précédent site web du cabinet.
        </p>
        <div className="links">
          <a
            href="https://medical-website-plum.vercel.app/"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/theophileGIT/MedicalWebsite"
            className="black-link"
            target={"__blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
      <div className="projet">
        <h1 className="titre"> Reconstitution Flappy bird</h1>
        <img src={Projet4} alt="SiteVitrine" className="projet-img" />
        <p>
          Petit projet de jeu reconstituant un jeu iconique sur mobile.
        </p>
        <div className="links">
          <a
            href="/"
            className="gray-link"
            target={"_blank"}
          >
            <img src={icon_domaine} alt="" className="img" />

          </a>
          <a
            href="https://github.com/theophileGIT/Fappy-bird"
            className="black-link"
            target={"__blank"}
          >
            <img src={icon_github} alt="" className="img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projet;
