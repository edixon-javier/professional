import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
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
      formErrors.email = t("contactForm.emailErrorRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t("contactForm.emailErrorInvalid");
    }

    if (!formData.message.trim()) {
      formErrors.message = t("contactForm.messageErrorRequired");
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
            alert(t("contactForm.errorSending"), error);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-lg w-full bg-gray-50 shadow-xl dark:shadow-gray-500 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          {t("contactForm.heading")}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {t("contactForm.description")}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contactForm.emailLabel")}
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
              placeholder={t("contactForm.emailPlaceholder")}
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
              {t("contactForm.messageLabel")}
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
              placeholder={t("contactForm.messagePlaceholder")}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
          >
            {t("contactForm.submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
