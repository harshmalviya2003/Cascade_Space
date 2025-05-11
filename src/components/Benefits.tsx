import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBolt, FaShieldAlt, FaCog, FaRocket, FaLock } from 'react-icons/fa'; // Import icons

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
      name: 'fast',
      icon: <FaBolt className="w-6 h-6 text-white" />,
      text: "AKARI's software handles high-load scenarios, processing over 300 transactions per second on our independent platform.",
    },
    {
      name: 'stable',
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
      text: "We ensure 24/7 stability with AWS, trusted by major global banks for top-tier reliability.",
    },
    {
      name: 'flexible',
      icon: <FaCog className="w-6 h-6 text-white" />,
      text: "AKARI's payment gateway adapts to any business need, integrating with BI, CRM, and ERP systems for comprehensive analytics.",
    },
    {
      name: 'modern',
      icon: <FaRocket className="w-6 h-6 text-white" />,
      text: "Our e-commerce payment software is regularly updated with new features and integrations tailored to your business.",
    },
    {
      name: 'secure',
      icon: <FaLock className="w-6 h-6 text-white" />,
      text: "AKARI complies with PCI DSS Level 1 standards through rigorous annual audits, ensuring secure payment processing.",
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
    hidden: { height: 0, opacity: 0, overflow: 'hidden' },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="section mt-20 bg-white"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="w-layout-blockcontainer container w-container">
        <motion.div className="benefits_content_wrapper" variants={container}>
          <motion.div
            className="section_heading"
            variants={slideLeft}
            style={{ color: '#3B7BAA' }}
          >
            <div>Our Benefits</div>
          </motion.div>
          <motion.div className="benefits_heading_wrapper" variants={slideRight}>
            <h2 className="text-black">
              AKARI - A reliable, cutting-edge platform for your business!<br />
              <span className="text-gray-500">
                When it comes to payment processing, technology and speed are paramount.
              </span>
            </h2>
          </motion.div>
          <motion.div className="gradient_cards_wrapper" variants={container}>
            <motion.div
              className="gradient_card"
              variants={slideLeft}
              style={{
                background: 'linear-gradient(135deg, #3B7BAA 0%, #ffffff 100%)',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <div className="benefits_card_content">
                <div className="benefits_card_number" style={{ color: '#ffffff' }}>
                  24/7
                </div>
                <div className="text-white">
                  Guaranteed stable work leveraging the robust capacities of AWS.
                </div>
              </div>
            </motion.div>
            <motion.div
              className="gradient_card second"
              variants={slideRight}
              style={{
                background: 'linear-gradient(135deg, #3B7BAA 0%, #ffffff 100%)',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <div className="benefits_card_content">
                <div className="benefits_card_number" style={{ color: '#ffffff' }}>
                  300/second
                </div>
                <div className="text-white">
                  Transactions managed by our high-capacity platform.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="card_grey" style={{ backgroundColor: '#f9fafb' }}>
        <div className="w-layout-blockcontainer container w-container">
          <motion.div className="benefits_dropdown_faq_wrapper" variants={container}>
            <motion.div className="benefits_dropdown_heading" variants={slideLeft}>
              <p className="text-gray-700">
                With AKARI&apos;s advanced payment technologies, rest assured of a reliable system for a stable and profitable business.
              </p>
            </motion.div>
            <motion.div className="benefits_all_dropdowns_wrapper" variants={container}>
              {dropdowns.map((dropdown) => (
                <div
                  key={dropdown.name}
                  className={`benefits_dropdown_wrapper w-dropdown ${
                    openDropdown === dropdown.name ? 'w--open' : ''
                  }`}
                >
                  <motion.div
                    className="benefits_dropdown_toggle w-dropdown-toggle"
                    onClick={() => toggleDropdown(dropdown.name)}
                    variants={slideRight}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      borderBottom: openDropdown === dropdown.name ? '2px solid #3B7BAA' : '1px solid #e5e7eb',
                    }}
                  >
                    <div
                      className="tab_active_icon flex items-center justify-center"
                      style={{
                        width: openDropdown === dropdown.name ? '40px' : '0px',
                        backgroundColor: '#3B7BAA',
                      }}
                    >
                      {openDropdown === dropdown.name && dropdown.icon}
                    </div>
                    <div className="dropdown_heading">
                      <div style={{ color: openDropdown === dropdown.name ? '#3B7BAA' : '#000000' }}>
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
                          backgroundColor: '#ffffff',
                          border: '1px solid #3B7BAA',
                          borderRadius: '4px',
                          padding: '10px',
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