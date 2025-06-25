import Image from "next/image"
import Link from "next/link"

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <Link
                href="/mobile-app"
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

        {/* Mobile App Showcase */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left relative z-10">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 z-0"></div>
            <div className="relative z-10">
              <h2 className="mb-4 text-xl font-bold text-orange-500">
                Discover new challenges and sharpen your skills!
              </h2>
              <p className="text-gray-600">Compete with friends, track your progress, and earn rewards as you learn.</p>
            </div>
          </div>

          <div className="relative mx-auto max-w-xs">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-200 rounded-full opacity-50"></div>
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="kGamify Mobile App Leaderboard"
              width={300}
              height={600}
              className="h-auto max-h-[600px] w-auto relative z-10"
            />
          </div>

          <div className="text-center md:text-right relative z-10">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 z-0"></div>
            <div className="relative z-10">
              <h2 className="mb-4 text-xl font-bold text-orange-500">Take on the world with your unique abilities!</h2>
              <p className="text-gray-600">Showcase your talents and climb the leaderboards in various subjects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
