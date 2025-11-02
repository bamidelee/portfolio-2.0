export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-blue/30 border-t-primary-blue rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-dark-navy/70 font-semibold">Loading...</p>
      </div>
    </div>
  );
}