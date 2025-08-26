import React from "react";
import logo from "./assets/playschoollogo2.png";
import kid from "./assets/kid.png";
import kid2 from "./assets/kid-2.jpg"
import star from "./assets/star.png";
import baloon from "./assets/baloon.png"
import plane from "./assets/plane.png"
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to
            <span className="text-yellow-300"> Dreamland Kids Play World</span>
          </h1>
          <p className="text-lg mb-10">
            A world of fun, creativity, and learning for your little ones. Where
            every child shines bright like a star ✨
          </p>
          <Link to="./admissions" className="bg-yellow-400 text-purple-900 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-300 transition-transform hover:scale-105">
            Enroll Now
          </Link>
        </div>

        <div className="mt-10 md:mt-0 relative flex justify-center">
          {/* Decorative star */}
          <img
            src={star}
            alt="Star"
            className="w-10 h-10 absolute top-9 -left-6 animate-pulse"
          />
          <img
            src={star}
            alt="Star"
            className="w-5 h-5 absolute top-7 left-9 animate-pulse"
          />
          <img
            src={star}
            alt="Star"
            className="w-7 h-7 absolute top-20 left-5 animate-pulse"
          />
          <img
            src={plane}
            alt="Star"
            className="w-15 h-10 absolute top-50 right-4 rotate-200 " 
          />
          {/* Decorative baloon */}
          <img
            src={baloon}
            alt="Baloon"
            className="w-auto h-60 absolute -top-17 left-81 z-20"
          />
          {/* Main image */}
          <img
            src={kid}
            alt="Happy Kids"
            className="h-[360px] md:h-[420px] drop-shadow-2xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-20 flex flex-col md:flex-row items-center gap-10">
        <img src={kid2} alt="About" className="h-72 rounded-2xl shadow-md" />
        <div className="max-w-lg space-y-8">
          <h2 className="text-3xl font-bold text-purple-800">About Us</h2>
          <p className="text-gray-700">
            At Dreamland Kids Play World, we nurture young minds with love and
            care. Our mission is to provide a safe, creative, and joyful
            environment where children can learn through play, explore their
            curiosity, and build a strong foundation for the future.
          </p>
          <Link to="./aboutus" className="text-yellow-400 bg-purple-800 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-purple-500 transition-transform hover:scale-105">
            Learn More
          </Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img src={logo} alt="Play" className="h-28 mx-auto mb-4" />
            <h3 className="font-bold text-xl text-purple-700">Fun & Play</h3>
            <p className="text-gray-600 mt-2">
              Engaging activities to boost creativity and motor skills.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img src={logo} alt="Learn" className="h-28 mx-auto mb-4" />
            <h3 className="font-bold text-xl text-purple-700">
              Early Learning
            </h3>
            <p className="text-gray-600 mt-2">
              Interactive learning through stories, rhymes & games.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img src={logo} alt="Activities" className="h-28 mx-auto mb-4" />
            <h3 className="font-bold text-xl text-purple-700">
              Creative Activities
            </h3>
            <p className="text-gray-600 mt-2">
              Art, music, dance & craft sessions to spark imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-20">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="https://placehold.co/300x200"
            alt="Gallery1"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://placehold.co/300x200"
            alt="Gallery2"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://placehold.co/300x200"
            alt="Gallery3"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://placehold.co/300x200"
            alt="Gallery4"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
