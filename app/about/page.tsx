// import { FaPlay, FaChartLine, FaUserPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Huly Clone</h1>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Create Engaging Content</h1>
        <p className="text-xl mb-8">
          Build quizzes, polls, and forms that captivate your audience.
        </p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold flex items-center">
          {/* <FaPlay className="mr-2" /> */}
           Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              {/* <FaPlay className="text-4xl text-blue-500 mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">Interactive Quizzes</h3>
              <p>Create fun and engaging quizzes for your audience.</p>
            </div>
            <div className="text-center">
              {/* <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p>Track performance and user engagement.</p>
            </div>
            <div className="text-center">
              {/* <FaUserPlus className="text-4xl text-blue-500 mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">User Management</h3>
              <p>Manage users and permissions easily.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}