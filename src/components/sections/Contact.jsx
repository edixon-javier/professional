import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) {
      formErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Por favor, introduce un correo válido.";
    }

    if (!formData.message.trim()) {
      formErrors.message = "El mensaje no puede estar vacío.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "service_khmy9lm",
          "template_dzbrt36",
          formData,
          "2xzsH_hd3jjcD4nx4"
        )
        .then(
          () => {
            setFormData({ email: "", message: "" });
          },
          (error) => {
            alert(
              "Hubo un error al enviar el mensaje. Intenta de nuevo.",
              error
            );
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-lg w-full bg-gray-50 shadow-xl dark:shadow-gray-500 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Contacto
        </h2>
        <p className="text-center text-gray-600 mb-6">
          ¡Contáctame para colaborar en tu próximo proyecto!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tu correo electrónico"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows="5"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
