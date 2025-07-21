export const metadata = {
  title: 'Cookie Policy | kGamify - Gamified Competition Platform',
  description: 'Learn how kGamify uses cookies and similar technologies. Our comprehensive cookie policy explains cookie types, usage, and your control in line with our privacy and terms policies.',
  keywords: 'kGamify cookie policy, cookies, browser cookies, analytics cookies, edtech policy, privacy',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://kgamify.in/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | kGamify',
    description: 'Learn how kGamify uses cookies to personalise experience, ensure security, and analyse usage. Read our cookie policy for more details.',
    url: 'https://kgamify.in/cookie-policy',
    siteName: 'kGamify',
    images: [
      {
        url: '/cookie_policy_preview.png',
        width: 1200,
        height: 630,
        alt: 'kGamify Cookie Policy'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | kGamify',
    description: 'Read kGamify\'s comprehensive cookie policy.',
    images: ['/cookie_policy_preview.png'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Cookie Policy | kGamify',
      url: 'https://kgamify.in/cookie-policy',
      description: 'Cookie policy for kGamify, detailing our use of cookies and user control measures.',
      publisher: {
        '@type': 'Organization',
        name: 'kGamify',
        url: 'https://kgamify.in',
      },
      mainEntity: {
        '@type': 'LegalDocument',
        name: 'Cookie Policy',
        description: 'Cookie policy governing data collection and use of cookies on kGamify platform.',
        publisher: {
          '@type': 'Organization',
          name: 'kGamify',
        },
      },
    }),
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Cookie Policy</h1>

          <div className="prose prose-orange max-w-none">
            <p className="text-gray-700"><strong>Effective Date:</strong> July 18, 2025</p>
            <p className="text-gray-700">
              This document explains how <strong>kGamify</strong> ("Yantrikisoft Pvt. Ltd.", "we", "our" or "us") uses cookies and similar tracking technologies on the kGamify platform ("Platform"). By accessing or using kGamify, you agree to this Cookie Policy, which operates in conjunction with our Privacy Policy and Terms of Use.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">What Are Cookies?</h2>
            <p className="text-gray-700">
              Cookies are small files placed on your device when you visit our Platform. They help improve our services, personalise your experience, and support Platform security and analytics.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Types of Cookies We Use</h2>
            
            <h3 className="mt-6 text-lg font-semibold text-gray-800">1. Strictly Necessary Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Required for operation of the Platform.</li>
              <li>Enable essential features such as secure log-in and navigation.</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-gray-800">2. Performance and Analytics Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Help us understand how you use the Platform, including pages viewed and errors encountered.</li>
              <li>Used for platform analytics, improvement, and optimisation.</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-gray-800">3. Functionality Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Remember user preferences (e.g., language or region) to improve your experience.</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-gray-800">4. Targeting/Advertising Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>May be used to deliver advertisements relevant to you and assess ad performance.</li>
              <li>We do not share or sell personal data for third-party marketing without your consent.</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">How We Use Cookies</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Personalisation:</strong> To remember user preferences and account settings.
              </li>
              <li>
                <strong>Security:</strong> To identify security issues and protect your information.
              </li>
              <li>
                <strong>Analytics:</strong> To analyse aggregate usage and enhance Platform features.
              </li>
              <li>
                <strong>Compliance:</strong> To satisfy legal and regulatory obligations.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Managing Cookies</h2>
            <p className="text-gray-700">
              On first visit, you may receive a prompt to accept or manage cookies (where required by law). You may also configure your browser to block or delete cookies at any time; however, this may impact site functionality.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Third-Party Cookies</h2>
            <p className="text-gray-700">
              Some cookies may be set by external services we use for analytics, security, or functionality. We do not authorize any third party to use cookies for their own purposes outside provision of their service to kGamify.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Data Sharing and Retention</h2>
            <p className="text-gray-700">
              We do <strong>not</strong> sell or misuse your personally identifiable information. We may share aggregated or anonymized data with partners for analytics or business development.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Policy Changes</h2>
            <p className="text-gray-700">
              We may update this Cookie Policy from time to time. Review this page periodically for changes. Continued use of our Platform after amendments signifies your consent to revised terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Contact Us</h2>
            <div className="not-prose text-gray-700">
              <p>Yantrikisoft Pvt. Ltd.</p>
              <p>D207, Shabi Complex, Plot 110-111</p>
              <p>Sector 12, Vashi, Navi Mumbai – 400703, India</p>
              <p>
                For queries, see contact options in our Privacy Policy.
              </p>
            </div>
            <p className="text-gray-700 italic mt-4">
              This Cookie Policy is to be read in conjunction with our Privacy Policy and Terms of Use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}