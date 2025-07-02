"use client"

import PartnershipOpportunities from "@/components/reusable-components/partnership-opportunities";
import { SquareCheckBig } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Xarrow from "react-xarrows";

// export const metadata = {
//     title: "Brand Partnership Opportunities | kGamify - Strategic Marketing Collaborations",
//     description: "Partner with kGamify for innovative gamification marketing strategies. Drive audience engagement, boost brand visibility, and achieve measurable business growth through strategic collaborations.",
//     keywords: "brand partnerships, gamification marketing, strategic collaborations, audience engagement, marketing partnerships, business growth, kGamify partnerships",
//     openGraph: {
//       title: "Brand Partnership Opportunities | kGamify",
//       description: "Transform your marketing approach with kGamify's strategic brand partnerships. Amplify engagement and drive growth through innovative gamification.",
//       url: "https://kgamify.in/partnerships/brand",
//       siteName: "kGamify",
//       images: [
//         {
//           url: "/brand_partnership_hero.png",
//           width: 1200,
//           height: 630,
//           alt: "kGamify Brand Partnership Opportunities"
//         }
//       ],
//       locale: "en_US",
//       type: "website"
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Brand Partnership Opportunities | kGamify",
//       description: "Transform your marketing with kGamify's strategic brand partnerships. Drive engagement through innovative gamification strategies.",
//       images: ["/brand_partnership_hero.png"]
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1
//       }
//     },
//     alternates: {
//       canonical: "https://kgamify.in/partnerships/brand"
//     }
//   };

export default function BrandPartnershipPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Brand Partnership Opportunities | kGamify",
        "description": "Strategic brand partnerships with kGamify for innovative gamification marketing solutions",
        "url": "https://kgamify.com/brand-partnerships",
        "mainEntity": {
            "@type": "Service",
            "name": "Brand Partnership Services",
            "provider": {
                "@type": "Organization",
                "name": "kGamify",
                "url": "https://kgamify.com"
            },
            "serviceType": "Marketing Partnership",
            "description": "Strategic brand collaborations through gamification marketing"
        }
    };

    return (
        <>
        <Head>
                <title>Brand Partnership Opportunities | kGamify - Strategic Marketing Collaborations</title>
                <meta name="description" content="Partner with kGamify for innovative gamification marketing strategies. Drive audience engagement, boost brand visibility, and achieve measurable business growth through strategic collaborations." />
                <meta name="keywords" content="brand partnerships, gamification marketing, strategic collaborations, audience engagement, marketing partnerships, business growth, kGamify partnerships" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://kgamify.in/partnerships/brand" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Brand Partnership Opportunities | kGamify" />
                <meta property="og:description" content="Transform your marketing approach with kGamify's strategic brand partnerships. Amplify engagement and drive growth through innovative gamification." />
                <meta property="og:url" content="https://kgamify.in/partnerships/brand" />
                <meta property="og:site_name" content="kGamify" />
                <meta property="og:image" content="/brand_partnership_hero.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="kGamify Brand Partnership Opportunities" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Brand Partnership Opportunities | kGamify" />
                <meta name="twitter:description" content="Transform your marketing with kGamify's strategic brand partnerships. Drive engagement through innovative gamification strategies." />
                <meta name="twitter:image" content="/brand_partnership_hero.png" />
                
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-orange-50">
                <div className="container mx-auto grid gap-8 px-4 py-6 md:grid-cols-2">
                    <div className="flex flex-col justify-center w-full h-full">
                        <h1 className="mb-4 text-5xl font-bold text-gray-900 leading-tight">Powering Growth Through Meaningful Partnerships</h1>
                        <p className="mb-6 text-gray-700">
                        Discover how strategic brand collaborations with kGamify can transform your marketing approach, amplify audience engagement, and drive measurable business growth through innovative gamification strategies.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <Link
                                href="/contacts"
                                className="rounded-md bg-orange-500 px-6 py-3 text-center font-medium text-white transition hover:bg-orange-600"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:relative md:flex items-center justify-center w-full h-full">
                        <div className="relative w-full h-full">
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-50/70 to-transparent z-10"></div> */}
                            <img
                                src="/brand_partnership_hero.png"
                                alt="Brand partnerships illustration"
                                width={500}
                                height={400}
                                className="object-contain relative z-0 h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-12">
                <PartnershipOpportunities/>
            </section>

            <section className="container m-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                Roles and Responsibilities
            </h2>

            <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl m-auto gap-8 items-start">
                
                {/* kGamify Box */}
                <div className="flex flex-col justify-start py-6 px-4 rounded-lg border border-orange-100 w-full max-w-md mx-auto">
                <h3 className="text-3xl text-center font-bold">kGamify</h3>
                <ul className="space-y-6 mt-6">
                    <li className="flex gap-4 items-center min-h-[64px]" id="kA">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Create and manage the championship.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="kB">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Provide in-app advertising and promotion.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="kC">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Track performance metrics and share reports with the partner brand.</span>
                    </li>
                </ul>
                </div>

                {/* Partner Brands Box */}
                <div className="flex flex-col justify-start py-6 px-4 rounded-lg border border-orange-100 w-full max-w-md mx-auto">
                <h3 className="text-3xl text-center font-bold">Partner Brands</h3>
                <ul className="space-y-6 mt-6">
                    <li className="flex gap-4 items-center min-h-[64px] ju" id="pA">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Offer agreed-upon discount or reward.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="pB">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Ensure seamless reward redemption at physical stores or online.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="pC">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Collaborate on marketing and promotion activities.</span>
                    </li>
                </ul>
                </div>

                {/* Xarrow Connections */}
                <div className="hidden md:block">
                <Xarrow start="pA" end="kA" tailShape="circle" headShape="circle" headSize={3} showTail={true} tailSize={3} lineColor="orange" headColor="orange" tailColor="orange"/>
                <Xarrow start="pB" end="kB" tailShape="circle" headShape="circle" headSize={3} showTail={true} tailSize={3} lineColor="orange" headColor="orange" tailColor="orange"/>
                <Xarrow start="pC" end="kC" tailShape="circle" headShape="circle" headSize={3} showTail={true} tailSize={3} lineColor="orange" headColor="orange" tailColor="orange"/>
                </div>
            </div>
            </section>

            <section className="container mx-auto px-4 py-12 text-center items-center">
                <h2 className="text-3xl font-semibold mb-6">Begin Your Talent Revolution Today</h2>
                <p className="mb-4 max-w-4xl m-auto">Ready to revolutionize how you discover and engage top talent? Reach out to learn about our comprehensive partnership solutions designed to amplify your recruitment outcomes and organizational growth.</p>
                <Link href="/contacts" className="inline-block rounded-md bg-orange-500 px-6 py-3 text-center font-medium text-white transition hover:bg-orange-600">
                    Become a Partner
                </Link>
            </section>
        </div>
        </>
    );
}