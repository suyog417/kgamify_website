"use client"

import { Handshake, Gamepad2, Trophy, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";
import { PartnerCardItem } from "./benefits-cards";

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

export default function FeatureTabs() {
    const [activeTab, setActiveTab] = useState<Tab>("Championships");

  const content = tabContent[activeTab];
    return <>
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
    </>
}