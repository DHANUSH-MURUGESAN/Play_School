import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tabs from "./Tabs";
import children from "./assets/children.jpg";
import circle from "./assets/circle.png";
import boy from "./assets/boy.jpg";
import triangle from "./assets/triangle.png";
import background1 from "./assets/aboutusimg1.webp";
import background2 from "./assets/aboutusimg2.jpeg";

const About = () => {
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
      <section className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-12 text-center"
          >
            About Us
          </h2>

          {/* Section 1 */}
          <div
            className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16"
            data-aos="fade-right"
          >
            {/* Right Text */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 my-4">
                About Us – Dreamland Kids Preschool
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At{" "}
                <span className="font-semibold">Dreamland Kids Preschool</span>,
                we believe that the early years of a child’s life are the most
                important in shaping their personality and future. Every child
                is unique, and we are dedicated to creating a joyful, nurturing,
                and stimulating environment where little learners can explore,
                imagine, and discover the world around them. Our preschool goes
                beyond academics — it is a place where curiosity is encouraged,
                creativity is celebrated, and every child’s individuality is
                respected.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong focus on holistic development, we ensure that
                children grow intellectually, emotionally, socially, and
                physically. Our programs are carefully designed to balance
                structured learning with play, ensuring that children enjoy
                every moment of their journey. Whether it’s through fun
                activities, interactive storytelling, or hands-on experiences,
                we make learning exciting and meaningful. Our dedicated and
                caring teachers act as guides and mentors, helping children gain
                confidence and develop essential life skills.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over the years, Dreamland Kids has earned the trust of parents
                by providing a safe, inclusive, and inspiring environment. We
                pride ourselves on building a strong partnership with families,
                as we believe that education is a shared journey between parents
                and teachers. Together, we work to lay a solid foundation that
                empowers children to dream big, think independently, and embrace
                the joy of learning.
              </p>

              {/* Highlights */}
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Safe, secure, and child-friendly environment</li>
                <li>Play-based and experiential learning methodology</li>
                <li>Dedicated and caring team of educators</li>
                <li>Focus on creativity, curiosity, and confidence</li>
                <li>Strong foundation for future academic success</li>
              </ul>
            </div>
            {/* Left Images */}
            <div className="flex-1 grid grid-cols-1 gap-6">
              <img
                src={background1}
                alt="Dreamland Kids Preschool"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div
            className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16 mt-30"
            data-aos="fade-right"
          >
            {/* Left Image */}
            <div className="flex-1 grid grid-cols-1 gap-6">
              <img
                src={background2}
                alt="Dreamland Kids Preschool"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 my-4">
                Dreamland Kids Advantages
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Choosing the right preschool is one of the most important
                decisions for your child’s early years, and at{" "}
                <span className="font-semibold">Dreamland Kids Play World</span>
                , we provide advantages that set us apart. Our preschool is
                designed not only as a place of learning, but also as a second
                home where children feel safe, loved, and motivated to explore
                their full potential.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With carefully crafted programs and a child-first approach, we
                ensure every child receives individual attention and
                encouragement. Our play-based and experiential learning methods
                allow children to enjoy education while developing critical
                thinking, problem-solving, and creativity. In addition, we focus
                on values such as kindness, respect, and teamwork to help
                children grow into compassionate and confident individuals.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Dreamland advantage lies in our holistic development
                approach — we balance academics, creativity, physical activity,
                and emotional well-being. Parents choose us for our safe and
                hygienic facilities, modern classrooms, and a team of passionate
                teachers who treat every child with patience, care, and
                understanding. We believe education is not just about preparing
                children for school, but preparing them for life.
              </p>

              {/* Highlights */}
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Personalized attention for every child</li>
                <li>Play-based and activity-driven curriculum</li>
                <li>Safe, hygienic, and child-friendly infrastructure</li>
                <li>Qualified teachers with a nurturing approach</li>
                <li>
                  Balanced focus on academics, creativity, and life skills
                </li>
              </ul>
            </div>
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
