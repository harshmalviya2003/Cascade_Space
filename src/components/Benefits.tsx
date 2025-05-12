"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTools, FaSatellite, FaUsers, FaRocket, FaStar } from "react-icons/fa"; // Updated icons

export default function Benefits() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Define dropdowns with icons
  const dropdowns = [
    {
      name: "efficient",
      icon: <FaTools className="w-6 h-6 text-white" />,
      text: "Cascade Portal streamlines spacecraft design with RF Designer and Test Wizard, saving time and ensuring mission-ready systems.",
    },
    {
      name: "reliable",
      icon: <FaSatellite className="w-6 h-6 text-white" />,
      text: "The Cascade Network provides robust ground station support, ensuring uninterrupted communications for deep space missions.",
    },
    {
      name: "collaborative",
      icon: <FaUsers className="w-6 h-6 text-white" />,
      text: "Our Feature Request System lets you shape mission-critical tools, prioritizing features that matter most to your project.",
    },
    {
      name: "future-ready",
      icon: <FaRocket className="w-6 h-6 text-white" />,
      text: "With plans for Trans-Lunar Injection by Q1 2026 and 24/7 lunar coverage by 2027, we’re building the future of space exploration.",
    },
    {
      name: "expert-led",
      icon: <FaStar className="w-6 h-6 text-white" />,
      text: "Backed by Y Combinator and Undeterred Capital, our team of aerospace experts delivers proven solutions for lunar and deep space missions.",
    },
  ];

  // Animation variants
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dropdownAnimation = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="section mt-20 bg-white"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="w-layout-blockcontainer container w-container">
        <motion.div className="benefits_content_wrapper" variants={container}>
          <motion.div
            className="section_heading"
            variants={slideLeft}
            style={{ color: "#3B7BAA" }}
          >
            <div>Why Cascade Space</div>
          </motion.div>
          <motion.div className="benefits_heading_wrapper" variants={slideRight}>
            <h2 className="text-black">
              Powering lunar and deep space missions with innovative tools and infrastructure.<br />
              <span className="text-gray-500">
                From spacecraft design to reliable communications, we’ve got you covered.
              </span>
            </h2>
          </motion.div>
          <motion.div className="gradient_cards_wrapper" variants={container}>
            <motion.div
              className="gradient_card"
              variants={slideLeft}
              style={{
                background: "linear-gradient(135deg, #3B7BAA 0%, #ffffff 100%)",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div className="benefits_card_content">
                <div className="benefits_card_number" style={{ color: "#ffffff" }}>
                  Global
                </div>
                <div className="text-white">
                  Connect anywhere with our expanding Cascade Network of ground stations.
                </div>
              </div>
            </motion.div>
            <motion.div
              className="gradient_card second"
              variants={slideRight}
              style={{
                background: "linear-gradient(135deg, #3B7BAA 0%, #ffffff 100%)",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div className="benefits_card_content">
                <div className="benefits_card_number" style={{ color: "#ffffff" }}>
                  Days
                </div>
                <div className="text-white">
                  Design spacecraft in days with Cascade Portal’s validated tools.
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="benefits_cta_wrapper" variants={slideLeft}>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-2 bg-[#3B7BAA] text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              Start Your Mission
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="card_grey" style={{ backgroundColor: "#f9fafb" }}>
        <div className="w-layout-blockcontainer container w-container">
          <motion.div className="benefits_dropdown_faq_wrapper" variants={container}>
            <motion.div className="benefits_dropdown_heading" variants={slideLeft}>
              <p className="text-gray-700">
                Cascade Space delivers cutting-edge solutions for spacecraft design and reliable communications, empowering
                your mission to the Moon and beyond.
              </p>
            </motion.div>
            <motion.div className="benefits_all_dropdowns_wrapper" variants={container}>
              {dropdowns.map((dropdown) => (
                <div
                  key={dropdown.name}
                  className={`benefits_dropdown_wrapper w-dropdown ${
                    openDropdown === dropdown.name ? "w--open" : ""
                  }`}
                >
                  <motion.div
                    className="benefits_dropdown_toggle w-dropdown-toggle"
                    onClick={() => toggleDropdown(dropdown.name)}
                    variants={slideRight}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      borderBottom: openDropdown === dropdown.name ? "2px solid #3B7BAA" : "1px solid #e5e7eb",
                    }}
                  >
                    <div
                      className="tab_active_icon flex items-center justify-center"
                      style={{
                        width: openDropdown === dropdown.name ? "40px" : "0px",
                        backgroundColor: "#3B7BAA",
                      }}
                    >
                      {openDropdown === dropdown.name && dropdown.icon}
                    </div>
                    <div className="dropdown_heading">
                      <div style={{ color: openDropdown === dropdown.name ? "#3B7BAA" : "#000000" }}>
                        {dropdown.name.charAt(0).toUpperCase() + dropdown.name.slice(1)}
                      </div>
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {openDropdown === dropdown.name && (
                      <motion.div
                        className="benefits_dropdown_list w-dropdown-list"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownAnimation}
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #3B7BAA",
                          borderRadius: "4px",
                          padding: "10px",
                        }}
                      >
                        <p className="text-gray-700">{dropdown.text}</p>
                        <div className="s10"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}