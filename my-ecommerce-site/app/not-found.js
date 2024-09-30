// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-2xl p-8 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          Oops! Page Not Found
        </p>
        <div className="mb-8">
          <p className="text-gray-500">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
