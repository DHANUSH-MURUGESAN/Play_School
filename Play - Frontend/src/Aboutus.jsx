import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tabs from "./Tabs";
import children from "./assets/children.jpg";
import circle from "./assets/circle.png";
import boy from "./assets/boy.jpg";
import triangle from "./assets/triangle.png";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you don't want animation
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-10 text-center"
          >
            About Us
          </h2>

          <div className="mb-12" data-aos="fade-right">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Dreamland Kids Preschool
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dreamland Kids Preschool is a leading chain of preschools located
              in India and Nepal backed by Zee Learn Ltd. With more than two
              decades of experience in the preschool industry, Dreamland Kids
              has nurtured more than 1.5 million children throughout India.
              Being one of the largest preschools in India, Dreamland Kids has
              2000+ centres in 750+ cities in India and Nepal.
            </p>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Dreamland Kids Advantage
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dreamland Kids is a{" "}
              <span className="font-bold text-purple-700">leader</span> and a
              trendsetter in{" "}
              <span className="font-bold text-purple-700">
                Early Childhood Care and Education (ECCE)
              </span>
              . Our business partners’ passion and drive are vital for our
              brand's success.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our Business Partners don’t just take the name, they also take our{" "}
              <span className="font-bold text-purple-700">
                pedagogy– PÉNTEMiND
              </span>
              , guidelines to teach, prescribes books/plays to be followed and
              so on to the ground.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Starting a preschool requires strategic researching, planning,
              designing, and organising.{" "}
              <span className="font-bold text-purple-700">
                Dreamland Kids Professional research
              </span>
              , makes this journey easier and rewarding for all our Business
              Partners.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-purple-700">
                Secret to Success is Service and Support.
              </span>{" "}
              We provide pre–opening and operational support apart from the
              regular support that is given additional to all systems and
              process.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-tr from-purple-50 via-blue-50 to-pink-50 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-6"
          >
            Why Choose Dreamland Kids Preschool?
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-700 max-w-3xl mx-auto mb-14"
          >
            Dreamland Kids Preschool is your experienced trusted partner in
            providing exceptional early education for your child. Here's why
            Dreamland Kids stands out as the preferred choice for parents
            seeking the best for their little ones.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div
              data-aos="zoom-in"
              className="text-center p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-44 h-44 mx-auto flex items-center justify-center mb-4">
                <img
                  src={children}
                  alt="Holistic Learning"
                  className="w-40 h-40 object-cover rounded-lg shadow-md transition transform hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Holistic Learning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fostering allround development through a balanced blend of
                academics, play, and life skills.
              </p>
            </div>

            {/* Card 2 */}
            <div
              data-aos="zoom-in"
              className="text-center p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-44 h-44 mx-auto flex items-center justify-center mb-4">
                <img
                  src={circle}
                  alt="Expert Educators"
                  className="w-40 h-40 object-cover rounded-full border-4 border-dashed border-yellow-400 transition transform hover:rotate-6 cursor-pointer"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Expert Educators
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Skilled teachers dedicated to nurturing every child’s unique
                potential.
              </p>
            </div>

            {/* Card 3 */}
            <div
              data-aos="zoom-in"
              className="text-center p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-44 h-44 mx-auto flex items-center justify-center mb-4">
                <img
                  src={boy}
                  alt="Safe and Secure"
                  className="w-40 h-40 object-cover rounded-lg shadow-md transform -rotate-3 transition hover:rotate-0 cursor-pointer"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Safe and Secure
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A protected, child–friendly environment ensuring safety and
                peace of mind.
              </p>
            </div>

            {/* Card 4 */}
            <div
              data-aos="zoom-in"
              className="text-center p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-44 h-44 mx-auto flex items-center justify-center mb-4">
                <img
                  src={triangle}
                  alt="Innovative Learning"
                  className="w-40 h-40 object-cover transition transform hover:scale-110 cursor-pointer"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Innovative Learning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engaging, modern teaching methods that make learning fun and
                impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <Tabs />
    </>
  );
};

export default About;
