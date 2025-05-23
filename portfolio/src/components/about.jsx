import '../styles/main.scss';

function About() {
    return (
    <section className="about-me">
        <div className="about-content">
            <h1>Laure Loda</h1>
            <h2>Développeuse Web</h2>
            <p className="tagline">Full stack • Disponible en Belgique</p>
            <p>
            Curieuse et passionnée, j’ai d’abord exploré la psychologie et l’ergonomie des IA avant de plonger dans le développement web. Aujourd’hui, je transforme mes idées en projets concrets, en mêlant intuition design et logique code.
            </p>
            <div className='buttons'> 
                <div className='button-container'>
                    <a href="/CV.pdf" download className="download-btn">📄 Télécharger mon CV</a>
                </div>
                <a href="https://github.com/laure-ld" target="_blank" rel="noopener noreferrer" className="button-container">
                    <img src="/images/github.png" alt="GitHub de Laure Loda"/>
                </a>
            </div>   
        </div>
        <div className='animation'>
            <div className="menu-right-animation">
                <div className="circle-1"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    </section>
    )
}

export  default About;