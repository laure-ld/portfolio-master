import '../styles/main.scss';

function About() {
    return (
    <section className="about-me">
        <div className="about-content">
            <h1>Laure Loda</h1>
            <h2>Développeuse Web</h2>
            <p>Passionné par le développement web, j’ai exploré la psychologie et l’ergonomie des IA avant de m’y consacrer pleinement. Aujourd’hui, je développe mes compétences en menant des projets concrets, alliant innovation et apprentissage continu.</p>
            <div className='buttons'> 
                <div className='button-container'>
                    <a href="./CV.pdf" download className="download-btn">CV</a>
                </div>
                <div  onClick={() => window.open("https://github.com/laure-ld", "_blank")} className='button-container'>
                    <img src="/images/github.png" alt="GitHub"/>
                </div>
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