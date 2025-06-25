import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <Link
                href="/gallery?tab=mobile"
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

        {/* Mobile App Gallery */}
        <div>
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">kGamify Mobile App Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore screenshots of our mobile application and discover the features that make learning engaging and rewarding.
            </p>
          </div>

          {/* Featured Screenshot */}
          <div className="mb-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Leaderboards</h2>
                  <p className="text-gray-700 mb-6">
                    Track your progress and compete with friends through our dynamic leaderboard system. See real-time rankings, points earned, and performance metrics across different subjects and challenges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-orange-500">•</div>
                      <span className="text-gray-700">Real-time ranking updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-orange-500">•</div>
                      <span className="text-gray-700">Detailed performance metrics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-orange-500">•</div>
                      <span className="text-gray-700">Subject-specific leaderboards</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-200 rounded-full opacity-50"></div>
                  <div className="relative z-10 flex justify-center">
                    <div className="bg-black rounded-3xl p-3 w-64 shadow-lg">
                      <div className="rounded-2xl overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=600&width=300"
                          alt="kGamify Leaderboard Screen"
                          width={300}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshots Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Screenshot 1 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="p-4">
                <div className="bg-black rounded-2xl p-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    alt="Home Screen"
                    width={200}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Home Screen</h3>
                <p className="text-sm">Personalized dashboard with recommended challenges</p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="p-4">
                <div className="bg-black rounded-2xl p-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    alt="Challenge Screen"
                    width={200}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Challenge Screen</h3>
                <p className="text-sm">Interactive quiz with real-time feedback</p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="p-4">
                <div className="bg-black rounded-2xl p-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    alt="Profile Screen"
                    width={200}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Profile Screen</h3>
                <p className="text-sm">Track achievements and personal progress</p>
              </div>
            </div>

            {/* Screenshot 4 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="p-4">
                <div className="bg-black rounded-2xl p-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    alt="Rewards Screen"
                    width={200}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Rewards Screen</h3>
                <p className="text-sm">Browse and redeem earned rewards</p>
              </div>
            </div>

            {/* Screenshot 5 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="p-4">
                <div className="bg-black rounded-2xl p-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    alt="Analytics Screen"
                    width={200}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Analytics Screen</h3>
                <p className="text-sm">Detailed performance insights and statistics</p>
              </div>
            </div>

            {/* Screenshot 6 */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="p-4">
                <div className="bg-black rounded-2xl p-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    alt="Settings Screen"
                    width={200}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <h3 className="font-bold">Settings Screen</h3>
                <p className="text-sm">Customize app preferences and settings</p>
              </div>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Download kGamify Today</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Available on both iOS and Android platforms. Start your gamified learning journey now!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="inline-block">
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={54}
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={70}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}