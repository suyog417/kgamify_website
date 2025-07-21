import RolesAndResponsibility from "@/components/partnership-components/RolesAndResponsibility";
import PartnershipOpportunities from "@/components/reusable-components/partnership-opportunities";
import { SquareCheckBig } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Xarrow from "react-xarrows";

export const metadata = {
    title: "Brand Partnership Opportunities | kGamify - Strategic Marketing Collaborations",
    description: "Partner with kGamify for innovative gamification marketing strategies. Drive audience engagement, boost brand visibility, and achieve measurable business growth through strategic collaborations.",
    keywords: "brand partnerships, gamification marketing, strategic collaborations, audience engagement, marketing partnerships, business growth, kGamify partnerships",
    openGraph: {
      title: "Brand Partnership Opportunities | kGamify",
      description: "Transform your marketing approach with kGamify's strategic brand partnerships. Amplify engagement and drive growth through innovative gamification.",
      url: "https://kgamify.in/partnerships/brand",
      siteName: "kGamify",
      images: [
        {
          url: "/brand_partnership_hero.png",
          width: 1200,
          height: 630,
          alt: "kGamify Brand Partnership Opportunities"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Brand Partnership Opportunities | kGamify",
      description: "Transform your marketing with kGamify's strategic brand partnerships. Drive engagement through innovative gamification strategies.",
      images: ["/brand_partnership_hero.png"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: "https://kgamify.in/partnerships/brand"
    }
  };

export default function BrandPartnershipPage() {
    

    return (
        <>
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

            <RolesAndResponsibility/>

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