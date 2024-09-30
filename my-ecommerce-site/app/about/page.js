// app/about/page.js
import Image from "next/image";
import aboutImage from "../assest/tow.jpg"; // ضع الصورة في مجلد `public`

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 text-center">
          Our Story
        </h1>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={aboutImage}
                alt="About Us"
                width={600}
                height={400}
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                About Us
              </div>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Welcome to our e-commerce store! We are passionate about
                providing high-quality products that enhance your everyday life.
                Our journey began with a simple idea: to create a platform where
                customers can find exactly what they need, backed by exceptional
                service.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                With years of experience in the industry, we've curated a wide
                range of products to meet diverse needs and preferences. Our
                team is dedicated to ensuring your shopping experience is
                seamless, enjoyable, and rewarding.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-blue-500 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
