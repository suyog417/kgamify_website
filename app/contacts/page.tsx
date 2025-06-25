"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
    const recaptchaRef: any = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-50">
        <div className="container mx-auto grid px-4 py-12 md:py-1 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Get in Touch with the kGamify Team</h1>
            <p className="mb-6 text-gray-700">
              Whether you're a user, partner, educator, or just curious about what we do — we'd love to hear from you!
              Fill out the form below or drop us a message, and we'll get back to you soon.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-orange-500" />
                <span className="text-gray-700">+91 8879688067</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-orange-500" />
                <span className="text-gray-700">support@kgamify.in</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="hidden md:relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-50/70 to-transparent z-10"></div> */}
              <Image
                src="/contact_us_illustrations.svg"
                alt="Contact illustration"
                width={400}
                height={400}
                className="h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Address Section with Map */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 flex flex-col justify-center bg-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="mt-1">
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-700">
                    666, Kapil Nagar, Kondhwa Budruk,
                    <br />
                    Pune, Maharashtra 411048
                  </p>
                </div>
              </div>
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.53256473413646!2d73.88460015578572!3d18.46004361064873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf45fd5c689%3A0x56e47a3aedf375eb!2sVIT%20Kondhwa%20Library!5e0!3m2!1sen!2sin!4v1749827400002!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                className="w-full h-full rounded-lg"
                loading="lazy"></iframe>
              </div>
            </div>

            {/* Contact Form */}
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
              />
                <button
                  type="submit"
                  className="w-full rounded-md bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <section className="bg-orange-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">We're here to listen, connect, and create</h2>
            <p className="text-orange-500">Let's build something amazing together</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-8 -mt-8 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                  <Phone className="text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">Have a quick question? Give us a call anytime.</p>
                <p className="text-orange-500 font-medium mt-2">+91 8879688067</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-8 -mt-8 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                  <Mail className="text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">Send us an email and we'll respond as soon as possible.</p>
                <p className="text-orange-500 font-medium mt-2">support@kgamify.in</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-8 -mt-8 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                  <MapPin className="text-orange-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600">Come by our office for a face-to-face meeting.</p>
                <p className="text-orange-500 font-medium mt-2">666, Kapil Nagar, Kondhwa Budruk,
                    Pune, Maharashtra 411048</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
