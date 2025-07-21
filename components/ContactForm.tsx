"use client"

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const recaptchaRef: any = useRef(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const onChange = (value: string | null) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const asyncScriptOnLoad = () => {
    console.log("Google recaptcha loaded just fine");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const { name, email, subject, message } = formData;

    const url = `https://kgamify.in/championshipmaker/apis/post_contact.php?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(
      subject
    )}&message=${encodeURIComponent(message)}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });

      if (response.ok) {
        const result = await response.json(); // If the API returns JSON
        console.log("API response:", result);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaVerified(false);
        recaptchaRef.current.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error occurred. Please try again later.");
    }
  };
    return <>
    <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                    required
                  >
                    <option value="">Choose subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={onChange}
                  asyncScriptOnLoad={asyncScriptOnLoad}
                  className="mb-6"
                />

                <button
                  type="submit"
                  disabled={loading || !captchaVerified}
                  className={`px-6 py-2 rounded-md font-medium transition ${
                    loading || !captchaVerified
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#ff8200] hover:bg-orange-600 text-white"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
    </>
}
