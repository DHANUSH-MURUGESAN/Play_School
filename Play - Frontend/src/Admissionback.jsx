import { Link } from "react-router";
import Background from "./assets/Back.jpg";
import "aos/dist/aos.css";
import Aos from "aos"
import { useEffect } from "react";

const AdmissionHeader = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000, // animation duration in ms
        once: true, // whether animation should happen only once
      });
    }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[700px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src={Background}
          alt="Admissions"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Heading */}
        <h1 className="absolute text-white text-3xl md:text-5xl font-extrabold tracking-wide text-center" data-aos="zoom-in-down">
          APPLICATIONS & DEADLINES
        </h1>
      </div>

      {/* Admissions Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Section Navigation Headings in Flex */}
        <div className="flex flex-wrap gap-6 justify-center text-lg font-semibold text-purple-700">
          <Link to="/admission/how-it-works">How it Works</Link>
          <Link to="/admission/visit">Visit</Link>
          <Link to="/admission/application-and-deadline">Applications & Deadlines</Link>
        </div>

        {/* Applications & Deadlines */}
        <section className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Applications for the 2025-2026 school year are now open. The
            deadline for lottery admissions has passed and we are now accepting
            open enrollment applications for any open spaces.
          </p>
          <p className="text-gray-700">
            If you have any questions, please email{" "}
            <a
              href="mailto:dreamlandkids@gmail.com"
              className="text-purple-600 underline"
            >
              dreamlandkids@gmail.com
            </a>
          </p>
          <Link to='/admission-form' className="bg-purple-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-purple-800 transition">
            Apply Now
          </Link>
        </section>

        {/* Tots Program */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Tots Program</h2>
          <p className="text-gray-700 leading-relaxed">
            Applicants for the Tots program will be notified of acceptance or
            waitlist status within one week. Upon acceptance, a 20% tuition
            deposit is required to secure a child's spot. The deposit is
            non-refundable and non-transferable.
          </p>
        </section>

        {/* Nursery School Program */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Nursery School Program
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We have a limited number of spaces available in our JK Half Day
            program for the 2025-2026 school year and are accepting applications
            on a first-come first-served basis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To be placed on the waitlist for our 2-Day, 3-Day, 4-Day Half Day,
            4-Day Full Day or JK Full Day programs for the 2025-2026 school
            year, initiate an application online. You will be notified of your
            child’s waitlist status within one week.
          </p>
          <p className="text-gray-700">
            If you have any questions, please email{" "}
            <a
              href="mailto:dreamlandkids@gmail.com"
              className="text-purple-600 underline"
            >
              dreamlandkids@gmail.com
            </a>
          </p>
          <Link to='/admission-form' className="bg-purple-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-purple-800 transition">
            Apply Now
          </Link>
        </section>
      </div>
    </>
  );
};

export default AdmissionHeader;