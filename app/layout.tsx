import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'kGamify',
  description : "Join kGamify's educational championships to compete, climb leaderboards, and win scholarships, discounts, and career-boosting rewards. Gamified learning for students.",
  keywords : "educational games, learning app, scholarship competitions, student rewards, gamified learning, knowledge championships",
  openGraph : {
    title : "kGamify - Learn Through Play & Win Exciting Rewards",
    description : "Compete in educational championships and win scholarships, discounts, and career-boosting rewards with kGamify.",
    type : "website",
    url : "https://kgamify.in",
  },
  icons: {
    icon: '/favicon-32x32.png', // Path to the favicon file in the public directory
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
