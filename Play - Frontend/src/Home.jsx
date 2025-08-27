import React, { useEffect } from "react";
import "aos/dist/aos.css";
import kid from "./assets/kid.png";
import kid2 from "./assets/kid-2.jpg";
import star from "./assets/star.png";
import baloon from "./assets/baloon.png";
import plane from "./assets/plane.png";
import prog1 from "./assets/little-kid-playing.jpg";
import prog2 from "./assets/young-woman-doing-speech-therapy-with-kids.jpg";
import prog3 from "./assets/children-spending-time-together-comfort-their-home.jpg";
import clayday from "./assets/nationalclayday.jpg";
import independenceday from "./assets/independenceday.jpg";
import childrensday from "./assets/childrensday.jpg";
import animalday from "./assets/animalday.jpg";
import healthyandhygineday from "./assets/healthandhygieneday.jpg";
import internationalyogaday from "./assets/internationalyogaday.jpg";
import { Link } from "react-router";
import Aos from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you don't want animation
    });
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between pt-24">
        <div
          className="max-w-xl space-y-6 text-center md:text-left"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Welcome to
            <span className="text-yellow-300"> Dreamland Kids Play World</span>
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-10">
            A world of fun, creativity, and learning for your little ones. Where
            every child shines bright like a star ✨
          </p>
          <Link
            to="./admissions"
            className="bg-yellow-400 text-purple-900 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-md hover:bg-yellow-300 transition-transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>

        <div className="mt-10 md:mt-0 relative flex justify-center items-center">
          {/* Decorative star */}
          <img
            src={star}
            alt="Star"
            className="w-10 h-10 absolute top-5 left-0 animate-pulse"
          />
          <img
            src={star}
            alt="Star"
            className="w-5 h-5 absolute top-9 left-13 animate-pulse"
          />
          <img
            src={star}
            alt="Star"
            className="w-7 h-7 absolute top-16 left-5 animate-pulse"
          />
          <img
            src={plane}
            alt="Plane"
            className="w-14 h-10 absolute top-52 right-4 rotate-[200deg]"
          />
          {/* Decorative balloon */}
          <img
            src={baloon}
            alt="Baloon"
            className="w-auto h-45 absolute -top-5 left-80"
          />
          {/* Main image */}
          <img
            src={kid}
            alt="Happy Kids"
            className="h-[320px] md:h-[380px] drop-shadow-2xl relative z-20"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-20 flex flex-col md:flex-row items-center gap-10 pt-20">
        <img
          src={kid2}
          alt="About"
          className="h-72 rounded-2xl shadow-md"
          data-aos="fade-right"
        />
        <div className="max-w-lg space-y-8">
          <h2 className="text-3xl font-bold text-purple-800">About Us</h2>
          <p className="text-gray-700">
            At Dreamland Kids Play World, we nurture young minds with love and
            care. Our mission is to provide a safe, creative, and joyful
            environment where children can learn through play, explore their
            curiosity, and build a strong foundation for the future.
          </p>
          <Link
            to="./aboutus"
            className="text-yellow-400 bg-purple-800 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-purple-500 transition-transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-20 bg-gray-100 pt-20">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-xl transition-transform hover:scale-105"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={prog1}
              alt="Play"
              className="h-45 w-65 mx-auto mb-4 rounded-3xl"
            />
            <h3 className="font-bold text-xl text-purple-700">Fun & Play</h3>
            <p className="text-gray-600 mt-2">
              Engaging activities to boost creativity and motor skills.
            </p>
          </div>
          <div
            className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-xl transition-transform hover:scale-105"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={prog2}
              alt="Learn"
              className="h-45 w-65 mx-auto mb-4 rounded-3xl"
            />
            <h3 className="font-bold text-xl text-purple-700">
              Early Learning
            </h3>
            <p className="text-gray-600 mt-2">
              Interactive learning through stories, rhymes & games.
            </p>
          </div>
          <div
            className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-xl transition-transform hover:scale-105"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={prog3}
              alt="Activities"
              className="h-45 w-65 mx-auto mb-4 rounded-3xl"
            />
            <h3 className="font-bold text-xl text-purple-700">
              Creative Activities
            </h3>
            <p className="text-gray-600 mt-2">
              Art, music, dance & craft sessions to spark imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-2 pt-20">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Our Facilities
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
            <h3 className="font-bold text-xl text-purple-700">
              Safe Environment
            </h3>
            <p className="text-gray-600 mt-2">
              CCTV surveillance and secure campus for your child’s safety.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
            <h3 className="font-bold text-xl text-purple-700">
              Smart Classrooms
            </h3>
            <p className="text-gray-600 mt-2">
              Interactive boards and modern learning tools for young minds.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
            <h3 className="font-bold text-xl text-purple-700">Play Area</h3>
            <p className="text-gray-600 mt-2">
              Spacious indoor & outdoor play zones to ensure fun & fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-20 pt-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Why Choose Dreamland?
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl">
            <h3 className="font-bold text-lg text-purple-700">
              Experienced Teachers
            </h3>
            <p className="text-gray-600 mt-2">
              Friendly and qualified staff for every child’s growth.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl">
            <h3 className="font-bold text-lg text-purple-700">
              Creative Curriculum
            </h3>
            <p className="text-gray-600 mt-2">
              Play-based learning designed for curious young minds.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl">
            <h3 className="font-bold text-lg text-purple-700">Healthy Meals</h3>
            <p className="text-gray-600 mt-2">
              Nutritious snacks & meals to keep kids active & happy.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl">
            <h3 className="font-bold text-lg text-purple-700">
              Parent Involvement
            </h3>
            <p className="text-gray-600 mt-2">
              Regular updates, events & open communication with parents.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Event 1 */}
          <div
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 p-6 flex flex-col items-start"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              src="https://placehold.co/400x250"
              alt="Sports Day"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-purple-700">
              Annual Sports Day
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              A fun-filled day with exciting games and activities for children
              and parents.
            </p>
            <span className="mt-3 text-sm font-semibold text-yellow-600">
              📅 15th September 2025
            </span>
          </div>

          {/* Event 2 */}
          <div
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 p-6 flex flex-col items-start"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              src="https://placehold.co/400x250"
              alt="Festival Celebration"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-purple-700">
              Diwali Celebration
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Bright lights, cultural performances, and festive activities to
              celebrate together.
            </p>
            <span className="mt-3 text-sm font-semibold text-yellow-600">
              📅 5th November 2025
            </span>
          </div>

          {/* Event 3 */}
          <div
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 p-6 flex flex-col items-start"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              src="https://placehold.co/400x250"
              alt="Christmas Party"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-purple-700">
              Children's Day
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              A special day to celebrate our little stars with fun games,
              performances, and gifts 🎉
            </p>
            <span className="mt-3 text-sm font-semibold text-yellow-600">
              📅 14th November 2025
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-20 bg-gray-100 pt-20">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          What Parents Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 2 }, // desktop
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="max-w-6xl mx-auto px-4"
        >
          <SwiperSlide>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-600 italic">
                “Dreamland has been the best choice for my daughter. She loves
                the teachers and activities here. Every day she comes home
                excited to share what she learned, and I can see how much she’s
                growing both academically and personally.”
              </p>
              <h4 className="mt-4 font-bold text-purple-700">
                – Mrs. Harini, Parent
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-600 italic">
                “The environment is safe and nurturing. My son has grown more
                confident and social since joining Dreamland. The caring staff
                and fun-filled learning approach have helped him explore his
                creativity and make wonderful friends.”
              </p>
              <h4 className="mt-4 font-bold text-purple-700">
                – Mr. Arjun, Parent
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-600 italic">
                “Choosing Dreamland was one of the best decisions we made for
                our child. The play-based learning, combined with the supportive
                atmosphere, has helped her become curious, independent, and
                happy.”
              </p>
              <h4 className="mt-4 font-bold text-purple-700">
                – Mrs. Dhivya Manoj, Parent
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-600 italic">
                “Dreamland is not just a playschool, it’s like a second home for
                my child. The teachers are extremely loving, patient, and
                attentive. My little one has developed good habits, discipline,
                and most importantly, a love for learning. I feel reassured
                every day knowing she is in such safe and capable hands.”
              </p>
              <h4 className="mt-4 font-bold text-purple-700">
                – Mr. Akash Kumar, Parent
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-600 italic">
                “Dreamland provides a joyful, safe, and positive environment. My
                daughter has blossomed here—her imagination has grown, and she
                has picked up strong values like sharing, kindness, and
                teamwork. I couldn’t have asked for a better place for her early
                years.”
              </p>
              <h4 className="mt-4 font-bold text-purple-700">
                – Mrs. Varnika, Parent
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-20 pt-20">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Gallery
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="max-w-6xl mx-auto px-4"
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="relative w-full h-60">
              {/* Image with opacity */}
              <img
                src={clayday}
                alt="National Clay Day"
                className="rounded-xl shadow-md w-full h-60 object-cover opacity-80"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <h3 className="text-white text-lg md:text-xl font-bold py-2">
                  National Clay Day
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-60">
              {/* Image with opacity */}
              <img
                src={independenceday}
                alt="National Clay Day"
                className="rounded-xl shadow-md w-full h-60 object-cover opacity-80"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <h3 className="text-white text-lg md:text-xl font-bold py-2">
                  Independence Day
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-60">
              {/* Image with opacity */}
              <img
                src={childrensday}
                alt="Children's Day"
                className="rounded-xl shadow-md w-full h-60 object-cover opacity-80"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <h3 className="text-white text-lg md:text-xl font-bold py-2">
                  Children's Day
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-60">
              {/* Image with opacity */}
              <img
                src={animalday}
                alt="Animal Day"
                className="rounded-xl shadow-md w-full h-60 object-cover opacity-80"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <h3 className="text-white text-lg md:text-xl font-bold py-2">
                  Animal Day
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-60">
              {/* Image with opacity */}
              <img
                src={healthyandhygineday}
                alt="Health and Hygiene Day"
                className="rounded-xl shadow-md w-full h-60 object-cover opacity-80"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <h3 className="text-white text-lg md:text-xl font-bold py-2">
                  Health and Hygiene Day
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-60">
              {/* Image with opacity */}
              <img
                src={internationalyogaday}
                alt="National Clay Day"
                className="rounded-xl shadow-md w-full h-60 object-cover opacity-80"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                <h3 className="text-white text-lg md:text-xl font-bold py-2">
                  International Yoga Day
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
