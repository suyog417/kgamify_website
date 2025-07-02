import CorporateHeroSection from "@/components/reusable-components/corporate-hero";
import { BadgeCheck, BarChart3, ActivitySquare, Timer, Shuffle } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function CorporatePartnershipPage() {
    return (
        <>
        <Head>
    <title>Corporate Partnership Opportunities | kGamify - Engage Talent Through Gamification</title>
    <meta
        name="description"
        content="Partner with kGamify to engage future talent, promote your brand, and drive recruitment through gamified learning experiences and campus challenges."
    />
    <meta
        name="keywords"
        content="corporate partnerships, employer branding, gamified hiring, campus challenges, recruitment solutions, kGamify for business, talent engagement, educational gamification"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://kgamify.in/partnerships/corporate" />

    {/* Open Graph */}
    <meta property="og:title" content="Corporate Partnership Opportunities | kGamify" />
    <meta
        property="og:description"
        content="Explore strategic corporate partnerships with kGamify. Drive talent engagement, build brand visibility, and recruit top-performing students through gamified competitions."
    />
    <meta property="og:url" content="https://kgamify.in/partnerships/corporate" />
    <meta property="og:site_name" content="kGamify" />
    {/* <meta property="og:image" content="/corporate_partnership_hero.png" /> */}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="kGamify Corporate Partnership Opportunities" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Corporate Partnership Opportunities | kGamify" />
    <meta
        name="twitter:description"
        content="Partner with kGamify to tap into student talent, host branded challenges, and build future-ready recruitment funnels using gamification."
    />
    {/* <meta name="twitter:image" content="/corporate_partnership_hero.png" /> */}

    {/* Structured Data */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Corporate Partnership Opportunities | kGamify",
                "url": "https://kgamify.in/partnerships/corporate",
                "description":
                    "Corporate partners collaborate with kGamify to engage top student talent, promote employer branding, and run innovative recruitment campaigns through gamified competitions.",
                "publisher": {
                    "@type": "Organization",
                    "name": "kGamify",
                    "url": "https://kgamify.in"
                }
            })
        }}
    />
</Head>

        <div className=" bg-gray-50">
            {/* Hero Section */}
            <div className="bg-orange-50 ">
                <div className="hidden lg:block"><CorporateHeroSection /></div>

                <div className="block lg:hidden py-12 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 py-8 leading-tight">Revolutionize Recruitment Through Gamified Excellence</h1>
                    <Link
                        href="/contacts"
                        className="rounded-md bg-orange-500 px-6 py-3 text-center font-medium text-white transition hover:bg-orange-600"
                    >
                        Become a Partner
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-4xl font-semibold mb-6 "><span className="text-orange-500">Showcase</span> Your Company, <span className="text-orange-500">Attract</span> the Best!</h2>
                <p className="text-gray-800 max-w-5xl text-center m-auto">Partner with kGamify to reinvent your hiring strategy by aligning your brand with innovation, competition, and real talent. Through our gamified quiz platform, you can sponsor domain-specific championships and connect with thousands of high-intent college students actively seeking opportunities.
                </p>
                <br />
                <p className="text-gray-800 max-w-5xl text-center m-auto">Position your brand at the heart of talent engagement, unlock top-tier candidate pools, and offer exciting rewards like internships, project mentorships, or scholarships. Build strong employer branding and discover job-ready candidates already pre-assessed by real-time performance data.
                </p>
            </section>

            <section className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold mb-12 text-center">
                    Why HR Leaders and Industries Choose <span className="text-orange-500">kGamify</span>?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-start gap-4">
                        <BadgeCheck className="text-orange-500 w-36 h-36 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Access to Pre-Assessed, Domain-Specific Talent</h3>
                            <p className="text-gray-700">
                                Gain access to students who have already demonstrated their subject expertise in curated quizzes and competitive challenges. No more generic resumes — get a direct look at performance-backed profiles via their Knowledge Growth Cards.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-start gap-4">
                        <BarChart3 className="text-orange-500 w-36 h-36 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Data-Driven Hiring Made Easy</h3>
                            <p className="text-gray-700">
                                Make confident hiring decisions based on metrics that matter. Our platform delivers detailed quiz analytics, leaderboard ranks, accuracy stats, and participation scores that reflect real-world aptitude and skills.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-start gap-4">
                        <ActivitySquare className="text-orange-500 w-36 h-36 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Efficient, Bias-Free Screening</h3>
                            <p className="text-gray-700">
                                Replace outdated interviews with interactive, gamified assessments tailored to your industry. Whether you're looking for problem solvers, creatives, or strategists — our leaderboard-based challenges help you evaluate talent quickly and fairly.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-start gap-4">
                        <Timer className="text-orange-500 w-36 h-36 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Reduce Time & Cost to Hire</h3>
                            <p className="text-gray-700">
                                Streamline your recruitment funnel by directly engaging with the top performers of subject-specific championships. kGamify saves you time and hiring effort while enhancing your brand reputation on college campuses.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white shadow-md p-6 rounded-lg flex items-start gap-4">
                        <Shuffle className="text-orange-500 w-36 h-36 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Brand Recall Through Engagement</h3>
                            <p className="text-gray-700">
                            From quiz branding and reward co-sponsorships to in-app placements and challenge creation — your brand stays visible where students are most engaged. Become a household name among high-performing, career-focused learners.
                            </p>
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
