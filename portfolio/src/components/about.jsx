import '../styles/about.scss';


function About({ text }) {
    return (
      <section className="about-me">
        <div className="about-content">
          <h1>{text.name}</h1>
          <h2>{text.title}</h2>
          <p className="tagline">{text.tagline}</p>
          <p>{text.description}</p>
          <div className='buttons'> 
            <div className='button-container'>
              <a
                href="/CV.pdf"
                download
                className="download-btn"
                aria-label={text.downloadCV}
              >
                {text.downloadCV}
              </a>
            </div>
            <a
              href="https://github.com/laure-ld"
              target="_blank"
              rel="noopener noreferrer"
              className="button-container"
              aria-label="GitHub de Laure Loda"
              title="Voir mon profil GitHub"
            >
              <img src="/images/github.webp" alt="GitHub de Laure Loda"/>
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
    );
  }

  export default About;