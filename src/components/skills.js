function skills () {
    return(
        <div className="skill-container">
            <div className="skill" id="competence">
                <h2>Mes compétences</h2>
                <button onClick={() => window.open("https://miro.com/app/board/uXjVIWwAwJY=/?share_link_id=448433351909", "_blank")} className="cards-skills">Retrouvez ma carte mentale</button>
                <div className="schema-skills">
                    <img src="/images/skills.png" alt="Mes compétences technique"/>
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
                        <p>Python</p>
                            <img src="/images/python.png" alt="Python" className="learn-python"/>
                        </li>
                        <li className="skill-circle">
                            <p>Web3</p>
                            <img src="/images/web3.png" alt="WEB3" className="learn-web3"/>
                        </li>
                        <li className="skill-circle">
                        <p>FastAPI</p>
                            <img src="/images/fastapi.png" alt="FastAPI" className="learn-fastapi"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default skills