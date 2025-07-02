"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Book,
  Users,
  Smartphone,
  Settings,
  Trophy,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react"
import Head from "next/head"

interface HelpArticle {
  id: string
  title: string
  category: string
  content: string
  tags: string[]
}

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All Topics", icon: Book, color: "bg-gray-100 text-gray-600" },
    { id: "getting-started", name: "Getting Started", icon: Users, color: "bg-blue-100 text-blue-600" },
    { id: "mobile-app", name: "Mobile App", icon: Smartphone, color: "bg-green-100 text-green-600" },
    { id: "account", name: "Account & Settings", icon: Settings, color: "bg-purple-100 text-purple-600" },
    { id: "competitions", name: "Competitions", icon: Trophy, color: "bg-orange-100 text-orange-600" },
  ]

  const helpArticles: HelpArticle[] = [
    {
      id: "1",
      title: "How to Create a kGamify Account: Step-by-Step Guide",
      category: "getting-started",
      content: `Looking to join kGamify? Follow these quick and easy steps to create your kGamify account and start your gamified learning journey today.\n\nThis guide will help you sign up and set up your profile in just a few minutes.\n\nStep 1: Visit the kGamify website\nStep 2: Click on 'Sign Up'\nStep 3: Fill in your details\nStep 4: Verify your email\nStep 5: Complete your profile setup\n\nOnce you've completed these steps, you'll have full access to all kGamify features and can start participating in championships and earning rewards.`,
      tags: ["account", "signup", "registration"],
    },
    {
      id: "2",
      title: "Downloading and Installing the Mobile App",
      category: "mobile-app",
      content: `Step-by-step guide to download and install kGamify on your Android or iOS device.<a href='/help/download-and-install-the-mobile-app'>Read More</a>`,
      tags: ["download", "install", "mobile", "android", "ios"],
    },
    {
      id: "3",
      title: "Understanding Your Dashboard",
      category: "getting-started",
      content: "Navigate your personalized dashboard and understand all the features available to you.",
      tags: ["dashboard", "navigation", "features"],
    },
    {
      id: "4",
      title: "Joining Your First Competition",
      category: "competitions",
      content: "Everything you need to know about participating in kGamify competitions and challenges.",
      tags: ["competition", "challenges", "participate"],
    },
    {
      id: "5",
      title: "Managing Your Profile Settings",
      category: "account",
      content: "Customize your profile, update personal information, and manage privacy settings.",
      tags: ["profile", "settings", "privacy", "personal"],
    },
    {
      id: "6",
      title: "Earning and Redeeming Rewards",
      category: "competitions",
      content: "Learn how to earn points, unlock achievements, and redeem rewards for your performance.",
      tags: ["rewards", "points", "achievements", "redeem"],
    },
    {
      id: "7",
      title: "Troubleshooting App Issues",
      category: "mobile-app",
      content: "Common solutions for app crashes, login problems, and performance issues.",
      tags: ["troubleshooting", "bugs", "crashes", "performance"],
    },
    {
      id: "8",
      title: "Syncing Progress Across Devices",
      category: "account",
      content: "How to sync your learning progress and achievements across multiple devices.",
      tags: ["sync", "devices", "progress", "cloud"],
    },
  ]

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "Is kGamify free to use?",
      answer:
        "Yes, kGamify offers a free tier with access to basic features and competitions. We also offer premium subscriptions with additional features, advanced analytics, and exclusive content.",
      category: "getting-started",
    },
    {
      id: "2",
      question: "What devices are supported?",
      answer:
        "kGamify is available on Android devices (6.0+), with iOS support coming soon. You can also access our platform through any modern web browser on desktop or mobile.",
      category: "mobile-app",
    },
    {
      id: "3",
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login screen, enter your email address, and follow the instructions sent to your email to reset your password.",
      category: "account",
    },
    {
      id: "4",
      question: "Can I participate in multiple competitions simultaneously?",
      answer:
        "Yes, you can join multiple competitions at the same time. However, some exclusive competitions may have participation limits or requirements.",
      category: "competitions",
    },
    {
      id: "5",
      question: "How are winners determined in competitions?",
      answer:
        "Winners are determined based on various factors including accuracy, speed, consistency, and overall performance. Each competition has specific scoring criteria explained in the competition details.",
      category: "competitions",
    },
    {
      id: "6",
      question: "What should I do if the app crashes?",
      answer:
        "First, try restarting the app. If the problem persists, check for app updates in your app store. If issues continue, please contact our support team with details about your device and the error.",
      category: "mobile-app",
    },
    {
      id: "7",
      question: "How do I delete my account?",
      answer:
        "To delete your account, go to Settings > Account > Delete Account. Please note that this action is irreversible and will permanently remove all your data and progress.",
      category: "account",
    },
    {
      id: "8",
      question: "Can I use kGamify offline?",
      answer:
        "Some features of kGamify work offline, including downloaded content and practice modes. However, competitions and real-time features require an internet connection.",
      category: "mobile-app",
    },
  ]

  const filteredArticles = helpArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
    <Head>
    <title>Help Center | kGamify - Support & FAQs</title>
    <meta
        name="description"
        content="Need help with kGamify? Visit our Help Center for answers to common questions, troubleshooting guides, and support resources."
    />
    <meta
        name="keywords"
        content="kGamify help center, support, FAQs, troubleshooting, customer support, gamification help, contact support, kGamify FAQs"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://kgamify.in/help-center" />

    {/* Open Graph */}
    <meta property="og:title" content="Help Center | kGamify" />
    <meta
        property="og:description"
        content="Find answers to your questions and get support for using kGamify. Access FAQs, how-to guides, and customer service help."
    />
    <meta property="og:url" content="https://kgamify.in/help-center" />
    <meta property="og:site_name" content="kGamify" />
    <meta property="og:image" content="/help_center_hero.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="kGamify Help Center" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Help Center | kGamify" />
    <meta
        name="twitter:description"
        content="Need help with kGamify? Explore our Help Center for answers to frequently asked questions and support articles."
    />
    <meta name="twitter:image" content="/help_center_hero.png" />

    {/* Structured Data */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How do I create a kGamify account?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can sign up for a kGamify account by visiting our sign-up page and filling in your details. Once verified, you’ll have access to our platform features."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I contact support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can reach our support team via the contact form on this page or by emailing support@kgamify.in."
                        }
                    }
                ]
            }),
        }}
    />
