import { useParams } from "react-router-dom";
import data from "../data-projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "../styles/projetDetail.scss";

const ProjetDetail = () => {
    const { id } = useParams();
    const projet = data.find(p => p.id === parseInt(id));

    if (!projet) {
        return <p>Projet non trouvé</p>;
    }

    return (
        <section className="projet">
            <div className="projet-detail">
                <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySecondSwiper"
                    height={300}
                >
                    {projet.projet.map((image, index) => (
                        <SwiperSlide key={index} className="swipperImg">
                            <img src={image} alt={`${index + 1} du projet`}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="infoProjet">
                    <h2>{projet.name}</h2>
                    <p><strong>Objectif : </strong> {projet.objectif}</p>
                    <div className="tech">
                        <p><strong>Technologie : </strong></p>
                        <ul className="tech-list">
                            {projet.technologie.map((tech, index) => (
                                <li key={index}>{tech},</li>
                            ))}
                        </ul>
                    </div>
                    <div className="tech-competence">
                        <p><strong>Compétences techniques : </strong></p>
                        <ul>
                            {projet.competences.map((competence, index) => (
                                <li key={index}>&#9205; {competence}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="detailProjet">
                <p>{projet.description}</p>
                <p>{projet.retour_experience}</p>
            </div>
        </section>
    );
};

export default ProjetDetail;
