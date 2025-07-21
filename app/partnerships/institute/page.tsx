'use client';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function InstitutePartnershipPage() {
    return (
        <>
        <Head>
    <title>Institute Partnership Opportunities | kGamify - Empower Your Students</title>
    <meta
        name="description"
        content="Partner with kGamify to empower your students through gamified learning championships. Enhance engagement, foster healthy competition, and unlock real-world opportunities for your institute."
    />
    <meta
        name="keywords"
        content="institute partnerships, educational collaboration, student engagement, gamified learning, kGamify for schools, colleges, universities, academic partnerships"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://kgamify.in/partnerships/institutes" />

    {/* Open Graph */}
    <meta property="og:title" content="Institute Partnership Opportunities | kGamify" />
    <meta
        property="og:description"
        content="Join hands with kGamify to bring competitive learning to your institute. Inspire students through interactive tournaments, leaderboards, and career-linked rewards."
    />
    <meta property="og:url" content="https://kgamify.in/partnerships/institutes" />
    <meta property="og:site_name" content="kGamify" />
    <meta property="og:image" content="/institute_partnership_hero.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="kGamify Institute Partnerships" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Institute Partnership Opportunities | kGamify" />
    <meta
        name="twitter:description"
        content="Partner with kGamify to provide gamified academic experiences. Boost engagement, build leadership, and reward top talent in your institute."
    />
    <meta name="twitter:image" content="/institute_partnership_hero.png" />

    {/* Structured Data */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Institute Partnership Opportunities | kGamify",
                "url": "https://kgamify.in/partnerships/institutes",
                "description":
                    "kGamify collaborates with institutes to bring competitive, gamified learning experiences. Join us to motivate students and promote academic excellence.",
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
            <div className="bg-orange-50">
                <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2">
                    <div className="flex flex-col justify-center h-full w-full">
                        <h1 className="mb-4 text-5xl font-bold text-gray-900 leading-tight">Transforming Learning in Institutes and Colleges</h1>
                        <p className="mb-6 text-gray-700 ">
                        Revolutionize your institution's academic outcomes by leveraging game-based learning strategies that dramatically increase student engagement, improve retention rates, and elevate overall academic performance across all programs.
                        </p>
                    </div>
                    <div className="hidden md:relative md:flex items-center justify-center">
                        <div className="relative">
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-50/70 to-transparent z-10"></div> */}
                            <Image
                                src="/vectors/Home_Illustrations.svg"
                                alt="Educational rewards illustration"
                                width={500}
                                height={400}
                                className="object-contain relative z-0 h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            {/* <section className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-semibold mb-6">Our Institute Partners</h2>
                <div className="gap-4 flex flex-col max-w-xs m-auto">
                    <Image
                        src="https://www.viit.ac.in/images/logo.png"
                        alt="VIIT Logo"
                        width={96}
                        height={96}
                        className="object-contain relative z-0 m-auto"
                    />
                    <p>Vishwakarma Institute of Information Technology, Pune</p>
                </div>

            </section> */}


            <section className="container mx-auto px-4 py-12 text-center items-center">
                <h2 className="text-3xl font-semibold mb-6">Who can benefit?</h2>
                <p className="mb-4">kGamify unites educators, students, clubs, and admins with one powerful, interactive learning platform.</p>

                <div className="grid md:grid-cols-2 gap-4 max-w-6xl m-auto text-left">
                    {/* For Teachers */}
                    <div className="bg-orange-100 rounded-lg p-6 relative overflow-hidden">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">For Teachers</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">An Intuitive Dashboard Anyone Can Use</span>
                                    <span className="text-gray-600"> - No Technical Knowledge Required</span>

                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Interactive teaching</span>
                                    <span className="text-gray-600"> - Engage students with quizzes, polls & challenges</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Track & Reward progress</span>
                                    <span className="text-gray-600"> - Monitor learning and motivate with credits and rankings</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="justify-self-end">
                            <div className="w-20 h-16 bg-orange-300 rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* For Students */}
                    <div className="bg-orange-100 rounded-lg p-6 relative overflow-hidden">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">For Students</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Gamified Learning</span>
                                    <span className="text-gray-600"> - Lessons become fun with levels, challenges & instant rewards</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Motivating Competition</span>
                                    <span className="text-gray-600"> - Leaderboards & contests that push students to excel</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Career Ready</span>
                                    <span className="text-gray-600"> - Build resumes & gain visibility for jobs and internships</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="">
                            <div className="w-20 h-16 bg-orange-300 rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* For Clubs */}
                    <div className="bg-orange-100 rounded-lg p-6 relative overflow-hidden items">
                        {/* <div className="justify-self-end mb-2">
                            <div className="w-20 h-16 bg-blue-400 rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-orange-700 rounded-sm"></div>
                                </div>
                                </div>
                                </div> */}
                        
                                <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">For College Clubs</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800 text-center">Collaborate & Compete</span>
                                    <span className="text-gray-600"> - Connect with other clubs through events and games</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Host Big Events</span>
                                    <span className="text-gray-600"> - Run exciting, gamified campus-wide activities & hackathons</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Grow & Get Noticed</span>
                                    <span className="text-gray-600"> - Build member skills and boost club visibility</span>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    {/* For Administration */}
                    <div className="bg-orange-100 rounded-lg p-6 relative overflow-hidden">
                        {/* <div className="mb-2">
                            <div className="w-20 h-16 bg-orange-300 rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-800 rounded-sm"></div>
                                </div>
                            </div>
                        </div> */}
                        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">For Administration</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800 ">Data-Driven Insights</span>
                                    <span className="text-gray-600"> - Visualize student performance and teaching effectiveness</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Smarter Systems</span>
                                    <span className="text-gray-600"> - Enable digital learning, gamified assessments & automation</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-gray-800">Better Outcomes</span>
                                    <span className="text-gray-600"> - Boost placements, support faculty growth & student success</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 text-center items-center">
                <h2 className="text-3xl font-semibold mb-6">Begin Your Talent Revolution Today</h2>
                <p className="mb-4 max-w-5xl m-auto">Ready to revolutionize how you discover and engage top talent? Reach out to learn about our comprehensive partnership solutions designed to amplify your recruitment outcomes and organizational growth.</p>
                <Link href="/contacts" className="inline-block rounded-md bg-orange-500 px-6 py-3 text-center font-medium text-white transition hover:bg-orange-600">
                    Contact Us
                </Link>
            </section>
        </div>
        </>
    );
}