"use client";

import { useState, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const categories = ["General", "Quizzes", "Prizes", "Technical & support"];

const faqs = [
  "What is Kgamify and how does it work?",
  "How do I sign up on the Kgamify app?",
  "Is Kgamify free to use?",
  "Which devices and platforms support Kgamify?",
  "Is there a tutorial or guide for new users?",
  "Is Kgamify suitable for all age groups?",
];

export default function FAQPage() {
  const [queryData, setQueryData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQueryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    setLoading(true);

    const { name, email, query } = queryData;

    const url = `https://kgamify.in/championshipmaker/apis/post_queries.php?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&query=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });
      const result = await response.text();

      if (response.ok) {
        alert("Query submitted successfully!");
        setQueryData({ name: "", email: "", query: "" });
      } else {
        alert("Failed to submit query.");
      }
    } catch (error) {
      console.error("Query submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const recaptchaRef: any = useRef(null);

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

  return (
    <main className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column - Heading and Categories (together) */}
        <div className="flex flex-col space-y-6">
          {/* Heading */}
          <div className="text-black text-xl font-bold">FAQ’s</div>

          {/* Categories with spacing below heading */}
          <div className="flex flex-col space-y-3 text-blue-600 font-medium underline mt-6">
            {categories.map((cat) => (
              <a key={cat} href="#" className="hover:text-blue-800">
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Search and Questions */}
        <div className="md:col-span-3 space-y-8 mt-6">
          {/* Search Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search for your question */}
            <div className="flex items-center rounded-full border-2 border-gray-400 px-4 py-2 shadow-md">
              <Search className="text-[#ff8200] h-4 w-4 mr-2" />
              <input
                type="text"
                placeholder="Search for your question here"
                className="flex-1 outline-none placeholder-gray-600 text-sm"
              />
              <div className="ml-2 w-4 h-4 bg-[#ff8200] rounded-full"></div>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((q, index) => (
              <div
                key={index}
                className="border-b pb-3 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center font-medium text-base">
                  {q}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam facilisis.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Contact/Query Form */}
          <div className="mt-16 p-6 border rounded-lg shadow-md bg-gray-50">
            <h2 className="text-center text-xl font-bold text-black mb-6 mt-4">
              QUERY
            </h2>
            <form onSubmit={handleQuerySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={queryData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff8200]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={queryData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff8200]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Query
                </label>
                <textarea
                  name="query"
                  value={queryData.query}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff8200]"
                  placeholder="Describe your query here..."
                  required
                />
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={onChange}
                asyncScriptOnLoad={asyncScriptOnLoad}
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
        </div>
      </div>
    </main>
  );
}
