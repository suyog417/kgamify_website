"use client"

const features = [
  {
    image: "/vectors/championships.png",
    alt: "Championships Illustration",
    title: "Championships",
    description:
      "kGamify’s assessment system is built around challenging and engaging question formats that test real-world problem-solving skills. The questions dynamically adjust based on the user’s current performance.",
    points: [
      "You will apply your learned concepts to answer questions",
      "Compare your performance across global subjects",
      "Expert-reviewed subjective answers for accurate evaluation",
      "Adaptive questioning based on your performance",
    ],
  },
  {
    image: "/vectors/analytics.png",
    alt: "Analytics Illustration",
    title: "Analytics",
    description:
      "Our analytics feature empowers users with a clear understanding of their progress and capabilities through detailed performance charts and personalized suggestions.",
    points: [
      "Download k-Chart for comprehensive performance visualization",
      "Compare performance across different subjects",
      "Receive personalized improvement suggestions",
      "Track progress with evolving AI algorithms",
    ],
  },
  {
    image: "/vectors/value_addition.png",
    alt: "Value Addition Illustration",
    title: "Value Addition",
    description:
      "Beyond championships and assessments, kGamify offers career-boosting opportunities such as internships, jobs, scholarship guidance, and resume building tools.",
    points: [
      "Exclusive internship and job opportunities",
      "Scholarship information and application assistance",
      "Resume building tools and portfolio storage",
      "Earn through question contributions and hosting assessments",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
          Platform Features
        </h2>
        {/* Cards grid */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="flex-1 bg-white rounded-2xl shadow-lg border-t-4 border-orange-400 p-8 flex flex-col items-center"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="h-24 mb-6"
              />
              <h3 className="text-xl font-bold mb-3 text-orange-500">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-5">{feature.description}</p>
              <ul className="text-gray-800 text-left space-y-3 w-full max-w-xs mx-auto">
                {feature.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-violet-600 mr-2 mt-0.5">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
