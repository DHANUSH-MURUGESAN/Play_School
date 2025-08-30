import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import butterfly from "./assets/butterfly.gif"; // 🦋 butterfly gif

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    gender: "",
    parentName: "",
    contact: "",
    email: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // show loader

    // simulate loading for 2 seconds before API call
    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/admission",
          formData
        );
        alert("✅ Admission form submitted successfully");

        // reset form
        setFormData({
          childName: "",
          dob: "",
          gender: "",
          parentName: "",
          contact: "",
          email: "",
          address: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("❌ Failed to submit. Please try again");
      } finally {
        setLoading(false); // stop loader
      }
    }, 2000); // 2s loader effect
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-300 to-purple-300 min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* 🦋 Butterflies outside the form */}
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-14 h-14 absolute top-10 left-5"
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["0%", "30%", "0%"],
          rotate: [0, 20, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-15 h-15 absolute top-20 right-10"
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["0%", "30%", "0%"],
          rotate: [0, 20, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-12 h-12 absolute top-35 right-15"
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["8%", "20%", "40%"],
          rotate: [0, 24, -21, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-16 h-16 absolute bottom-20 right-20"
        animate={{
          x: ["100%", "0%", "100%"],
          y: ["0%", "40%", "0%"],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-16 h-16 absolute bottom-32 left-0"
        animate={{
          x: ["0%", "30%", "60%", "90%", "110%"], // moves across the screen
          y: ["0%", "-20%", "10%", "-30%", "0%"], // small up-down wave
          rotate: [0, 10, -10, 15, 0], // wing tilt
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-16 h-16 absolute bottom-20 right-20"
        animate={{
          x: [0, -150, 80, -200, 0], // zigzag horizontal movement
          y: [0, -100, -50, -150, 0], // upward + wavy vertical movement
          rotate: [0, 25, -25, 20, 0], // wing tilt while flying
          scale: [1, 1.1, 1, 1.05, 1], // slight size variation (fluttering effect)
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-12 h-12 absolute bottom-5 right-20"
        animate={{
          x: ["100%", "0%", "100%"],
          y: ["0%", "20%", "0%"],
          rotate: [0, -18, 19, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-12 h-12 absolute bottom-0 left-10"
        animate={{
          x: ["0%", "80%", "0%"],
          y: ["100%", "20%", "100%"],
          rotate: [0, 30, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-16 h-16 absolute bottom-32 left-0"
        animate={{
          x: ["0%", "30%", "60%", "90%", "110%"],
          y: ["0%", "-20%", "10%", "-30%", "0%"],
          rotate: [0, 10, -10, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🦋 Butterfly 2 - Right to Left */}
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-16 h-16 absolute top-20 right-0"
        animate={{
          x: ["0%", "-20%", "-50%", "-80%", "-110%"],
          y: ["0%", "15%", "-10%", "20%", "0%"],
          rotate: [0, -15, 10, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4, // starts later
        }}
      />

      {/* 🦋 Butterfly 3 - Zigzag from Bottom */}
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-15 h-15 absolute bottom-0 left-1/2"
        animate={{
          x: ["0%", "10%", "-15%", "20%", "0%"],
          y: ["0%", "-30%", "-60%", "-90%", "-120%"],
          rotate: [0, 20, -20, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* 🦋 Butterfly 4 - Circle Path */}
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-14 h-14 absolute top-40 left-20"
        animate={{
          x: [0, 40, 60, 40, 0, -40, -60, -40, 0],
          y: [0, -20, 0, 20, 40, 20, 0, -20, 0],
          rotate: [0, 15, -15, 20, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🦋 Butterfly 5 - Diagonal Float */}
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-23 h-23 absolute bottom-70 left-10"
        animate={{
          x: ["0%", "50%", "100%"],
          y: ["0%", "-40%", "-80%"],
          rotate: [0, 10, -10, 15, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🦋 Butterfly 6 - Random Flutter */}
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-18 h-18 absolute top-100 right-10"
        animate={{
          x: ["0%", "-10%", "20%", "-15%", "10%", "0%"],
          y: ["0%", "20%", "10%", "-20%", "30%", "0%"],
          rotate: [0, -25, 30, -10, 5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      />
      <motion.img
        src={butterfly}
        alt="butterfly"
        className="w-10 h-10 absolute top-100 left-20"
        animate={{
          x: ["20%", "90%", "0%"],
          y: ["54%", "30%", "50%"],
          rotate: [0, -25, 25, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* 🎯 Form stays centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white w-full max-w-3xl p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-200 relative z-10"
      >
        <motion.img
          src={butterfly}
          alt="butterfly"
          className="w-16 h-16 absolute top-8 left-10"
          animate={{ x: ["0%", "100%"] }}
          transition={{
            duration: 20, // speed of travel
            repeat: Infinity, // loop forever
            ease: "linear", // smooth straight flight
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
        >
          Admission Form
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Child's Full Name
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                placeholder="Enter child's name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Parent/Guardian Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                placeholder="Enter parent's name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                placeholder="Enter contact number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Additional Message */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any other information"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
              text-white font-semibold py-3 rounded-lg shadow-md 
              transition-transform transform hover:scale-105 cursor-pointer
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdmissionForm;
