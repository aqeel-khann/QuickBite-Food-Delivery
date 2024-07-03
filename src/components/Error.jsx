import React from "react";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <div className="flex items-center justify-center text-red-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01m-6.93 4.32a9.004 9.004 0 0112.91 0m-6.91-20.42a9.004 9.004 0 000 16.84m0-16.84a9.004 9.004 0 000 16.84M12 8v4m0 4h.01M4.93 19.32A9.004 9.004 0 0112 3.42m0 0a9.004 9.004 0 010 16.84"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-red-600">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-4"></p>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default Error;
