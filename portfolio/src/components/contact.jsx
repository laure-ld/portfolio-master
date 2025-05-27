export default function ContactForm() {
    return (
      <form
        action="https://formsubmit.co/laurelauda@gmail.com"
        method="POST"
        encType="multipart/form-data"
        className="contactForm"
      >
        <h3>Me contacter</h3>
  
        <div className="mb-4">
          <label>Prénom *</label>
          <input type="text" name="prenom" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label>Email *</label>
          <input type="email" name="email" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label>Message *</label>
          <textarea name="message" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label>Téléphone</label>
          <input type="text" name="telephone" className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label>Pièce jointe</label>
          <input type="file" name="fichier" className="w-full" />
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://portfolio-master-dun.vercel.app/" />
        <button type="submit" className="buttonSubmit">Envoyer</button>
      </form>
    );
  }
  