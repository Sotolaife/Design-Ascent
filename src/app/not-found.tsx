"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20">
      <h1 className="text-7xl font-extrabold tracking-tight mb-6">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Page Not Found
      </h2>

      <p className="text-base md:text-lg text-gray-300 text-center max-w-lg mb-10">
        The page you are looking for doesn’t exist or has been moved.  
        Check the URL or return to the homepage.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>

      <div className="mt-12 text-xs text-gray-500 tracking-wide">
        Olutola Studios © {new Date().getFullYear()}
      </div>
    </div>
  );
}
