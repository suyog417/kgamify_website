import Link from "next/link"
import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center">
          <img
            src="/kgamify_logo.png"
            alt="kGamify Logo"
            width={64}
            height={64}
            className="mr-2"
          />
        </Link>
            <h3 className="mb-2 text-xl font-bold py-2">kGamify</h3>
            <p className="mb-4 text-gray-400">
              Transforming knowledge and skill-building through the power of gamification — making it fun, competitive,
              and rewarding.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white">
                  Feature
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-white">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              {/* <li>
                <Link href="/faqs" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li> */}
              <li>
                <Link href="/contacts" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
                  Terms of Services
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h4 className="mb-4 font-semibold">Subscribe</h4>
            <p className="mb-4 text-gray-400">Stay updated with our latest news and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-l-md bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="rounded-r-md bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        <div className="mt-8 flex flex-col justify-between border-t border-gray-800 pt-8 text-gray-500 md:flex-row">
          <p>© 2025 kGamify. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
