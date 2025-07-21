// import Image from "next/image"
import Link from "next/link"
// import { Trophy, BarChart3, Award, Users, Gamepad2, BookOpen, Zap, Globe } from "lucide-react"
import { useState } from "react";
import PartnerCard, { PartnerCardItem } from "@/components/reusable-components/benefits-cards";
import { Award, BarChart2, Briefcase, Check, FileText, Gamepad2, Gift, GraduationCap, Handshake, Rocket, ShoppingBag, Star, Trophy, UserCheck, Users } from "lucide-react";
import Head from "next/head";
import FeaturesTabs from "@/components/FeaturesTabs";

export const metadata = {
  title: "Key Features | kGamify - Gamified Competition Platform",
  description:
    "Discover the powerful features of kGamify that make learning competitive and rewarding. Explore tournaments, leaderboards, badges, and real-world opportunities.",
  keywords: [
    "kGamify features",
    "gamified learning",
    "quiz tournaments",
    "leaderboards",
    "badges",
    "rewards",
    "student engagement",
    "edtech platform"
  ],
  alternates: {
    canonical: "https://kgamify.in/features",
  },
  openGraph: {
    title: "Key Features | kGamify",
    description:
      "Explore the features that power kGamify’s gamified learning experience—from real-time tournaments to badges and career rewards.",
    url: "https://kgamify.in/features",
    siteName: "kGamify",
    images: [
      {
        url: "/features_preview.png",
        width: 1200,
        height: 630,
        alt: "kGamify Features Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Features | kGamify",
    description:
      "From competitive tournaments to real-world rewards—learn how kGamify transforms learning into a gamified experience.",
    images: ["/features_preview.png"],
  },
};



const partnerCardItems1: PartnerCardItem[] = [
    {
      icon: "👜",
      text: "Brand integration across learning platforms and gamified events",
    },
    {
      icon: "🤝",
      text: "Co-branded initiatives like challenges, workshops & hackathons",
    },
    {
      icon: "📊",
      text: "Analytics-driven insights on campaign engagement & learner interaction",
    },
  ];

  const partnerCardItems2: PartnerCardItem[] = [
    {
      icon: "🏆",
      text: "Participate in quick knowledge championships and win rewards",
    },
    {
      icon: "🎁",
      text: "Leaderboards, analysis & share your achievements on social media",
    },
    {
      icon: "🚀",
      text: "Internships, job listings & career growth opportunities,get coupons of various products and services",
    },
  ];

  const partnerCardItems3: PartnerCardItem[] = [
    {
      icon: "📄",
      text: "Championship creation & players tracking",
    },
    {
      icon: "👩‍🎓",
      text: "Get rewards for creating championships",
    },
    {
      icon: "🥇",
      text: "Get recognition form the participants about created championships",
    },
  ];

  const partnerCardItems4: PartnerCardItem[] = [
    {
      icon: "📈",
      text: "Boost student engagement",
    },
    {
      icon: "✔️",
      text: "Improve placement and internships",
    },
    {
      icon: "🎓",
      text: "Efficient assessment tool for faculty",
    },
  ];

  const partnerCardItems5: PartnerCardItem[] = [
    {
      icon: "👜",
      text: "Access to pre-assessed, job-ready talents",
    },
    {
      icon: "✨",
      text: "Data-driven screening and hiring",
    },
    {
      icon: "🥇",
      text: "Skill-based recruitment for precise talent acquisition",
    },
  ];

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
      {children}
    </div>
  );
}

function PointIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-500 mr-3 flex-shrink-0">
      {icon}
    </span>
  );
}

