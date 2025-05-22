import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SlideContent = ({ slide }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const navigate = useNavigate();

    return (
         <div   
            className={`slide-container ${isExpanded ? "full" : "split"}`}
            onMouseEnter={() => setIsExpanded(false)}
            onMouseLeave={() => setIsExpanded(true)}
        >
            
            <button  onClick={() => navigate(`/projets/${slide.id}`)} className="page-project">
            <img src={slide.image} alt={slide.alt} className="slide-image"/>
                <div className="slide-info">
                    <h3>{slide.name}</h3> - <p className="date">{slide.date}</p>
                    <p className="objectif">{slide.objectif}</p>
                    <div className="tech">
                        <p className="tech-title">Technologies utilisées :</p>
                        <ul className="tech-list">
                        {slide.technologie.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default SlideContent;