import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const Visit = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700">
          Visit Us
        </h1>
        <p className="text-lg mt-15 font-semibold text-gray-600 max-w-2xl mx-auto">
          We'd love to show you around! Schedule a visit or take a virtual tour to experience our atmosphere and meet the team.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold">Schedule a Visit</h2>
          <p>
            Contact us to arrange a visit. Please email us or complete our contact form and we’ll respond within 2 business days.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold">Location & Hours</h2>
          <p>
            96, Rajaji Salai, Egmore, Chennai, Tamilnadu 600 008<br />
            Monday - Friday : 7:30 am - 5:00 pm, Saturday : 8:00 am - 5:30 pm
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400"  className="text-center mt-16 ">
          <Link
            to="/contact-form"
            className="bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white px-8 py-5 rounded-xl shadow-md hover:bg-white-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Visit;
