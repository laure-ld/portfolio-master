import React from "react";
import Slider from "react-slick";
import data from "../data/projects.json";
import "../styles/carrousels.scss";

function Carrousels() {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
      {data.map((project, index) => (
        <div key={index} className="slide">
          <img src={project.image} alt={`${project.name} image`} />
          <h3>{project.name}</h3>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default Carrousels;
