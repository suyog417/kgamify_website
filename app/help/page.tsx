import HelpCenterPage from "./HelpPageContent";

export const metadata = {
  title: "Help Center | kGamify - Support & FAQs",
  description: "Need help with kGamify? Visit our Help Center for answers to common questions, troubleshooting guides, and support resources.",
  keywords: "kGamify help center, support, FAQs, troubleshooting, customer support, gamification help, contact support, kGamify FAQs",
  robots: "index, follow",
  alternates: {
    canonical: "https://kgamify.in/help-center",
  },
  openGraph: {
    title: "Help Center | kGamify",
    description: "Find answers to your questions and get support for using kGamify. Access FAQs, how-to guides, and customer service help.",
    url: "https://kgamify.in/help-center",
    siteName: "kGamify",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Help Center | kGamify",
    description: "Need help with kGamify? Explore our Help Center for answers to frequently asked questions and support articles.",
    images: ["/help_center_hero.png"],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I create a kGamify account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can sign up for a kGamify account by visiting our sign-up page and filling in your details. Once verified, you’ll have access to our platform features."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach our support team via the contact form on this page or by emailing support@kgamify.in."
          }
        }
      ]
    }),
  },
};

export default function HelpCenter() {
  return (
    <HelpCenterPage />
  );
}