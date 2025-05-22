import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [filePreview, setFilePreview] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = (data) => {
    emailjs.send(
        "service_n7xel8r",
        "template_jpkw6or",
        {
            prenom: data.prenom,
            email: data.email,
            message: data.message,
            telephone: data.telephone || "Non renseigné",
        },
        "kXPLXWNKud3BSfj5B"
    )
    .then(() => {
        setMessageSent(true);
        reset();
    })
    .catch((error) => {
        console.error("Erreur lors de l'envoi", error);
    });
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactForm" id="contact">
            <h3>Me contacter</h3>

            <div className="mb-4">
                <label className="block text-sm font-medium">Prénom *</label>
                <input {...register("prenom", { required: "Le prénom est requis" })} className="w-full p-2 border rounded" />
                {errors.prenom && <p className="text-sm">{errors.prenom.message}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Email *</label>
                <input {...register("email", { required: "L'email est requis", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email invalide" } })} className="w-full p-2 border rounded" />
                {errors.email && <p className="text-sm">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Message *</label>
                <textarea {...register("message", { required: "Le message est requis" })} className="w-full p-2 border rounded"></textarea>
                {errors.message && <p className="text-sm">{errors.message.message}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Numéro de téléphone</label>
                <input {...register("telephone")} className="w-full p-2 border rounded" />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Pièce jointe</label>
                <input type="file" {...register("fichier")} className="w-full" onChange={(e) => setFilePreview(e.target.files[0]?.name)} />
                {filePreview && <p className="text-sm mt-1">Fichier sélectionné : {filePreview}</p>}
            </div>

            <button type="submit" className="buttonSubmit">Envoyer</button>

            {messageSent && <p className="text-green-500 mt-2">Message envoyé avec succès !</p>}
        </form>
    );
}