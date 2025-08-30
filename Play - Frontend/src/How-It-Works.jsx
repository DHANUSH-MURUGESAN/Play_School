import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";


const HowItWorks = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // or "auto" if you don't want animation
      });
    }, []);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700">
          How It Works
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Here’s a simple step-by-step guide to how our admissions process works
          for your child’s bright future.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div
          className="bg-white shadow-lg rounded-2xl p-8 text-center"
          data-aos="zoom-in"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full text-2xl font-bold">
            1
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Explore Our Programs
          </h2>
          <p className="text-gray-600">
            Browse through our Tots and Nursery School programs to find the best
            fit for your child’s needs.
          </p>
        </div>

        {/* Step 2 */}
        <div
          className="bg-white shadow-lg rounded-2xl p-8 text-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full text-2xl font-bold">
            2
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Apply Online
          </h2>
          <p className="text-gray-600">
            Complete our simple online application form and submit all the
            required details.
          </p>
        </div>

        {/* Step 3 */}
        <div
          className="bg-white shadow-lg rounded-2xl p-8 text-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full text-2xl font-bold">
            3
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Get Confirmation
          </h2>
          <p className="text-gray-600">
            Receive an email with admission status and further instructions
            within a week.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16" data-aos="fade-up">
        <Link
          to="/admission-form"
          className="bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white px-8 py-3 rounded-xl shadow-md hover:bg-purple-800 transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;

