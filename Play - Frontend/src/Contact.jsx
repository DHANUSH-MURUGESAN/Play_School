import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted!");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 relative overflow-hidden">
        
        {/* Blurry circles for background */}
        <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

        {/* Card */}
        <div
          data-aos="zoom-in"
          className="bg-white/90 backdrop-blur-lg max-w-md w-full mx-auto p-8 rounded-2xl shadow-2xl border border-gray-200 transition-transform transform hover:scale-[1.02]"
        >
          <h2
            data-aos="fade-down"
            className="text-3xl font-extrabold text-center text-gray-800 mb-6 drop-shadow-md cursor-pointer"
          >
            Contact Us
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* First Name */}
            <div data-aos="fade-right">
              <label className="text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
                required
              />
            </div>

            {/* Last Name */}
            <div data-aos="fade-left">
              <label className="text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
                required
              />
            </div>

            {/* Email */}
            <div data-aos="fade-right">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
                required
              />
            </div>

            {/* Mobile */}
            <div data-aos="fade-left">
              <label className="text-sm font-semibold text-gray-700">
                Mobile
              </label>
              <div className="flex">
                <span className="px-3 py-2 border rounded-l-md bg-gray-100 text-gray-700 text-sm">
                  +91
                </span>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Number Here"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
                  required
                />
              </div>
            </div>

            {/* City & State */}
            <div className="grid grid-cols-2 gap-4">
              <div data-aos="fade-up">
                <label className="text-sm font-semibold text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City*"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
                  required
                />
              </div>
              <div data-aos="fade-up">
                <label className="text-sm font-semibold text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="State*"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              data-aos="zoom-in-up"
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold cursor-pointer py-3 rounded-lg shadow-md hover:opacity-90 transition-transform transform hover:scale-105"
            >
               Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

