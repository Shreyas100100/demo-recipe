export const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-100 to-orange-300 text-gray-800">
      {/* Error code */}
      <h1 className="text-8xl font-extrabold text-orange-600">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Oops! It seems like you are trying to naviagte to the wrong page
      </p>

      {/* Illustration */}
      <div className="mt-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZl7Wcm9QUsve37Q8b09lZR02Ji_1iYM6Lag&s"
          alt="Recipe Missing"
          className="w-64 rounded-lg shadow-lg"
        />
      </div>

      {/* Navigation Button */}
      <button
        className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
        onClick={() => (window.location.href = "/home")}
      >
        Back to Home
      </button>
    </div>
  );
};

