import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

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
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post("http://localhost:8000/admission", formData);

      setTimeout(() => {
        console.log("response", response.data);
        alert("Admission Form Submitted Successfully ");
           
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
        
      }, 1500);

      
   
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again ❌");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-300 min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white w-full max-w-3xl p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-200"
      >
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
            data-aos="zoom-in-up"
            className={`w-full flex justify-center items-center gap-2 
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
              text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <>

                Loading...
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
