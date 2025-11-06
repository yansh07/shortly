// app/auth/page.tsx
'use client';
// import { useUser } from '@NextAuth/nextjs-NextAuth';
import React from 'react';
import { signIn } from 'next-auth/react';
import { Link2, Github, Chrome, Sparkles, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { Single_Day } from 'next/font/google';

export default function AuthPage() {
  // const { user, error, isLoading } = useUser();
  const router = useRouter();

  // Redirect to dashboard if already logged in
  // useEffect(() => {
  //   if (user) {
  //     router.push('/dashboard');
  //   }
  // }, [user, router]);

  // const handleGoogleLogin = () => {
  //   window.location.href = '/api/auth/login?connection=google-oauth2&returnTo=/dashboard';
  // };

  // const handleGithubLogin = () => {
  //   window.location.href = '/api/auth/login?connection=github&returnTo=/dashboard';
  // };

  // Show loading state
  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-slate-900 flex items-center justify-center">
  //       <div className="text-center">
  //         <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
  //         <p className="text-slate-400">Loading...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // Show error state
  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
  //       <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8 text-center">
  //         <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
  //           <span className="text-3xl">⚠️</span>
  //         </div>
  //         <h2 className="text-2xl font-bold text-white mb-2">Authentication Error</h2>
  //         <p className="text-slate-400 mb-6">{error.message}</p>
  //         <button
  //           onClick={() => router.push('/')}
  //           className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all"
  //         >
  //           Go Home
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Logo - Top Left */}
      <Link href="/" className="absolute top-6 left-6 z-50 flex items-center space-x-2 group">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <Link2 className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Shortly
        </span>
      </Link>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glow Effect Behind Card */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
        
        {/* Main Card */}
        <div className="relative bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Sparkle Icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 animate-bounce">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8 mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Welcome to Shortly
            </h1>
            <p className="text-slate-400">
              Sign in to start shortening URLs
            </p>
          </div>

          {/* Social Auth Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => signIn('google', {
                callbackUrl: "/dashboard"
              })}
              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl text-white transition-all group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Chrome className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              <span className="font-medium">Continue with Google</span>
            </button>

            <button
              onClick={() => signIn('github', {
                callbackUrl: "/dashboard"
              })}
              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl text-white transition-all group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              <span className="font-medium">Continue with GitHub</span>
            </button>
          </div>

          {/* Terms */}
          <p className="mt-6 text-xs text-slate-500 text-center">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-8 flex items-center justify-center space-x-6 text-slate-500 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span>Fast</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span>Reliable</span>
          </div>
        </div>
      </div>

      {/* Additional CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  )
}