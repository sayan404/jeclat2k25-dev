export default function Quiz() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Sample Quiz</h1>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">What is 2 + 2?</p>
            <div className="space-y-2">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
                3
              </button>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
                4
              </button>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
                5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}