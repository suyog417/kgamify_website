"use client";

import { useState } from "react";

export default function BrandEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  // You can connect this to your own backend, email service, or service like Formspree.
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Replace with your backend/enquiry handling code
    setSubmitted(true);
    // Reset form fields if desired
    // setForm({ name: "", email: "", company: "", message: "" });
  }

  return (
    <section className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-xl mx-auto my-12">
      <h2 className="text-2xl font-bold text-orange-500 mb-2">Send a Brand Partnership Enquiry</h2>
      <p className="text-gray-700 mb-6">
        Fill out the form below and our team will contact you to discuss partnership opportunities.
      </p>

      {submitted ? (
        <div className="text-green-600 font-semibold py-8 text-center">
          Thank you for your enquiry! We will get in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="name">
              Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="email">
              Email <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
              placeholder="you@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="company">
              Company / Organization
            </label>
            <input
              type="text"
              name="company"
              id="company"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
              placeholder="Your Company"
              value={form.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="message">
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
              placeholder="Tell us about your brand and how you'd like to collaborate"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition"
          >
            Send Enquiry
          </button>
        </form>
      )}
    </section>
  );
}
