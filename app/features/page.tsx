'use client'

// import Image from "next/image"
import Link from "next/link"
// import { Trophy, BarChart3, Award, Users, Gamepad2, BookOpen, Zap, Globe } from "lucide-react"
import { useState } from "react";
import PartnerCard, { PartnerCardItem } from "@/components/reusable-components/benefits-cards";
import { Briefcase, Gamepad2, GraduationCap, Handshake, Trophy } from "lucide-react";


const tabs = [
  // "Events & Workshops",
  "Championships",
  "Analytics",
  "Value Addition",
] as const;


type Tab = typeof tabs[number];

interface TabContent {
  [key: string]: {
    title: string;
    description: string;
    points: string[];
  };
}

const featureVectors = [
  "events_and_workshops.png",
  "championships.png",
  "analytics.png",
  "value_addition.png",
]

const tabContent: TabContent = {
  // "Events & Workshops": {
  //   title: "Events & Workshops",
  //   description:
  //     "kGamify hosts a variety of interactive events and workshops to help users stay engaged and connected with industry trends. These sessions are led by experts and available in both online and offline modes, offering flexibility and practical insights.",
  //   points: [
  //     "Online and physical location options available",
  //     "Resolve doubts through interactive Q&A sessions",
  //     "Receive career guidance from industry professionals",
  //     "Free or discounted access for championship participants",
  //   ],
  // },
  "Championships" : {
    title: "Championships",
    description: "kGamify’s assessment system is built around challenging and engaging question formats that test real-world problem-solving skills. The questions dynamically adjust based on the user’s current performance.",
    points: [
      "You will apply your learned concepts to answer questions",
      "Compare your performance across global subjects",
      "Expert-reviewed subjective answers for accurate evaluation",
      "Adaptive questioning based on your performance"
    ]
  },
  "Analytics": {
    title: "Analytics",
    description:"Our analytics feature empowers users with a clear understanding of their progress and capabilities through detailed performance charts and personalized suggestions.",
    points: [
      "Download k-Chart for comprehensive performance visualization",
      "Compare performance across different subjects",
      "Receive personalized improvement suggestions",
      "Track progress with evolving AI algorithms"
    ]
  },
  "Value Addition": {
    title: "Value Addition",
    description: "Beyond championships and assessments, kGamify offers career-boosting opportunities such as internships, jobs, scholarship guidance, and resume building tools.",
    points: [
      "Exclusive internship and job opportunities",
      "Scholarship information and application assistance",
      "Resume building tools and portfolio storage",
      "Earn through question contributions and hosting assessments"
    ]
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

  const [activeTab, setActiveTab] = useState<Tab>("Championships");

  const content = tabContent[activeTab];
  
  return (
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

      <section>
            <div className=" bg-gray-50 py-10 px-4 flex flex-col items-center">
      {/* Tabs */}
      <div className="flex gap-1 bg-white shadow-md rounded-xl p-1 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white mt-10 max-w-2xl w-full rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          {/* {activeTab === "Events & Workshops" && (
            <img
              src="/vectors/events_and_workshops.png"
              alt="Events & Workshops Illustration"
              className="h-32"
            />
          )} */}
          {activeTab === "Championships" && (
            <img
              src="/vectors/championships.png"
              alt="Championships Illustration"
              className="h-32"
            />
          )}
          {activeTab === "Analytics" && (
            <img
              src="/vectors/analytics.png"
              alt="Analytics Illustration"
              className="h-32"
            />
          )}
          {activeTab === "Value Addition" && (
            <img
              src="/vectors/value_addition.png"
              alt="Value Addition Illustration"
              className="h-32"
            />
          )}
        </div>
        <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
        <p className="text-gray-600 text-sm mb-6">{content.description}</p>
        <ul className="text-left text-sm text-gray-800 space-y-3">
          {content.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-violet-600 mr-2 mt-0.5">✔</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
      </section>

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
  )
}
