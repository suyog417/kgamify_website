import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { Card, CardContent, } from "@/components/ui/card"
import { Gamepad2, PuzzleIcon, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "kGamify | Compete. Learn. Win.",
  description:
    "kGamify turns learning into competition! Join quiz championships, earn rewards, and unlock real-world opportunities. Engage students with gamified education.",
  keywords: [
    "kGamify",
    "gamified learning",
    "quiz competitions",
    "student engagement",
    "educational tournaments",
    "earn rewards",
    "gamification",
    "edtech",
    "kGamify app",
  ],
  alternates: {
    canonical: "https://kgamify.in/",
  },
  openGraph: {
    title: "kGamify | Compete. Learn. Win.",
    description:
      "Experience the future of learning with kGamify. Compete in live quizzes, climb leaderboards, and earn career rewards through gamification.",
    url: "https://kgamify.in/",
    siteName: "kGamify",
    images: [
      {
        url: "/landing_preview.png",
        width: 1200,
        height: 630,
        alt: "kGamify - Compete. Learn. Win.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "kGamify | Compete. Learn. Win.",
    description:
      "Gamify your learning journey with kGamify. Compete in quiz tournaments, win rewards, and unlock your potential.",
    images: ["/landing_preview.png"],
  },
};


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="absolute top-1/4 left-1/4 w-64 h-48 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-xl md:blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-48 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-xl md:blur-3xl animate-pulse delay-1000" />
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl leading-tight">Compete, Conquer, and Collect Your Rewards</h1>
            <p className="mb-8 text-gray-700">
            Step into the arena of intellectual competition with kGamify's multi-field championships. Rise through the rankings while pursuing incredible prizes—from exclusive merchandise and learning discounts to life-changing scholarships and professional advancement opportunities. Where knowledge meets victory!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/download"
                className="rounded-md bg-orange-500 px-6 py-3 text-center font-medium text-white transition hover:bg-orange-600"
              >
                Get started for free
              </Link>
            </div>
          </div>
          <div className="hidden md:relative md:flex md:items-center md:justify-center">
            <div className="relative">
              <Image
                src="/vectors/Home_Illustrations.svg"
                alt="Educational rewards illustration"
                width={500}
                height={400}
                className="object-contain relative z-0 w-full h-full"
                // priority={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      {/* <section className="py-8 bg-gray-50">
        <div className="container mx-auto flex flex-col items-center px-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 text-center">See kGamify in Action</h2>
          <p className="mb-6 text-gray-600 text-center max-w-2xl">
            Watch our quick demo to discover how kGamify makes learning fun, competitive, and rewarding!
          </p>
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="kGamify Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}

      {/* Explore championship categories */}
      <section className="py-16 ">
        <div className="max-w-7xl self-center m-auto">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 text-center">Explore Championship Categories</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
          Discover interactive games across various subjects designed to make learning engaging and effective.
        </p>

         <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          <div className="bg-white rounded-3xl shadow-md p-2 w-full max-w-md text-gray-800 gap-4">
            <img src="/Home_Explore1.png" alt="Languages" />
            <h2 className="text-center pt-2 text-xl"><strong>Languages</strong></h2>
            <p className="text-center px-2 py-2">Learn new languages through interactive games and real-time conversations. Practice vocabulary, grammar, and speaking skills while having fun and earning rewards.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-2 w-full max-w-md text-gray-800">
            <img src="/Home_Explore2.png" alt="Home Science" />
            <h2 className="text-center pt-2 text-xl"><strong>Home Science</strong></h2>
            <p className="text-center px-2 py-2">Learn practical life skills in health, nutrition, and finance through fun, interactive challenges — and earn rewards as you play.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-2 w-full max-w-md text-gray-800">
            <img src="/Home_Explore3.png" alt="Academics" />
            <h2 className="text-center pt-2 text-xl"><strong>Academics</strong></h2>
            <p className="text-center px-2 py-2">Sharpen your academic skills across subjects through interactive quizzes and challenges. Compete, learn, and earn rewards while boosting your knowledge.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Why Choose <span className="text-orange-500">kGamify</span>?</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Experience the thrill of championships and win exciting rewards — fun and growth for everyone!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg bg-white p-8 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-8 -mt-8 z-0"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                      className="lucide lucide-trophy"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900">Championships</h3>
                <p className="text-center text-gray-600">
                  kGamify’s dynamic assessments test real-world problem-solving through scenario-based questions that adapt to your performance. Compete, get insights, and enjoy expert-personalized and fair challenges.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg bg-white p-8 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-8 -mt-8 z-0"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                      className="lucide lucide-bar-chart"
                    >
                      <line x1="12" x2="12" y1="20" y2="10" />
                      <line x1="18" x2="18" y1="20" y2="4" />
                      <line x1="6" x2="6" y1="20" y2="16" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900">Analytics</h3>
                <p className="text-center text-gray-600">
                  kGamify’s analytics provide clear insights into your performance and growth. Get detailed charts, compare scores across subjects, and receive AI-driven personalized suggestions to improve smarter and faster.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg bg-white p-8 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-8 -mt-8 z-0"></div>
              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
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
                      className="lucide lucide-award"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900">Value Addition</h3>
                <p className="text-center text-gray-600">
                  Win scholarships, discounts, internships, and more! Every championship you participate in adds value to your academic and career journey while having loads of fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How to start your journey */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              How to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow a structured path to master new skills with achievements and milestones along the way. Transform
              your learning experience through gamification.
            </p>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1M+</div>
              <div className="text-sm text-gray-600">Achievements</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Game Modes</div>
            </div>
          </div> */}

          {/* Journey Steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400 hidden md:block"></div>

            <div className="space-y-12 md:space-y-24">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl mr-4">
                          <Gamepad2 className="h-8 w-8 text-white" />
                        </div>
                        <Badge className="bg-orange-100 text-orange-700">Step 1</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Create an Account</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Just enter your phone number to sign up for free. Complete your profile anytime to get validated and earn extra free coins.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 order-3 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 order-3 md:order-1 hidden md:block"></div>
                <div className="relative order-1 md:order-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                  <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl mr-4">
                          <UserPlus className="h-8 w-8 text-white" />
                        </div>
                        <Badge className="bg-orange-100 text-orange-700">Step 2</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Select subject and game mode</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Select your subject and choose a game mode — start with Quick Hit to practice, then move on to Play & Win for exciting rewards!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl mr-4">
                          <PuzzleIcon className="h-8 w-8 text-white" />
                        </div>
                        <Badge className="bg-orange-100 text-orange-700">Step 3</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Read game info and start playing</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every subject and game mode offers unique challenges and rewards. Check out the game info and have fun putting your knowledge to the test
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 order-3 hidden md:block"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Transforming Education, One Champion at a Time</h2>
            <p className="mx-auto max-w-5xl text-gray-600">
            Read inspiring stories from our growing community of learners and educators who have unlocked new levels of academic achievement, career success, and teaching effectiveness through kGamify's competitive knowledge platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Success Story 1 */}
            <div className="rounded-lg bg-gray-50 p-8 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-6 -mt-6 opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-4 text-orange-500 text-4xl">"</div>
                <p className="mb-6 italic text-gray-700">
                  kGamify transformed how I study for exams. The competitive element made me practice more consistently,
                  and I improved my grades by 15% in just one semester!
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Priya Sharma"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Engineering Student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="rounded-lg bg-gray-50 p-8 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-6 -mt-6 opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-4 text-orange-500 text-4xl">"</div>
                <p className="mb-6 italic text-gray-700">
                  As a teacher, I've seen a dramatic increase in student engagement since implementing kGamify in my
                  classroom. Students who were previously disinterested are now actively participating.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Rajesh Patel"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Rajesh Patel</h4>
                    <p className="text-sm text-gray-600">High School Teacher</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="rounded-lg bg-gray-50 p-8 shadow-sm transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-6 -mt-6 opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-4 text-orange-500 text-4xl">"</div>
                <p className="mb-6 italic text-gray-700">
                  The scholarship I won through kGamify competitions helped fund my college education. The platform not
                  only made learning fun but also opened doors for my future.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Arjun Mehta"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Arjun Mehta</h4>
                    <p className="text-sm text-gray-600">College Freshman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-10 text-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
            >
              Read more success stories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to Transform Your Learning Experience?</h2>
            <p className="mb-8 text-lg text-gray-700">
              Join thousands of students who are already enjoying the benefits of gamified education with kGamify.
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
