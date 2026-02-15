import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import content from "../data/content.json";

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const { serviceId, templateId, publicKey } = content.emailjs;

    if (
      serviceId === "YOUR_EMAILJS_SERVICE_ID" ||
      templateId === "YOUR_EMAILJS_TEMPLATE_ID"
    ) {
      // Demo mode — simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="from_name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="from_email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-primary-600/25"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-sm text-center">
          Message sent successfully! I will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-400 text-sm text-center">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
