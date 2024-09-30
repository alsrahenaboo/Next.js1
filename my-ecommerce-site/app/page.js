// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            E-Commerce Store
          </span>
        </h1>
        <p className="text-gray-600 mb-8">
          Discover amazing products and unbeatable deals!
        </p>
        <nav className="flex justify-center space-x-6">
          <Link
            href="/products"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Products
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About Us
          </Link>
        </nav>
      </div>
    </div>
  );
}
