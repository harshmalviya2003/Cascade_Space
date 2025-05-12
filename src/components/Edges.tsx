"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRocket, FaSatellite, FaUsers } from "react-icons/fa";

export default function Edges() {
  const [activeTab, setActiveTab] = useState("Innovation");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <section className="py-16 bg-white" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={leftVariants} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            Why <span className="text-[#3b7baa]">Choose</span> Cascade Space
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div variants={leftVariants} className="md:w-1/3">
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                    activeTab === tab.name
                      ? "bg-[#3b7baa] text-white shadow-lg"
                      : "bg-white text-indigo-900 hover:bg-indigo-100"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center transition-colors ${
                      activeTab === tab.name ? "text-white" : "text-[#3b7baa]"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <span className="font-semibold">{tab.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Conditionally render right side only when inView is true */}
          {inView && (
            <motion.div
              variants={rightVariants}
              initial="hidden"
              animate="visible"
              className="md:w-2/3"
            >
              <AnimatePresence mode="wait">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.name && (
                      <motion.div
                        key={tab.name}
                        variants={tabContentVariants}
                        style={{ willChange: "transform, opacity" }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-white p-6 rounded-lg shadow-xl h-full"
                      >
                        <div className="flex flex-col md:flex-row gap-6 h-full">
                          <div className="w-full md:w-1/3 flex items-center justify-center">
                            <motion.div
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", bounce: 0.5 }}
                              className="text-[#3b7baa] text-6xl"
                            >
                              {tab.icon}
                            </motion.div>
                          </div>
                          <div className="md:w-2/3 flex flex-col justify-between">
                            <p className="text-gray-700 mb-4">{tab.content}</p>
                            <Link
                              href={tab.link}
                              className="inline-block px-6 py-2 bg-[#3b7baa] text-white rounded-full hover:bg-indigo-700 transition-colors self-start"
                            >
                              {tab.linkText}
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}