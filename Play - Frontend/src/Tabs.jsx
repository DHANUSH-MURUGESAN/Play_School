import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("legacy");

  const tabClasses = (tab) =>
    `px-4 py-2 rounded-lg font-semibold transition-all duration-300 
     ${
       activeTab === tab
         ? "bg-purple-700 text-white shadow-md scale-105"
         : "text-gray-800 hover:text-purple-700 hover:bg-purple-200"
     }`;

  return (
    <div className="p-6 overflow-auto">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setActiveTab("legacy")}
          className={tabClasses("legacy")}
        >
          Legacy
        </button>

        <button
          onClick={() => setActiveTab("advantage")}
          className={tabClasses("advantage")}
        >
          Dreamland Kids Advantage
        </button>

        <button
          onClick={() => setActiveTab("vision")}
          className={tabClasses("vision")}
        >
          Vision & Mission
        </button>

        <button
          onClick={() => setActiveTab("awards")}
          className={tabClasses("awards")}
        >
          Awards & Recognition
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-purple-100 p-6 rounded-xl shadow-lg transition-all duration-500">
        {/* Legacy */}
        {activeTab === "legacy" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">Legacy</h2>
            <p className="text-gray-700">
              Legacy content goes here. Add your history, background, and brand
              journey details.
            </p>
          </div>
        )}

        {/* Dreamland Kids Advantage */}
        {activeTab === "advantage" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              Dreamland Kids Advantage
            </h2>
            <p className="text-gray-700 mb-4">
              "Ranked amongst the top 100 franchise opportunities by Franchise
              India for 2022, we are the experts in Early Childhood Care and
              Education."
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Focus on What is Right for the Child.</li>
              <li>Safety and security is a priority.</li>
              <li>Integrated Pentemind Curriculum</li>
              <li>I Care and ECE trained facilitators</li>
              <li>An innovative pedagogy aligned to NEP 2020.</li>
              <li>Dreamland Kids App</li>
            </ul>
          </div>
        )}

        {/* Vision & Mission */}
        {activeTab === "vision" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              Vision & Mission
            </h2>
            <p className="text-gray-700">
              Vision & Mission content goes here. Add your organization’s goals
              and values.
            </p>
          </div>
        )}

        {/* Awards & Recognition */}
        {activeTab === "awards" && (
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
              Awards & Recognition
            </h2>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-green-400 text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
                <div className="text-lg font-semibold">
                  Innovation and Excellence
                </div>
                <div className="text-sm mt-2">Year 2022</div>
                <p className="mt-4 text-sm">
                  "Innovation and Excellence in Early Education and Child
                  Development" at National Glory Award Ceremony 2022
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
                <div className="text-lg font-semibold">
                  Best Pre-school Brand Of The
                </div>
                <div className="text-sm mt-2">Year 2017</div>
                <p className="mt-4 text-sm">
                  "Best Pre-school Brand Of The Year 2017" at National Education
                  Excellence Awards by Praxis Media
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
                <div className="text-lg font-semibold">Social Impact Award</div>
                <div className="text-sm mt-2">Year 2018</div>
                <p className="mt-4 text-sm">
                  "Social Impact Award - 2018" at Constitution Club of India for
                  creating young women entrepreneurs through their unique
                  affordable business model
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-yellow-400 text-black p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
                <div className="text-lg font-semibold">
                  Most Promising Pre-School
                </div>
                <div className="text-sm mt-2">Year 2016</div>
                <p className="mt-4 text-sm">
                  "Most Promising Pre-School in Goa - 2016" at the Pearl Blue
                  Excellence Award Ceremony, New Delhi
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
