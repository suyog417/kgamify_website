import ScrollDeviceShowcase from "./GalleryPageContent";

export const metadata = {
  title: "kGamify Gallery | Mobile App Screenshots & Interface Preview",
  description: "Explore the kGamify mobile app through our visual gallery. View screenshots of gameplay, challenges, rewards, and user interface highlights.",
  keywords: "kGamify app screenshots, kGamify gallery, gamification app UI, mobile app design, app interface, gameplay preview, kGamify visuals",
  robots: "index, follow",
  alternates: {
    canonical: "https://kgamify.in/gallery",
  },
  openGraph: {
    title: "kGamify Gallery | Mobile App Screenshots",
    description: "Preview the kGamify app through a curated gallery of mobile screenshots. See how gamification transforms learning and engagement.",
    url: "https://kgamify.in/gallery",
    siteName: "kGamify",
    images: [
      {
        url: "/gallery_preview.png",
        width: 1200,
        height: 630,
        alt: "kGamify Mobile App Screenshots Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "kGamify Gallery | Mobile App Screenshots",
    description: "Browse the kGamify mobile app interface and features through high-quality screenshots. See what makes it a fun, engaging experience.",
    images: ["/gallery_preview.png"], // Added based on standard practice
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "kGamify Mobile App Gallery",
      "url": "https://kgamify.in/gallery",
      "description": "A collection of screenshots showcasing kGamify’s mobile interface, gameplay, rewards, and leaderboard features.",
      "image": [
        "https://kgamify.in/app_screenshots/screens/screen_1.jpg",
        "https://kgamify.in/app_screenshots/screens/screen_2.jpg",
        "https://kgamify.in/app_screenshots/screens/screen_3.jpg",
        "https://kgamify.in/app_screenshots/screens/screen_4.jpg",
      ]
    }),
  },
};

export default function GalleryPage() {
  return (
    <ScrollDeviceShowcase />
  );
}