</Head>

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Help Center</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find answers to your questions, learn how to use kGamify effectively, and get the support you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none text-lg"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <div className="text-2xl font-bold text-orange-500">50+</div>
              <div className="text-sm text-gray-600">Help Articles</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <div className="text-2xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <div className="text-2xl font-bold text-orange-500">95%</div>
              <div className="text-sm text-gray-600">Issues Resolved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                    selectedCategory === category.id ? "bg-orange-500 text-white" : `${category.color} hover:opacity-80`
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Help Articles */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Help Articles
                  {searchQuery && (
                    <span className="text-lg font-normal text-gray-600 ml-2">
                      ({filteredArticles.length} results for "{searchQuery}")
                    </span>
                  )}
                </h2>

                {filteredArticles.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="text-gray-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or browse by category to find what you're looking for.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredArticles.map((article) => (
                      <div key={article.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                            {article.content}
                            <div className="flex flex-wrap gap-2">
                              {article.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ChevronRight className="text-gray-400 ml-4 mt-1" size={20} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                  {searchQuery && (
                    <span className="text-lg font-normal text-gray-600 ml-2">({filteredFAQs.length} results)</span>
                  )}
                </h2>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No FAQs match your search criteria.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq) => (
                      <div key={faq.id} className="bg-white rounded-lg shadow-sm">
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                        >
                          <h3 className="font-bold text-gray-900">{faq.question}</h3>
                          {expandedFAQ === faq.id ? (
                            <ChevronDown className="text-gray-400" size={20} />
                          ) : (
                            <ChevronRight className="text-gray-400" size={20} />
                          )}
                        </button>
                        {expandedFAQ === faq.id && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Support */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need More Help?</h3>
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Our support team is here to help you.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/contacts"
                    className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="text-orange-500" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Live Chat</div>
                      <div className="text-sm text-gray-600">Get instant help</div>
                    </div>
                  </Link>

                  <Link
                    href="mailto:support@kgamify.in"
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-gray-500" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email Support</div>
                      <div className="text-sm text-gray-600">support@kgamify.in</div>
                    </div>
                  </Link>

                  <Link
                    href="tel:+918879688067"
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-gray-500" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone Support</div>
                      <div className="text-sm text-gray-600">+91 8879688067</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Articles</h3>
                <div className="space-y-3">
                  {helpArticles.slice(0, 5).map((article) => (
                    <Link key={article.id} href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition">
                      <div className="font-medium text-gray-900 text-sm mb-1">{article.title}</div>
                      <div className="text-xs text-gray-600 capitalize">{article.category.replace("-", " ")}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Mobile App</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Web Platform</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Competitions</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">User Accounts</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Operational</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 mt-4"
                >
                  View Status Page <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with other kGamify users, share tips, and get help from our community of learners and educators.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Community Forum */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Forum</h3>
              <p className="text-gray-600 mb-4">
                Ask questions, share experiences, and learn from other kGamify users.
              </p>
              <Link href="#" className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600">
                Join Forum <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Video Tutorials */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step video guides to master kGamify features and tools.
              </p>
              <Link href="#" className="inline-flex items-center text-green-500 font-medium hover:text-green-600">
                Watch Videos <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature Requests */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Feature Requests</h3>
              <p className="text-gray-600 mb-4">
                Suggest new features and improvements to help us make kGamify even better.
              </p>
              <Link href="#" className="inline-flex items-center text-purple-500 font-medium hover:text-purple-600">
                Submit Ideas <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
    
  )
}
