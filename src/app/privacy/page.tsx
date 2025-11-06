"use client";
import React from "react";
// import Link from "next/link";
import { Link2 } from "lucide-react";

function page() {
  return (
    <div className="p-16 min-h-screen bg-slate-900 text-slate-50">
      <div className="text-start">
        <h1 className="text-3xl font-bold">PRIVACY POLICY</h1>
        <h2>
          <span className="font-bold">Effective Date:</span> January 1, 2025
        </h2>
        <br />
      </div>
      <div className="border mb-8"></div>
      <div>
        <h1 className="font-bold text-3xl">1. Introduction</h1>
        <p className="pt-4 text-lg mb-8">
          Shortly (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects
          your privacy. This Privacy Policy explains how we collect, use, and
          protect your personal information.
        </p>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-3xl">2. Information We Collect</h1>
        <h2 className="pt-4 text-2xl font-bold">Personal Information</h2>
        <ul className="ml-6 font-medium text-lg">
          <li>1. Name</li>
          <li>2. Email Address</li>
          <li>3. Payment Information (processed securely through Razorpay)</li>
        </ul>
        <h2 className="pt-4 text-2xl font-bold">Usage Data</h2>
        <ul className="ml-6 font-medium text-lg">
          <li>1. URLs you shorten</li>
          <li>
            2. Click analytics (timestamps, approximate geographic location,
            referrer data)
          </li>
          <li>3. Device and browser information</li>
          <li>4. IP addresses (for security and analytics)</li>
        </ul>
        <h2 className="pt-4 text-2xl font-bold">Cookies</h2>
        <ul className="ml-6 font-medium text-lg">
          <li>
            1. We use cookies to maintain your session and improve user
            experience
          </li>
          <li>2. You can disable cookies in your browser settings</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">
          3. How We Use Your Information
        </h1>
        <p className="pt-4 text-lg">We use collected information to:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Provide and maintain our Service</li>
          <li>2. Process payments and manage subscriptions</li>
          <li>3. Send service-related notifications</li>
          <li>4. Improve our features and user experience</li>
          <li>5. Detect and prevent fraud or abuse</li>
          <li>6. Comply with legal obligations</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">4. Data Sharing</h1>
        <p className="pt-4 text-lg">
          We DO NOT sell your personal information. We may share data with:
        </p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. <span className="font-bold">Payment Processors:</span> Razorpay
            (for payment processing)
          </li>
          <li>
            2. <span className="font-bold">Authentication Providers:</span>{" "}
            NextAuth (for secure login)
          </li>
          <li>
            3. <span className="font-bold">Analytics Tools:</span> For
            aggregated, anonymized usage statistics
          </li>
          <li>
            4. <span className="font-bold">Legal Requirements:</span> When
            required by law or to protect our rights
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">5. Data Security</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. We implement industry-standard encryption (HTTPS/TLS)</li>
          <li>2. Passwords are hashed using secure algorithms</li>
          <li>3. Payment data is handled by PCI-compliant processors</li>
          <li>4. Regular security audits and updates</li>
          <li>5. Redis data is encrypted in transit and at rest</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">6. Data Retention</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. Active account data is retained as long as your account exists
          </li>
          <li>2. Deleted accounts: Personal data is removed within 30 days</li>
          <li>3. Analytics data may be retained in anonymized form</li>
          <li>4. Free plan: 7 days click data retention</li>
          <li>5. Pro plan: 90 days retention</li>
          <li>6. Enterprise: Unlimited retention</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">7. Your Rights</h1>
        <p className="pt-4 text-lg">You have the right to:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Access your personal data</li>
          <li>2. Correct inaccurate information</li>
          <li>3. Delete your account and associated data</li>
          <li>4. Export your data</li>
          <li>5. Opt-out of marketing communications</li>
          <li>6. Object to data processing</li>
        </ul>
        <p className="pt-4 text-lg mt-4">
          To exercise these rights, contact:{" "}
          <a className="hover:font-bold" href="mailto:pksingh69313@gmail.com">
            pksingh69313@gmail.com
          </a>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">8. Third-Party Links</h1>
        <p className="pt-4 text-lg">Shortened URLs may redirect to third-party websites. We are not responsible for the privacy practices of those sites.</p>
      </div>
       <div>
        <h1 className="font-bold text-3xl pt-8">9. Children&apos;s Privacy</h1>
        <p className="pt-4 text-lg">Our Service is not intended for users under 18. We do not knowingly collect data from minors.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">10. International Data Transfers</h1>
        <p className="pt-4 text-lg">Your data may be processed in servers located in various countries. We ensure adequate data protection measures are in place.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">11. Changes to This Policy</h1>
        <p className="pt-4 text-lg">We may update this Privacy Policy. Changes will be posted on this page with an updated &quot;Effective Date.&quot;</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">12. Contact Us</h1>
        <p className="pt-4 text-lg">For privacy concerns or questions:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Email: <a href="mailto:pksingh69313@gmail.com" className="hover:font-bold">pksingh69313@gmail.com</a></li>
          <li>2. Address: [Selaqui, Vikāsnagar, Uttarakhand, India]</li>
        </ul>
      </div>
      <div className="border border-gray-400 mt-8 mb-4"></div>
      <footer className="relative z-10 border-t border-slate-800 mt-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {/* Brand Section */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Link2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Shortly</span>
        </div>
        <p className="text-slate-400 text-sm">
          Lightning fast URL shortening with powerful analytics.
        </p>
      </div>

      {/* Product Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">Product</h3>
        <ul className="space-y-2">
          <li>
            <a href="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm">
              Pricing
            </a>
          </li>
          <li>
            <a href="/features" className="text-slate-400 hover:text-white transition-colors text-sm">
              Features
            </a>
          </li>
          <li>
            <a href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Support Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">Support</h3>
        <ul className="space-y-2">
          <li>
            <a href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/faq" className="text-slate-400 hover:text-white transition-colors text-sm">
              FAQ
            </a>
          </li>
          <li>
            <a href="/docs" className="text-slate-400 hover:text-white transition-colors text-sm">
              Documentation
            </a>
          </li>
        </ul>
      </div>

      {/* Legal Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li>
            <a href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/refund-policy" className="text-slate-400 hover:text-white transition-colors text-sm">
              Refund Policy
            </a>
          </li>
          <li>
            <a href="/shipping" className="text-slate-400 hover:text-white transition-colors text-sm">
              Shipping Policy
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm text-center md:text-left">
          © 2025 Shortly. All rights reserved.
        </p>
        
        {/* Social Links (Optional) */}
        <div className="flex items-center space-x-6">
          <a href="https://www.x.com/yansh_08" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://www.github.com/yansh07" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yansh08/" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default page;
