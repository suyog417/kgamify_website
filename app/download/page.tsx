"use client"

import type React from "react"
import { useQRCode } from 'next-qrcode'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Bell, Play, Star, Gift } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import Head from "next/head"

export default function DownloadPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("features")
  const { Canvas } = useQRCode();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log("Email submitted for iOS notification:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <>
    <Head>
    <title>Download kGamify App | Android & iOS</title>
    <meta
        name="description"
        content="Get the kGamify app on Android and iOS. Join competitive quiz tournaments, earn rewards, and unlock real-world opportunities. Download now!"
    />
    <meta
        name="keywords"
        content="download kGamify app, kGamify APK, quiz app download, gamified learning app, Android, iOS, educational game, student competitions"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://kgamify.in/download" />

    {/* Open Graph */}
    <meta property="og:title" content="Download kGamify App | Android & iOS" />
    <meta
        property="og:description"
        content="Install kGamify and join competitive quizzes. Available on Android and iOS. Learn through play and win real rewards."
    />
    <meta property="og:url" content="https://kgamify.in/download" />
    <meta property="og:site_name" content="kGamify" />
    <meta property="og:image" content="/download_preview.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Download kGamify App" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Download kGamify App | Android & iOS" />
    <meta
        name="twitter:description"
        content="Ready to compete and win? Download the kGamify app on Android or iOS and start your journey today!"
    />
    <meta name="twitter:image" content="/download_preview.png" />

    {/* Structured Data */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MobileApplication",
                "name": "kGamify",
                "operatingSystem": "Android, iOS",
                "applicationCategory": "EducationApplication",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.7",
                    "ratingCount": "1024"
                },
                "downloadUrl": "https://kgamify.in/download",
                "screenshot": [
                    "https://kgamify.in/images/screenshot1.png",
                    "https://kgamify.in/images/screenshot2.png"
                ],
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
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 items-center md:grid-cols-2">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Download Now
              </div>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Get kGamify on Your Device</h1>
              <p className="mb-8 text-lg text-gray-700">
                Transform your learning experience with our gamified education platform. Available now on Android,
                coming soon to iOS.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-8">
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-black text-white rounded-lg px-6 py-3 transition hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faGooglePlay} size="lg"/>
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
                    className="lucide lucide-play"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg> */}
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </Link> 
                <div className="flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 rounded-lg px-6 py-3 opacity-80">
                  <FontAwesomeIcon icon={faApple} size="2x" />
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
                    className="lucide lucide-apple"
                  >
                    <path d="M12 20.94c1.5 0 2.75-.75 4-1.5 1.25-.76 2.25-1.84 2.5-3.21.25-1.38-.74-2.73-2.25-3.73-1.5-1-2.25-2.18-2.25-3.75s.75-3.75 2.25-3.75c-.75-.76-1.75-1-3-1-1.5 0-2.5.5-3.5 1-1 .5-1.5 1-2.25 1-1 0-2.25-1-3.75-1-1.75 0-3.25 1-4 2.25-.75 1.25-1 3.5 0 6.5 1 3 2.75 6.5 4.75 6.5 1.25 0 2-.75 3-1.5s1.75-1 2.5-1Z"></path>
                  </svg> */}
                  <div>
                    <div className="text-xs">COMING SOON ON</div>
                    <div className="font-medium">App Store</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                </div>
                <div className="text-sm text-gray-600">Joined by 10,000+ students and educators</div>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="#FFA500" stroke="#FFA500" strokeWidth={1} />
                ))}
                <span className="text-sm text-gray-600">4.8/5 (2,500+ reviews)</span>
              </div>
            </div>
            <div className="hidden md:relative md:flex justify-center items-center">
              <div className="relative w-full max-w-2xl h-[600px]">
                {/* Phone 1 - Left (Score/Progress Screen) */}
                <div className="absolute left-0 top-8 z-10 transform -rotate-6">
                  <div className="w-72 bg-black rounded-[1.5rem] p-2 shadow-2xl">
                    <img src="/app_screenshots/result.jpg" alt="Championships Screen" className="rounded-[1.5rem]"/>
                  </div>
                </div>

                {/* Phone 2 - Center (Championships Screen) */}
                <div className="relative left-44 z-20 mx-auto">
                  <div className="w-72  bg-black rounded-[1.5rem] p-2 shadow-2xl">
                    <img src="/app_screenshots/home_screen.jpg" alt="Championships Screen" className="rounded-[1.5rem]"/>
                  </div>
                </div>

                {/* Phone 3 - Right (Analytics Screen) */}
                <div className="absolute right-0 top-8 z-10 transform rotate-6">
                  <div className="w-72 bg-black rounded-[1.5rem] p-2 shadow-2xl">
                    <img src="/app_screenshots/analytics.jpg" alt="Championships Screen" className="rounded-[1.5rem]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Tabs */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Download Options */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Android Download */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M5 19V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"></path>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Android</h3>
                  <p className="text-green-600 font-medium">Available Now</p>
                </div>
              </div>

              <div className="flex mb-6">
                <div className="w-1/2 pr-4">
                  <h4 className="font-bold mb-2">Scan QR Code</h4>
                  <div className="p-4 rounded-lg">
                  <Canvas
                      text={'https://play.google.com/store/apps/details?id=com.app.kgamify&pcampaignid=web_share'}
                      options={{
                        errorCorrectionLevel: 'M',
                        margin: 0,
                        scale: 6,
                        width: 150,
                        color: {
                          dark: '#000000',
                          light: '#ffffff',
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-4">
                  <h4 className="font-bold mb-2">System Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <span>Android 6.0 or higher</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <span>50 MB free storage</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <span>1 GB RAM minimum</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <span>Internet connection</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-black text-white rounded-lg px-6 py-3 transition hover:bg-gray-800 w-full"
              >
                <FontAwesomeIcon icon={faGooglePlay} size="lg"/>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </Link>
            </div>

            {/* iOS Coming Soon */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faApple} size="2x" />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M12 20.94c1.5 0 2.75-.75 4-1.5 1.25-.76 2.25-1.84 2.5-3.21.25-1.38-.74-2.73-2.25-3.73-1.5-1-2.25-2.18-2.25-3.75s.75-3.75 2.25-3.75c-.75-.76-1.75-1-3-1-1.5 0-2.5.5-3.5 1-1 .5-1.5 1-2.25 1-1 0-2.25-1-3.75-1-1.75 0-3.25 1-4 2.25-.75 1.25-1 3.5 0 6.5 1 3 2.75 6.5 4.75 6.5 1.25 0 2-.75 3-1.5s1.75-1 2.5-1Z"></path>
                  </svg> */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">iOS</h3>
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                    <Bell size={12} className="mr-1" />
                    Coming Soon
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-3">Get Notified When We Launch on iOS</h4>
                <p className="text-gray-600 mb-4">
                  Be the first to know when kGamify becomes available on the App Store. We'll send you a notification as
                  soon as it's ready.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    <p className="font-medium">Thank you for your interest!</p>
                    <p className="text-sm">We'll notify you when kGamify launches on iOS.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="rounded-r-md bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600"
                    >
                      Notify Me
                    </button>
                  </form>
                )}
              </div>

              {/* <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-sm">Expected Features on iOS</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>Native iOS design and experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>Apple Watch integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>iCloud sync across Apple devices</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>Apple Pencil support for iPad</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* App Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Join thousands of satisfied users who have transformed their learning experience with kGamify
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-6 -mt-6 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#FFA500" stroke="#FFA500" strokeWidth={1} />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-6">
                  "kGamify has completely changed how I study. The competitive element makes me want to practice more,
                  and I've seen real improvements in my grades!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h4 className="font-bold">Aisha K.</h4>
                    <p className="text-sm text-gray-600">Android User</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-6 -mt-6 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#FFA500" stroke="#FFA500" strokeWidth={1} />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-6">
                  "As a teacher, I've seen a dramatic increase in student engagement since implementing kGamify in my
                  classroom. It's been a game-changer!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h4 className="font-bold">Dr. Patel</h4>
                    <p className="text-sm text-gray-600">Android User</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-lg relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-6 -mt-6 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} size={16} fill="#FFA500" stroke="#FFA500" strokeWidth={1} />
                  ))}
                  <Star key={5} size={16} fill="none" stroke="#FFA500" strokeWidth={1} />
                </div>
                <p className="italic text-gray-700 mb-6">
                  "The scholarship I won through kGamify competitions helped fund my college education. The platform not
                  only made learning fun but opened doors!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h4 className="font-bold">Rahul M.</h4>
                    <p className="text-sm text-gray-600">Android User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Find answers to common questions about downloading and using kGamify
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-2">Is kGamify free to download?</h3>
                <p className="text-gray-700">
                  Yes, kGamify is free to download. We offer a basic free plan with access to core features, and premium
                  subscriptions for advanced features and content.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-2">When will kGamify be available on iOS?</h3>
                <p className="text-gray-700">
                  We're currently working on our iOS version and expect to launch in the next few months. Sign up for
                  notifications to be the first to know when it's available.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-2">Can I use kGamify offline?</h3>
                <p className="text-gray-700">
                  Yes, many features of kGamify work offline. You can download content for offline use, and your
                  progress will sync when you reconnect to the internet.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-2">How do I sync my progress across devices?</h3>
                <p className="text-gray-700">
                  Create a kGamify account and sign in on all your devices. Your progress, achievements, and settings
                  will automatically sync across all platforms when connected to the internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to Transform Your Learning?</h2>
            <p className="mb-8 text-lg text-gray-700">
              Download kGamify today and join thousands of students and educators who are already experiencing the
              benefits of gamified learning.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-black text-white rounded-lg px-8 py-4 transition hover:bg-gray-800"
              >
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
                  className="lucide lucide-play"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </Link>
              <button
                onClick={() => {
                  setActiveTab("video")
                  window.scrollTo({
                    top: document.getElementById("app-preview")?.offsetTop || 0,
                    behavior: "smooth",
                  })
                }}
                className="flex items-center justify-center space-x-2 border border-gray-300 bg-white text-gray-700 rounded-lg px-8 py-4 transition hover:bg-gray-50"
              >
                <Play size={24} />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
