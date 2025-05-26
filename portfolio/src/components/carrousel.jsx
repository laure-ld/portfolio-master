import React from "react";
import Slider from "react-slick";
import data from "../data/projects.json";
import "../styles/carrousels.scss";
import  { Link } from 'react-router-dom';

function PrevArrow({ className, onClick }) {
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &#8592; {/* ← flèche gauche */}
    </div>
  );
}

function NextArrow({ className, onClick }) {
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      &#8594; {/* → flèche droite */}
    </div>
  );
}

function Carrousels() {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="slider-container" id="carrousel">
      <Slider {...settings}>
        {data.map((project, index) => (
          <div key={index} className="slide">
            <Link to={`/projets/${project.id}`} title={`Voir le projet : ${project.titre}`}>
              <img src={project.image} alt={`${project.titre} image`}/>
              <h3>{project.titre}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrousels;
