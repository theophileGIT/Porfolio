import React from "react";
import "./Footer.css";

const Footer = () => {
  const newYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <p className="paragraphe">
        © Développé par Berthe Théophile - <span>{newYear}</span>
      </p>
    </div>
  );
};

export default Footer;
