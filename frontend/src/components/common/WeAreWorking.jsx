import React from "react";
import {Link } from 'react-router-dom'

const WeAreWorking = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      {/* Dialog Box */}
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden animate-fade-in">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400" />

        {/* Content */}
        <div className="flex flex-col items-center px-8 py-10 text-center">

          {/* Animated gear icon */}
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 border-2 border-amber-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-amber-500 animate-spin-slow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          {/* Badge */}
          <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-600">
            We Are Working
          </span>

          {/* Main heading */}
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Page Not Available Yet
          </h2>

          {/* Alert message */}
          <p className="mb-4 text-base font-medium text-amber-700 bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
            🚧 As of now, this page is not available — we are working on it.
          </p>

          {/* Short paragraph */}
          <p className="text-sm text-gray-500 leading-relaxed">
            Our team is actively building and improving this section to give you
            the best experience possible. Please check back soon — great things
            are on the way! Thank you for your patience and continued support.
          </p>

          {/* Divider */}
          <div className="my-6 w-full border-t border-gray-100" />

          {/* Close / dismiss button */}
          <button
            className="w-full rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-orange-500 hover:to-amber-500 hover:shadow-lg active:scale-95"
          >
            <Link to="/" >Back to Home</Link>
          </button>
        </div>
      </div>

      {/* Custom keyframe animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);     }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default WeAreWorking;
