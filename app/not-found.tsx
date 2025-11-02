import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh px-6">
      <div className="text-center">
        <h1 className="font-space text-6xl md:text-8xl font-bold text-gradient mb-4">404</h1>
        <h2 className="font-space text-2xl md:text-3xl font-bold text-dark-navy mb-6">Page Not Found</h2>
        <p className="text-dark-navy/70 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-md hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-300 inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}