const partnerCardData = [
  {
    icon: <Handshake size={32} />,
    title: "For Partner Brands & Collaborators",
    items: [
      {
        icon: <ShoppingBag size={20} />,
        text: "Brand integration across learning platforms and gamified events",
      },
      {
        icon: <Users size={20} />,
        text: "Co-branded initiatives like challenges, workshops & hackathons",
      },
      {
        icon: <BarChart2 size={20} />,
        text: "Analytics-driven insights on campaign engagement & learner interaction",
      },
    ],
  },
  {
    icon: <Gamepad2 size={32} />,
    title: "For Players",
    items: [
      {
        icon: <Award size={20} />,
        text: "Participate in quick knowledge championships and win rewards",
      },
      {
        icon: <Gift size={20} />,
        text: "Leaderboards, analysis & share your achievements on social media",
      },
      {
        icon: <Rocket size={20} />,
        text:
          "Internships, job listings & career growth opportunities, get coupons of various products and services",
      },
    ],
  },
  {
    icon: <Trophy size={32} />,
    title: "For Championship Makers",
    items: [
      {
        icon: <FileText size={20} />,
        text: "Championship creation & players tracking",
      },
      {
        icon: <UserCheck size={20} />,
        text: "Get rewards for creating championships",
      },
      {
        icon: <Award size={20} />,
        text: "Get recognition from the participants about created championships",
      },
    ],
  },
  {
    icon: <GraduationCap size={32} />,
    title: "For Colleges & Institutes",
    items: [
      {
        icon: <BarChart2 size={20} />,
        text: "Boost student engagement",
      },
      {
        icon: <Check size={20} />,
        text: "Improve placement and internships",
      },
      {
        icon: <GraduationCap size={20} />,
        text: "Efficient assessment tool for faculty",
      },
    ],
  },
  {
    icon: <Briefcase size={32} />,
    title: "For Recruiters & Employers",
    items: [
      {
        icon: <Briefcase size={20} />,
        text: "Access to pre-assessed, job-ready talents",
      },
      {
        icon: <Star size={20} />,
        text: "Data-driven screening and hiring",
      },
      {
        icon: <Award size={20} />,
        text: "Skill-based recruitment for precise talent acquisition",
      },
    ],
  },
];


export default function FeaturesPage() {

  
  return (
    <>
    <Head>
    <title>Key Features | kGamify - Gamified Competition Platform</title>
    <meta
        name="description"
        content="Discover the powerful features of kGamify that make learning competitive and rewarding. Explore tournaments, leaderboards, badges, and real-world opportunities."
    />
    <meta
        name="keywords"
        content="kGamify features, gamified learning, quiz tournaments, leaderboards, badges, rewards, student engagement, edtech platform"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://kgamify.in/features" />

    {/* Open Graph */}
    <meta property="og:title" content="Key Features | kGamify" />
    <meta
        property="og:description"
        content="Explore the features that power kGamify’s gamified learning experience—from real-time tournaments to badges and career rewards."
    />
    <meta property="og:url" content="https://kgamify.in/features" />
    <meta property="og:site_name" content="kGamify" />
    <meta property="og:image" content="/features_preview.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="kGamify Features Overview" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Key Features | kGamify" />
    <meta
        name="twitter:description"
        content="From competitive tournaments to real-world rewards—learn how kGamify transforms learning into a gamified experience."
    />
    <meta name="twitter:image" content="/features_preview.png" />

    {/* Structured Data */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Key Features | kGamify",
                "url": "https://kgamify.in/features",
                "description": "A detailed overview of kGamify's core features, including gamified tournaments, leaderboards, reward systems, and analytics.",
                "publisher": {
                    "@type": "Organization",
                    "name": "kGamify",
                    "url": "https://kgamify.in"
                }
            })
        }}
    />
</Head>

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900">Built for Champions, Designed for Success</h1>
            <p className="mb-8 text-lg text-gray-700">
            Our platform combines sophisticated competition management tools with career-focused opportunities, creating an unparalleled championship experience that transforms your knowledge into measurable success and professional advancement.
            </p>
            {/* <Link
              href="/download"
              className="rounded-md bg-orange-500 px-8 py-3 font-medium text-white transition hover:bg-orange-600"
            >
              Download Now
            </Link> */}
          </div>
        </div>
      </section>

      <FeaturesTabs/>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">A Unified Platform Serving Every Stakeholder</h2>
            <p className="mx-auto max-w-5xl text-gray-600">
            kGamify creates exceptional value for every participant in our comprehensive ecosystem. Whether you're a student seeking growth, an educator enhancing instruction, a recruiter discovering talent, a brand building connections, or a competitive player pursuing excellence, our gamification-powered platform delivers meaningful engagement and measurable results.
            </p>
          </div>
            

          <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-500">
          Partner With Us
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partnerCardData.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white border-t-4 border-orange-400 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            >
              <IconCircle>{card.icon}</IconCircle>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">{card.title}</h3>
              <ul className="text-sm text-gray-800 space-y-4 w-full">
                {card.items.map((item, i) =>
                  <li key={i} className="flex items-start w-full">
                    <PointIcon icon={item.icon} />
                    <span className="text-left">{item.text}</span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to Experience kGamify?</h2>
            <p className="mb-8 text-lg text-gray-700">
              Download our app today and start your journey to more engaging, effective, and rewarding learning.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/download"
                className="rounded-md bg-orange-500 px-8 py-3 font-medium text-white transition hover:bg-orange-600"
              >
                Download Now
              </Link>
              <Link
                href="/contacts"
                className="rounded-md border border-orange-500 bg-white px-8 py-3 font-medium text-orange-500 transition hover:bg-orange-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
