"use client"

import { Check, Gift, Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image"

export default function TabsContainer(){
    const [activeTab, setActiveTab] = useState("features")
    return <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold text-gray-900">Experience kGamify</h2>
                <p className="mx-auto max-w-2xl text-gray-600">
                  Discover how our app transforms learning into an engaging and rewarding experience
                </p>
              </div>
    
              <div className="mb-8 flex justify-center">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                      activeTab === "features" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("features")}
                  >
                    Features
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-3 text-sm font-medium ${
                      activeTab === "screenshots" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("screenshots")}
                  >
                    Screenshots
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                      activeTab === "video" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("video")}
                  >
                    Video
                  </button>
                </div>
              </div>
    
              {/* Features Tab */}
              {activeTab === "features" && (
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-500"
                      >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Competitive Learning</h3>
                    <p className="text-gray-600 mb-4">
                      Engage in challenges and competitions that make learning fun and motivating.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Real-time leaderboards</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Subject-specific challenges</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Peer competitions</span>
                      </li>
                    </ul>
                  </div>
    
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Gift size={24} className="text-orange-500" />
                      {/* Uncomment the SVG below if you want to use it instead of the Rewards icon */}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-500"
                      >
                        <path d="M12 20.94c1.5 0 2.75-.75 4-1.5 1.25-.76 2.25-1.84 2.5-3.21.25-1.38-.74-2.73-2.25-3.73-1.5-1-2.25-2.18-2.25-3.75s.75-3.75 2.25-3.75c-.75-.76-1.75-1-3-1-1.5 0-2.5.5-3.5 1-1 .5-1.5 1-2.25 1-1 0-2.25-1-3.75-1-1.75 0-3.25 1-4 2.25-.75 1.25-1 3.5 0 6.5 1 3 2.75 6.5 4.75 6.5 1.25 0 2-.75 3-1.5s1.75-1 2.5-1Z"></path>
                      </svg> */}
                    </div>
                    <h3 className="text-xl font-bold mb-3">Rewards System</h3>
                    <p className="text-gray-600 mb-4">
                      Earn points, badges, and real-world rewards as you demonstrate your knowledge.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Scholarship opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Digital certificates</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Redeemable points</span>
                      </li>
                    </ul>
                  </div>
    
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-500"
                      >
                        <path d="M2 12h20"></path>
                        <path d="M12 2v20"></path>
                        <path d="m4.93 4.93 14.14 14.14"></path>
                        <path d="m19.07 4.93-14.14 14.14"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Analytics Dashboard</h3>
                    <p className="text-gray-600 mb-4">
                      Track your progress with detailed insights and performance metrics.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Personalized learning insights</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Strength and weakness analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1" />
                        <span className="text-gray-700">Progress visualization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
    
              {/* Screenshots Tab */}
              {activeTab === "screenshots" && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="bg-black p-2 rounded-t-lg">
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={`/app_screenshots/screens/screen_${index}.jpg`}
                            alt={`App Screenshot ${index}`}
                            width={300}
                            height={600}
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">
                          {index === 1 && "Home Screen"}
                          {index === 2 && "Analytics Screen"}
                          {index === 3 && "Results Screen"}
                          {index === 4 && "Leaderboard Screen"}</h3>
                        <p className="text-sm text-gray-600">
                          {index === 1 && "List of available challenges and competitions"}
                          {index === 2 && "Detailed analytics and insights"}
                          {index === 3 && "Result and a little bit of motivation"}
                          {index === 4 && "Leaderboard and rankings"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
    
              {/* Video Tab */}
              {activeTab === "video" && (
                <div className="max-w-3xl mx-auto">
                  <div className="bg-black rounded-lg overflow-hidden shadow-lg">
                    <div className="relative pt-[56.25%]">
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-orange-500/30 transition">
                            <Play size={36} className="text-white ml-1" />
                          </div>
                          <p className="text-white text-lg font-medium">kGamify App Demo</p>
                          <p className="text-gray-400">See how our app transforms learning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>;
}