"use client"

import { faApple } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Bell } from "lucide-react"
import { useState } from "react"

export default function IOSNotificationForm() {

    const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log("Email submitted for iOS notification:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }
    return <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faApple} size="2x" />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M12 20.94c1.5 0 2.75-.75 4-1.5 1.25-.76 2.25-1.84 2.5-3.21.25-1.38-.74-2.73-2.25-3.73-1.5-1-2.25-2.18-2.25-3.75s.75-3.75 2.25-3.75c-.75-.76-1.75-1-3-1-1.5 0-2.5.5-3.5 1-1 .5-1.5 1-2.25 1-1 0-2.25-1-3.75-1-1.75 0-3.25 1-4 2.25-.75 1.25-1 3.5 0 6.5 1 3 2.75 6.5 4.75 6.5 1.25 0 2-.75 3-1.5s1.75-1 2.5-1Z"></path>
                  </svg> */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">iOS</h3>
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                    <Bell size={12} className="mr-1" />
                    Coming Soon
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-3">Get Notified When We Launch on iOS</h4>
                <p className="text-gray-600 mb-4">
                  Be the first to know when kGamify becomes available on the App Store. We'll send you a notification as
                  soon as it's ready.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    <p className="font-medium">Thank you for your interest!</p>
                    <p className="text-sm">We'll notify you when kGamify launches on iOS.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="rounded-r-md bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600"
                    >
                      Notify Me
                    </button>
                  </form>
                )}
              </div>

              {/* <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-sm">Expected Features on iOS</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>Native iOS design and experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>Apple Watch integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>iCloud sync across Apple devices</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mr-2 mt-1" />
                    <span>Apple Pencil support for iPad</span>
                  </li>
                </ul>
              </div> */}
            </div>
}