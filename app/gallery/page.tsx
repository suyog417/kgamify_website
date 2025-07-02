"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"
import Head from "next/head"

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

const screens = [
  {
    src: "/app_screenshots/screens/screen_1.jpg",
    title: "Play. Win. Conquer. Championships await",
    description: "Explore content that matches your mood and passion!",
  },
  {
    src: "/app_screenshots/screens/screen_2.jpg",
    title: "Analyze. Improve. Succeed. Your journey starts here!",
    description: "Climb the ranks & claim your spot on the leaderboard!",
  },
  {
    src: "/app_screenshots/screens/screen_3.jpg",
    title: "Every game is a chance to win awesome prizes!",
    description: "The game never stops-ready for another round?",
  },
  {
    src: "/app_screenshots/screens/screen_4.jpg",
    title: "Build your unique profile & stand out!",
    description: "Select your interests to make your experience truly yours!",
  },
]

export default function ScrollDeviceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const screenRefs = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const deviceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !deviceRef.current) return

    // Device floating animation (significantly slowed down)
    if (deviceRef.current) {
      gsap.to(deviceRef.current, {
        y: -20,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })
    }

    screenRefs.current.forEach((el, index) => {
      if (!el) return

      gsap.set(el, {
        autoAlpha: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 0.95,
        rotationY: index === 0 ? 0 : 15,
      })

      const textEl = textRefs.current[index]
      if (textEl) {
        gsap.set(textEl, {
          autoAlpha: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 30,
        })
      }

      ScrollTrigger.create({
        trigger: deviceRef.current, // Use device as trigger instead of container
        start: 0, // Start when device top is 100px from bottom of viewport
        end: 2000, // End when device bottom is 100px from top of viewport
        scrub: 4, // Remove scrub for more precise control

        // Create individual triggers for each screen based on scroll progress
        onUpdate: (self) => {
          const progress = self.progress
          const screenProgress = progress * screens.length
          const currentScreen = Math.floor(screenProgress)
          const screenTransition = screenProgress - currentScreen

          // Only animate when device is fully visible
          if (self.isActive) {
            // Handle current screen
            if (currentScreen === index) {
              const opacity = Math.min(1, (1 - screenTransition) + 0.3)
              const scale = 0.95 + (0.05 * opacity)

              gsap.to(el, {
                autoAlpha: opacity,
                scale: scale,
                rotationY: (1 - opacity) * 15,
                duration: 0.3,
                ease: "power1.out",
              })

              if (textEl) {
                gsap.to(textEl, {
                  autoAlpha: opacity,
                  y: (1 - opacity) * 30,
                  duration: 0.3,
                  ease: "power1.out",
                })
              }
            }
            // Handle next screen
            else if (currentScreen + 1 === index && screenTransition > 0.3) {
              const opacity = Math.min(1, (screenTransition - 0.3) / 0.7)
              const scale = 0.95 + (0.05 * opacity)

              gsap.to(el, {
                autoAlpha: opacity,
                scale: scale,
                rotationY: (1 - opacity) * -15,
                duration: 0.3,
                ease: "power1.out",
              })

              if (textEl) {
                gsap.to(textEl, {
                  autoAlpha: opacity,
                  y: (1 - opacity) * 30,
                  duration: 0.3,
                  ease: "power1.out",
                })
              }
            }
            // Hide other screens
            else {
              gsap.to(el, {
                autoAlpha: 0,
                scale: 0.95,
                rotationY: index < currentScreen ? -15 : 15,
                duration: 0.3,
                ease: "power1.out",
              })

              if (textEl) {
                gsap.to(textEl, {
                  autoAlpha: 0,
                  y: index < currentScreen ? -30 : 30,
                  duration: 0.3,
                  ease: "power1.out",
                })
              }
            }
          }
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
    <Head>
    <title>kGamify Gallery | Mobile App Screenshots & Interface Preview</title>
    <meta
        name="description"
        content="Explore the kGamify mobile app through our visual gallery. View screenshots of gameplay, challenges, rewards, and user interface highlights."
    />
    <meta
        name="keywords"
        content="kGamify app screenshots, kGamify gallery, gamification app UI, mobile app design, app interface, gameplay preview, kGamify visuals"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://kgamify.in/gallery" />

    {/* Open Graph */}
    <meta property="og:title" content="kGamify Gallery | Mobile App Screenshots" />
    <meta
        property="og:description"
        content="Preview the kGamify app through a curated gallery of mobile screenshots. See how gamification transforms learning and engagement."
    />
    <meta property="og:url" content="https://kgamify.in/gallery" />
    <meta property="og:site_name" content="kGamify" />
    <meta property="og:image" content="/gallery_preview.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="kGamify Mobile App Screenshots Gallery" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="kGamify Gallery | Mobile App Screenshots" />
    <meta
        name="twitter:description"
        content="Browse the kGamify mobile app interface and features through high-quality screenshots. See what makes it a fun, engaging experience."
    />
    {/* <meta name="twitter:image" content="/gallery_preview.png" /> */}

    {/* Structured Data */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ImageGallery",
                "name": "kGamify Mobile App Gallery",
                "url": "https://kgamify.in/gallery",
                "description": "A collection of screenshots showcasing kGamify’s mobile interface, gameplay, rewards, and leaderboard features.",
                "image": [
                    "https://kgamify.in/app_screenshots/screens/screen_1.jpg",
                    "https://kgamify.in/app_screenshots/screens/screen_2.jpg",,
                    "https://kgamify.in/app_screenshots/screens/screen_3.jpg",
                    "https://kgamify.in/app_screenshots/screens/screen_4.jpg",
                ]
            })
        }}
    />
</Head>

    <div className="">
      {/* Device Showcase Section */}
      <section className="relative h-[200vh] md:h-[300vh]">
        <div ref={containerRef} className="sticky top-0 h-screen flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-xl md:blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-xl md:blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between gap-4 md:gap-16 max-w-7xl mx-auto w-full pt-8 md:pt-0">
            {/* Text Content - Aligned to top on mobile */}
            <div className="flex-1 w-full md:max-w-md text-center md:text-left mt-4 md:mt-0">
              {screens.map((screen, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    textRefs.current[i] = el
                  }}
                  className="absolute opacity-0 px-4 md:px-0 w-full"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 mb-2 md:mb-4 max-w-4xl">{screen.title}</h2>
                  <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 md:mb-6">{screen.description}</p>
                  <div className="hidden md:flex items-center gap-2 text-xs sm:text-sm text-gray-400 justify-center md:justify-start">
                    <span className="w-8 h-1 bg-gradient-to-r from-orange-400 to-orange-400 rounded-full" />
                    <span>
                      Step {i + 1} of {screens.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Device - Centered below text on mobile */}
            <div className="flex-shrink-0 w-full md:w-auto md:ml-auto flex justify-center md:block mt-32 md:mt-0">
              <div ref={deviceRef} className="relative w-[250px] h-[500px] sm:w-[280px] sm:h-[560px] md:w-[320px] md:h-[640px] mx-auto">
                {/* Device Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-1 sm:p-1.5 md:p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 sm:w-24 sm:h-5 md:w-32 md:h-6 bg-black rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl z-20" />

                    {/* Screen Content */}
                    <div className="relative w-full h-full">
                      {screens.map((screen, i) => (
                        <div
                          key={i}
                          ref={(el) => {
                            screenRefs.current[i] = el
                          }}
                          className="absolute inset-0 opacity-0"
                        >
                          <Image
                            src={screen.src || "/placeholder.svg"}
                            alt={screen.title}
                            fill
                            className="object-cover"
                            priority={i === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-orange-200/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] blur-md sm:blur-lg md:blur-xl -z-10 scale-105 md:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
    
  )
}
