import '../styles/footer.scss';

function Footer() {
    return (
        <div className="footer" id='rs'>
            <p className="text-footer">À bientôt</p>
            <div className='link-footer'>
                <a href="https://www.linkedin.com/in/laure-loda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn de Laure Loda">
                    <img src="/images/link.webp" alt="linkedin" loading="lazy"/>
                </a>
                <a href="https://github.com/laure-ld" target="_blank" rel="noopener noreferrer" aria-label="Profil github de Laure Loda">
                    <img src="/images/github.webp" alt="GitHub" loading="lazy"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;
