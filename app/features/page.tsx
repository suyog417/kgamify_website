// import Image from "next/image"
import Link from "next/link"
// import { Trophy, BarChart3, Award, Users, Gamepad2, BookOpen, Zap, Globe } from "lucide-react"
import { useState } from "react";
import PartnerCard, { PartnerCardItem } from "@/components/reusable-components/benefits-cards";
import { Briefcase, Gamepad2, GraduationCap, Handshake, Trophy } from "lucide-react";
import Head from "next/head";
import FeatureTabs from "@/components/reusable-components/feature-tabs";
import { Metadata } from "next";

export const metadata:Metadata = {
  metadataBase: new URL('https://kgamify.in/'),
  title: 'Key Features | kGamify - Gamified Competition Platform',
  description: 'Discover the powerful features of kGamify that make learning competitive and rewarding. Explore tournaments, leaderboards, badges, and real-world opportunities.',
  keywords: 'kGamify features, gamified learning, quiz tournaments, leaderboards, badges, rewards, student engagement, edtech platform',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://kgamify.in/features/',
  },
  openGraph: {
    title: 'Key Features | kGamify',
    description: 'Explore the features that power kGamify\'s gamified learning experience—from real-time tournaments to badges and career rewards.',
    url: 'https://kgamify.in/features',
    siteName: 'kGamify',
    images: [
      {
        url: '/features_preview.png',
        width: 1200,
        height: 630,
        alt: 'kGamify Features Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Features | kGamify',
    description: 'From competitive tournaments to real-world rewards—learn how kGamify transforms learning into a gamified experience.',
    images: ['/features_preview.png'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Key Features | kGamify',
      url: 'https://kgamify.in/features',
      description: 'A detailed overview of kGamify\'s core features, including gamified tournaments, leaderboards, reward systems, and analytics.',
      publisher: {
        '@type': 'Organization',
        name: 'kGamify',
        url: 'https://kgamify.in',
      },
    }),
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

  const partnerCardData = [
  {
    icon: <Handshake className="text-orange-500 h-16 w-16" />,
    title: "For Partner Brands & Collaborators",
    items: partnerCardItems1,
  },
  {
    icon: <Gamepad2 className="text-orange-500 h-16 w-16" />,
    title: "For Players",
    items: partnerCardItems2,
  },
  {
    icon: <Trophy className="text-orange-500 h-16 w-16" />,
    title: "For Championship Makers",
    items: partnerCardItems3,
  },
  {
    icon: <GraduationCap className="text-orange-500 h-16 w-16" />,
    title: "For Colleges & Institutes",
    items: partnerCardItems4,
  },
  {
    icon: <Briefcase className="text-orange-500 h-16 w-16" />,
    title: "For Recruiters & Employers",
    items: partnerCardItems5,
  },
];


export default function FeaturesPage() {

  
  return (
    <>
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


      <FeatureTabs/>

      

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">A Unified Platform Serving Every Stakeholder</h2>
            <p className="mx-auto max-w-5xl text-gray-600">
            kGamify creates exceptional value for every participant in our comprehensive ecosystem. Whether you're a student seeking growth, an educator enhancing instruction, a recruiter discovering talent, a brand building connections, or a competitive player pursuing excellence, our gamification-powered platform delivers meaningful engagement and measurable results.
            </p>
          </div>
            

          <div className="flex flex-wrap justify-center gap-8">
            {partnerCardData.map((card, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-[45%] lg:w-[30%]"
                >
                  <PartnerCard
                    imageSrc={card.icon}
                    title={card.title}
                    items={card.items}
                  />
                </div>
              );
            })}
          </div>
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
