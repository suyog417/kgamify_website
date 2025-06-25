"use client"

import PartnershipOpportunities from "@/components/reusable-components/partnership-opportunities";
// import { Button } from "@/components/ui/button";
import { SquareCheckBig } from "lucide-react";
import Link from "next/link";
import SteppedLineTo from 'react-lineto';
import Xarrow from "react-xarrows";

export default function BrandPartnershipPage() {
    return (
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
    );
}