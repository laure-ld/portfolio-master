import "../styles/skills.scss";

function Skills ({text}) {
    return(
        <div className="skill-container">
            <div className="skill" id="competence">
                <h2>{text.title}</h2>
                <button onClick={() => window.open("https://miro.com/welcomeonboard/NHA4TFZvMnpUUHVZVDZmQlVBaUxQTW4vWGRKeGk3WUF3SkJkQU1IZjhPeDlLNTYvZzdEL09ja0FjeVowakVqUnpIVE9BYXR4VXd1Vkg5NXB2b3dqbHVnS0hST1l1TU0zdjlqNkhZUnFmOWF6emtZc1ZXd0VHMjlQK1VVSFQyamZnbHpza3F6REdEcmNpNEFOMmJXWXBBPT0hdjE=?share_link_id=88976010551", "_blank")} className="cards-skills" aria-label="Ouvrir la carte mentale dans un nouvel onglet">{text.graph}</button>
                <div className="schema-skills">
                    <img src="/images/graph.webp" alt="Carte graphique des compétences techniques"/>
                </div>
            </div>      
            <div className="softSkill" id="soft">
                <h2>{text.title2}</h2>
                <div className="box" >
                    <h3>{text.soft_skills}</h3>
                        <ul>
                            <li>{text.liste1}</li>
                            <li>{text.liste2}</li>
                            <li>{text.liste3}</li>
                            <li>{text.liste4}</li>
                        </ul>
                </div>
                <div className="box">
                    <h3>{text.title3}</h3>
                        <ul>
                            <li>{text.liste5}</li>
                            <li>{text.liste6}</li>
                            <li>{text.liste7}</li>
                            <li>{text.liste8}</li>
                        </ul>
                </div>
                <div className="learn-skills">
                    <h2>{text.techno}</h2>
                    <ul>
                        <li className="skill-circle">
                        <p>{text.techno1}</p>
                            <img src="/images/TS.webp" alt="logo de typescript" className="learn-ts" loading="lazy"/>
                        </li>
                        <li className="skill-circle">
                            <p>{text.techno2}</p>
                            <img src="/images/docker.webp" alt="logo de Docker" className="learn-docker" loading="lazy"/>
                        </li>
                        <li className="skill-circle">
                        <p>{text.techno3}</p>
                            <img src="/images/fastapi.webp" alt="logo de FastAPI" className="learn-fastapi" loading="lazy"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills