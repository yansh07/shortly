"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Link2,
  Menu,
  X,
  Zap,
  Shield,
  Heart,
  BarChart3,
  Code,
  TrendingUp,
  Coffee,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <nav className="relative z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Shortly
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                Features
              </a> */}
              <Link
                href="/pricing"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Home
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => router.push("/user")}
              >
                Login
              </button>
              <button
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                onClick={() => router.push("/user")}
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                {/* <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                  Features
                </a> */}
                <Link
                  href="/pricing"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
                  <button
                    className="px-4 py-2 text-slate-300 hover:text-white transition-colors text-left"
                    onClick={() => router.push("/user")}
                  >
                    Login
                  </button>
                  <button
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
                    onClick={() => router.push("/user")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full mb-6">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-slate-300">Built with passion</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Shortly
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            We&apos;re on a mission to make URL management simple, powerful, and
            accessible to everyone. No complexity, just results.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <div className="p-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Shortly was born from a simple frustration: existing URL
                shorteners were either too complicated, too expensive, or lacked
                the features modern teams need.
              </p>
              <p>
                We built Shortly to be different. Lightning-fast infrastructure
                powered by Redis, real-time analytics that actually matter, and
                a clean interface that doesn&apos;t get in your way.
              </p>
              <p>
                Whether you&apos;re a solo creator sharing content, a marketer
                tracking campaigns, or an enterprise managing thousands of
                links, Shortly scales with you.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Speed First
              </h3>
              <p className="text-slate-400">
                Built on Redis and FastAPI for blazing-fast URL generation and
                redirects. Your users won&apos;t even notice the hop.
              </p>
            </div>

            <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Privacy Matters
              </h3>
              <p className="text-slate-400">
                Your data is yours. We don&apos;t sell information, track users
                across sites, or do anything shady. Period.
              </p>
            </div>

            <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-pink-500/50 transition-all group">
              <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Data-Driven
              </h3>
              <p className="text-slate-400">
                Real-time analytics that help you understand your audience. See
                what&apos;s working and optimize accordingly.
              </p>
            </div>

            <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-all group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Developer Friendly
              </h3>
              <p className="text-slate-400">
                Clean REST API, comprehensive docs, and webhooks. Integrate
                Shortly into your workflow in minutes.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-slate-700 rounded-3xl mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Built With Modern Tech
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-slate-300 font-medium">Next.js</p>
                <p className="text-slate-500 text-sm">Frontend</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-slate-300 font-medium">FastAPI</p>
                <p className="text-slate-500 text-sm">Backend</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-pink-400" />
                </div>
                <p className="text-slate-300 font-medium">Redis</p>
                <p className="text-slate-500 text-sm">Caching</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
                <p className="text-slate-300 font-medium">NextAuth</p>
                <p className="text-slate-500 text-sm">Authentication</p>
              </div>
            </div>
          </div>

          {/* Team Section - Placeholder */}
          <div className="text-center p-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl">
            <Coffee className="w-16 h-16 text-slate-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Currently a solo project built with ❤️ and lots of coffee. Open to
              collaborators who share the vision!
            </p>
            <div className="inline-flex flex-col items-center">
              {/* <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                  YN
                </div> */}
              <Image
                src="/pk.webp"
                alt="priyanshu"
                width={70}
                height={48}
                priority={true}
                className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-xl font-semibold text-white">Priyanshu</p>
              <p className="text-slate-400">Founder & Developer</p>
              <p className="text-sm text-slate-500 mt-2">
                📍 Dehradun, Uttarakhand
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Join thousands of users who trust Shortly for their link
              management
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
            onClick={() => {
              router.push("/user")
            }}
            >
              Start Free Today
            </button>
          </div>
        </div>
      </div>

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
                  <a
                    href="/pricing"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/features"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
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
                  <a
                    href="/contact"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/docs"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
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
                  <a
                    href="/terms"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
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
                <a
                  href="https://www.x.com/yansh_08"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://www.github.com/yansh07"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/yansh08/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
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
