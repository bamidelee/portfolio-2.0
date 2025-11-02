'use client'

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh px-6">
      <div className="text-center max-w-md">
        <h1 className="font-space text-6xl md:text-8xl font-bold text-gradient mb-4">Oops!</h1>
        <h2 className="font-space text-2xl md:text-3xl font-bold text-dark-navy mb-6">Something went wrong</h2>
        <p className="text-dark-navy/70 mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-md hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}