import "../styles/main.scss";

export default function ContactForm({text}) {
    return (
      <form
        action="https://formsubmit.co/laurelauda@gmail.com"
        method="POST"
        encType="multipart/form-data"
        className="contactForm"
        id="contact"
      >
        <h3>{text.contact}</h3>
  
        <div className="mb-4">
          <label htmlFor="prenom">{text.identity}</label>
          <input id="prenom" type="text" name="prenom" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="email">{text.email}</label>
          <input id="email" type="email" name="email" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="message">{text.msg}</label>
          <textarea id="message" name="message" required className="w-full p-2 border rounded" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="telephone">{text.numero}</label>
          <input id="telephone" type="text" name="telephone" className="w-full p-2 border rounded" />
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://portfolio-master-dun.vercel.app/" />
        <button type="submit" className="buttonSubmit" aria-label="Envoyer le formulaire de contact">{text.submit}</button>
      </form>
    );
  }
  