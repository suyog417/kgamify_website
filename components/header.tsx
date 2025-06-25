"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowDown, ArrowDown01 } from "lucide-react"

const PartnershipDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Determine if any partnership route is active
  const isActive =
    pathname?.startsWith("/partnerships/brand") ||
    pathname?.startsWith("/partnerships/corporate") ||
    pathname?.startsWith("/partnerships/institute")

  return (
    <div className="relative">
      <button
        className={`font-medium flex items-center transition-colors ${
          isActive
            ? "text-white border-b-2 border-white"
            : "hover:text-orange-200"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Partnership
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <Link
              href="/partnerships/brand"
              className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                pathname === "/partnerships/brand"
                  ? "text-orange-600 font-semibold bg-orange-50"
                  : "text-gray-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Brand
            </Link>
            <Link
              href="/partnerships/corporate"
              className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                pathname === "/partnerships/corporate"
                  ? "text-orange-600 font-semibold bg-orange-50"
                  : "text-gray-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Corporate
            </Link>
            <Link
              href="/partnerships/institute"
              className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                pathname === "/partnerships/institute"
                  ? "text-orange-600 font-semibold bg-orange-50"
                  : "text-gray-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Institute
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/#") return pathname === "/#" // Gallery placeholder
    return pathname?.startsWith(href)
  }

  return (
    <header className="bg-[#ff8200] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <img
            src="/kgamify_logo.png"
            alt="kGamify Logo"
            width={56}
            height={56}
            className="mr-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex items-center">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              isActive("/") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`font-medium transition-colors ${
              isActive("/features") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
            }`}
          >
            Features
          </Link>
          <Link
            href="/#"
            className={`font-medium transition-colors ${
              isActive("/#") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
            }`}
          >
            Gallery
          </Link>
          <PartnershipDropdown />
          <Link
            href="/contacts"
            className={`font-medium transition-colors ${
              isActive("/contacts") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Download Button */}
        <button className="hidden rounded-md border border-white bg-transparent px-4 py-1 text-sm font-medium text-white transition hover:bg-white hover:text-orange-500 md:block">
          <Link href="/download" className="font-medium hover:text-orange-200">
            Download
          </Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-orange-500">
            <Link
              href="/"
              className={`font-medium ${
                isActive("/") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`font-medium ${
                isActive("/features") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#"
              className={`font-medium ${
                isActive("/#") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <p className="flex gap-2">Parntership <ChevronDown/></p>
            <Link
              href="/partnerships/brand"
              className={`font-medium pl-4 ${
                pathname === "/partnerships/brand" ? "text-white border-b-2 border-white" : "hover:text-orange-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              - Brand
            </Link>
            <Link
              href="/partnerships/corporate"
              className={`font-medium pl-4 ${
                pathname === "/partnerships/corporate" ? "text-white border-b-2 border-white" : "hover:text-orange-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              - Corporate
            </Link>
            <Link
              href="/partnerships/institute"
              className={`font-medium pl-4 ${
                pathname === "/partnerships/institute" ? "text-white border-b-2 border-white" : "hover:text-orange-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              - Institute
            </Link>
            <Link
              href="/contacts"
              className={`font-medium ${
                isActive("/contacts") ? "text-white border-b-2 border-white" : "hover:text-orange-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <button className="w-full rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-orange-500">
            <Link href="/download" className="font-medium hover:text-orange-200">
            Download
          </Link>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}