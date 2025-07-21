export default function ChampionshipFeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-50">
        <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Championship Features</h1>
            <p className="mb-6 text-gray-700">
              Our platform offers a comprehensive suite of tools and opportunities designed to maximize your championship experience.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-50/70 to-transparent z-10"></div>
              <img
                src="/championship-features.svg"
                alt="Championship features illustration"
                width={300}
                height={300}
                className="h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-6">Key Features</h2>
        <ul className="space-y-4">
          <li>Real-time leaderboards</li>
          <li>Customizable challenges</li>
          <li>Interactive user profiles</li>
          <li>Social sharing capabilities</li>
          <li>Comprehensive analytics dashboard</li>
        </ul>
      </section>
    </div>
  );
}