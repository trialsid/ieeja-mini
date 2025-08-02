export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-600">ieeja.com</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-yellow-600">ieeja.com</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your gateway to exam registration and directory services
          </p>
        </div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Register for Exam Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Register for Exam</h3>
              <p className="text-gray-600 mb-6">
                Quick and easy exam registration process. Register for upcoming exams and track your applications.
              </p>
              <a href="/register" className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors w-full text-center">
                Register Now
              </a>
            </div>
          </div>

          {/* Telephone Directory Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Telephone Directory</h3>
              <p className="text-gray-600 mb-6">
                Find contact information quickly. Search our comprehensive directory for staff and department contacts.
              </p>
              <button className="border border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors w-full">
                Browse Directory
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
