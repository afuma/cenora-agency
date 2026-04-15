import React from 'react';

// Reusable animated soft blobs for section backgrounds
export default function AnimatedBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Left side blobs */}
      <div className="blob-1 absolute -left-24 top-1/4 w-72 h-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="blob-2 absolute -left-16 bottom-1/4 w-56 h-56 rounded-full bg-violet-100/50 blur-3xl" />
      <div className="blob-3 absolute left-8 top-10 w-40 h-40 rounded-full bg-cyan-100/40 blur-2xl" />

      {/* Right side blobs */}
      <div className="blob-2 absolute -right-24 top-1/3 w-72 h-72 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="blob-1 absolute -right-12 bottom-1/4 w-60 h-60 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="blob-3 absolute right-8 top-16 w-44 h-44 rounded-full bg-blue-50/60 blur-2xl" />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}