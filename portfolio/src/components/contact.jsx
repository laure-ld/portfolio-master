import "../styles/main.scss";

export default function ContactForm() {
    return (
      <form
        action="https://formsubmit.co/laurelauda@gmail.com"
        method="POST"
        encType="multipart/form-data"
        className="contactForm"
        id="contact"
      >
        <h3>Me contacter</h3>
  
        <div className="mb-4">
          <label htmlFor="prenom">Prénom *</label>
          <input id="prenom" type="text" name="prenom" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" name="email" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="telephone">Téléphone</label>
          <input id="telephone" type="text" name="telephone" className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="piece-jointe">Pièce jointe</label>
          <input id="piece-jointe" type="file" name="fichier" className="w-full" />
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://portfolio-master-dun.vercel.app/" />
        <button type="submit" className="buttonSubmit" aria-label="Envoyer le formulaire de contact">Envoyer</button>
      </form>
    );
  }
  