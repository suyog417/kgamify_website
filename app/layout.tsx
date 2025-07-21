import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'kGamify',
  description: "Join kGamify's educational championships to compete, climb leaderboards, and win scholarships, discounts, and career-boosting rewards. Gamified learning for students.",
  keywords: "educational games, learning app, scholarship competitions, student rewards, gamified learning, knowledge championships",
  openGraph: {
    title: "kGamify - Learn Through Play & Win Exciting Rewards",
    description: "Compete in educational championships and win scholarships, discounts, and career-boosting rewards with kGamify.",
    type: "website",
    url: "https://kgamify.in",
  },
  icons: {
    icon: '/favicon-32x32.png', // Path to the favicon file in the public directory
  },
}

const GTM_ID = 'GTM-5BSD8FQ4';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
