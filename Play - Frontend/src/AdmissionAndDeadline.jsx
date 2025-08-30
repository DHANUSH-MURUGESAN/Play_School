import React, { useEffect } from "react";
import { Link } from "react-router";

const AdmissionAndDeadline = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // or "auto" if you don't want animation
      });
  }, []);
  return (
    <div className="space-y-6 justify-center max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-900">Applications & Deadlines</h2>
      <p className="text-gray-700 leading-relaxed">
        Applications for the <span className="font-semibold">2025 - 2026 school year</span> 
        are officially open! We are currently accepting <span className="text-purple-700 font-medium">
        open enrollment applications</span> for available spots.
      </p>
      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
        <p className="text-lg text-gray-800 font-semibold">
          📅 Important Deadlines:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            <span className="font-bold">Lottery Application Deadline:</span>{" "}
            January 31, 2025
          </li>
          <li>
            <span className="font-bold">Notification of Lottery Results:</span>{" "}
            February 15, 2025
          </li>
          <li>
            <span className="font-bold">Open Enrollment Begins:</span>{" "}
            February 20, 2025 (first-come, first-served basis)
          </li>
          <li>
            <span className="font-bold">Enrollment Closes:</span>{" "}
            September 15, 2025
          </li>
        </ul>
      </div>
      <p className="text-gray-700 leading-relaxed">
        To ensure your child's spot, submit your application early. Applications
        received after September 15 will be considered for the waitlist only.
      </p>
      <p className="text-gray-700">
        For questions, reach out to
        <a
          href="mailto:admissions@parkwestcoop.org"
          className="text-purple-600 underline"
        >
          admissions@parkwestcoop.org
        </a>
      </p> 
      <div className="justify-center text-center ">
      <Link
        to="/admission-form"
        className="inline-block bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white  px-6 py-3 rounded-xl shadow-md hover:bg-white-800 transition font-semibold">
        Apply Now
      </Link>
      </div>
    </div>
  );
};

export default AdmissionAndDeadline;
