"use client";
import { useState } from "react";
import Link from "next/link";
import { FaRocket, FaSatellite, FaUsers } from "react-icons/fa";

export default function Edges() {
  const [activeTab, setActiveTab] = useState("Innovation");

  const tabs = [
    {
      name: "Innovation",
      icon: <FaRocket className="w-6 h-6" />,
      content:
        "Our Cascade Portal empowers spacecraft design with validated tools like RF Designer and Test Wizard, plus a collaborative Feature Request System to prioritize your mission's needs.",
      link: "/cascade-portal",
      linkText: "Explore Cascade Portal",
    },
    {
      name: "Infrastructure",
      icon: <FaSatellite className="w-6 h-6" />,
      content:
        "The Cascade Network delivers robust ground station support for deep space missions, with plans for Trans-Lunar Injection by Q1 2026 and 24/7 lunar coverage by 2027.",
      link: "/cascade-network",
      linkText: "Discover Cascade Network",
    },
    {
      name: "Expertise",
      icon: <FaUsers className="w-6 h-6" />,
      content:
        "Backed by Y Combinator and Undeterred Capital, our team specializes in simplifying communications for lunar and deep space missions, ensuring your project's success.",
      link: "/missions",
      linkText: "Learn About Our Missions",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why <span className="text-[#3B7BAA]">Choose</span> Cascade Space
          </h2>
        </div>

        {/* Tabbed Interface */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Tab Buttons */}
          <div className="md:w-1/3 flex-shrink-0">
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                    activeTab === tab.name
                      ? "bg-[#3B7BAA] text-white shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-indigo-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center ${
                      activeTab === tab.name ? "text-white" : "text-[#3B7BAA]"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <span className="font-semibold text-sm sm:text-base">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3">
            {tabs.map(
              (tab) =>
                activeTab === tab.name && (
                  <div
                    key={tab.name}
                    className="bg-white p-6 rounded-lg shadow-lg h-full"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 h-full">
                      {/* Icon */}
                      <div className="w-full sm:w-1/3 flex items-center justify-center">
                        <div className="text-[#3B7BAA] text-5xl sm:text-6xl">
                          {tab.icon}
                        </div>
                      </div>
                      {/* Content and Link */}
                      <div className="w-full sm:w-2/3 flex flex-col justify-between">
                        <p className="text-gray-600 text-sm sm:text-base mb-4">{tab.content}</p>
                        <Link
                          href={tab.link}
                          className="inline-block px-6 py-2 bg-[#3B7BAA] text-white rounded-full  duration-300 text-sm sm:text-base"
                        >
                          {tab.linkText}
                        </Link>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}