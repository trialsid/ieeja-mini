export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-indigo-600">Ieeja Mini</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A beautiful Next.js application built with modern web technologies. 
          Fast, responsive, and ready to deploy on Vercel.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
