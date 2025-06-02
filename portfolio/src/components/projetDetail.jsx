import { useParams } from "react-router-dom";
import data from "../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "../styles/projetDetail.scss";

const ProjetDetail = ({text, language}) => {
    const { id } = useParams();
    const projet = data.find(p => p.id === parseInt(id));

    if (!projet) {
        return <p>{text.error}</p>;
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
                            <p className="indication">{text.slide}</p>
                            <img src={image} alt={`${index + 1} du projet`}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="infoProjet">
                    <h2>{projet.titre[language]}</h2>
                    <p><strong>{text.objectif}</strong>{projet.objectif[language]}</p>
                    <div className="tech">
                        <p><strong>{text.technologie}</strong></p>
                        <ul className="tech-list">
                            {projet.technologie.map((tech, index) => (
                                <li key={index}>{tech},</li>
                            ))}
                        </ul>
                    </div>
                    <div className="tech-competence">
                        <p><strong>{text.competence}</strong></p>
                        <ul>
                            {projet.competences[language].map((competence, index) => (
                                <li key={index}>&#9205; {competence}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="utlisateur">
                        <p><strong>{text.impact}</strong></p>
                        <p>{projet.impact_utilisateur[language]}</p>
                    </div>
                </div>
            </div>
            <div className="detailProjet">
                <p>{projet.description[language]}</p>
                <p>{projet.retour_experience[language]}</p>
            </div>
        </section>
    );
};

export default ProjetDetail;
