import Image from "next/image"
import Link from "next/link"

export default function MobileAppGalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <Link
                href="/gallery/mobile-app"
                className="border-b-2 border-orange-500 px-1 pb-4 text-center font-medium text-orange-500"
              >
                Mobile app
              </Link>
              <Link
                href="/gallery?tab=users"
                className="border-b-2 border-transparent px-1 pb-4 text-center font-medium text-blue-500 hover:border-blue-500 hover:text-blue-600"
              >
                Users
              </Link>
            </nav>
          </div>
        </div>

        {/* App Screenshots Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">App Interface Gallery</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Explore the intuitive and engaging interface of the kGamify mobile application, designed to make learning
            fun and effective.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Screenshot 1 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="kGamify Login Screen"
                width={300}
                height={600}
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Login Screen</h3>
                <p className="text-sm">Simple and secure authentication</p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="kGamify Dashboard"
                width={300}
                height={600}
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Dashboard</h3>
                <p className="text-sm">Personalized learning dashboard</p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="kGamify Leaderboard"
                width={300}
                height={600}
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Leaderboard</h3>
                <p className="text-sm">Competitive rankings and achievements</p>
              </div>
            </div>

            {/* Screenshot 4 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="kGamify Quiz Interface"
                width={300}
                height={600}
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Quiz Interface</h3>
                <p className="text-sm">Interactive learning challenges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Feature Highlights</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Personalized Learning Paths"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-transparent flex items-center">
                  <div className="p-6 text-white max-w-xs">
                    <h3 className="text-xl font-bold mb-2">Personalized Learning Paths</h3>
                    <p className="text-sm">Adaptive content that adjusts to your skill level and learning style</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Real-time Competitions"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-transparent flex items-center">
                  <div className="p-6 text-white max-w-xs">
                    <h3 className="text-xl font-bold mb-2">Real-time Competitions</h3>
                    <p className="text-sm">Compete with peers globally in live challenges and tournaments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Progress Analytics"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-transparent flex items-center">
                  <div className="p-6 text-white max-w-xs">
                    <h3 className="text-xl font-bold mb-2">Progress Analytics</h3>
                    <p className="text-sm">Detailed insights into your learning journey with visual reports</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Reward System"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-transparent flex items-center">
                  <div className="p-6 text-white max-w-xs">
                    <h3 className="text-xl font-bold mb-2">Reward System</h3>
                    <p className="text-sm">Earn badges, certificates, and real-world rewards for your achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Demo Video */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">App Demo</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative pt-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-orange-500 mb-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  <p className="text-gray-600">App Demo Video</p>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-2">See kGamify in Action</h3>
              <p className="text-gray-600">
                Watch our demo video to see how kGamify transforms learning through gamification
              </p>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience kGamify?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Download our app today and start your journey to more engaging, effective, and rewarding learning.
          </p>
          <Link
            href="/download"
            className="inline-block rounded-md bg-orange-500 px-8 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Download Now
          </Link>
        </div>
      </div>
    </div>
  )
}
