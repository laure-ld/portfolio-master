import "../styles/skills.scss";

function Skills () {
    return(
        <div className="skill-container">
            <div className="skill" id="competence">
                <h2>Mes compétences</h2>
                <button onClick={() => window.open("https://miro.com/welcomeonboard/NHA4TFZvMnpUUHVZVDZmQlVBaUxQTW4vWGRKeGk3WUF3SkJkQU1IZjhPeDlLNTYvZzdEL09ja0FjeVowakVqUnpIVE9BYXR4VXd1Vkg5NXB2b3dqbHVnS0hST1l1TU0zdjlqNkhZUnFmOWF6emtZc1ZXd0VHMjlQK1VVSFQyamZnbHpza3F6REdEcmNpNEFOMmJXWXBBPT0hdjE=?share_link_id=88976010551", "_blank")} className="cards-skills" aria-label="Ouvrir la carte mentale dans un nouvel onglet">Retrouvez ma carte mentale</button>
                <div className="schema-skills">
                    <img src="/images/graph.webp" alt="Carte graphique des compétences techniques"/>
                </div>
            </div>      
            <div className="softSkill" id="soft">
                <h2>Mes soft skills</h2>
                <div className="box" >
                    <h3>Qualités interpersonnelles</h3>
                        <ul>
                            <li>Écoute active & empathie</li>
                            <li>Curiosité & veille technologique</li>
                            <li>Capacité d’adaptation rapide</li>
                            <li>Transmission & esprit collaboratif</li>
                        </ul>
                </div>
                <div className="box">
                    <h3>Méthodologie & organisation</h3>
                        <ul>
                            <li>Planification & gestion de projet</li>
                            <li>Respect des échéances & priorisation</li>
                            <li>Résolution de problèmes & esprit critique</li>
                            <li>Apprentissage autonome & montée en compétence</li>
                        </ul>
                </div>
                <div className="learn-skills">
                    <h2>Les techniques vers lesquelles je me dirige</h2>
                    <ul>
                        <li className="skill-circle">
                        <p>Typescript</p>
                            <img src="/images/TS.webp" alt="logo de typescript" className="learn-ts"/>
                        </li>
                        <li className="skill-circle">
                            <p>Docker</p>
                            <img src="/images/docker.webp" alt="logo de Docker" className="learn-docker"/>
                        </li>
                        <li className="skill-circle">
                        <p>FastAPI</p>
                            <img src="/images/fastapi.webp" alt="logo de FastAPI" className="learn-fastapi"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills