import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Icons (using react-icons, adjusted to match Cascade Space advantages)
import { FiCode, FiGlobe, FiEdit, FiHeadphones } from 'react-icons/fi';
import { GoRocket } from "react-icons/go";

export default function Cards() {
  // Animation variants
  const cardVariants = {
    initial: { y: 0 },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <section className="section margin_bottom_minus185">
      <div className="card_bg dark_blue">
        <div className="card_mover_line"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="text_cards_wrapper">
            <div className="added_advantages_content">
              <div className="added_advatages_text">
                <h2>Our Advantages:</h2>
                <p>
                  Cascade Space is transforming deep space exploration with innovative tools and infrastructure. Our expertise in spacecraft design and communications, combined with a user-centric approach, empowers missions beyond Earth. From the Cascade Portal’s validated software to our expanding ground station network, we’re building the backbone for lunar and deep space success.
                </p>
                <Link href="/contact-us" className="button_primary w-button">
                  Start Your Mission
                </Link>
              </div>
            </div>
            <div className="cards_wrapper">
              <div className="cards_column">
                <motion.div
                  className="card_wrapper dark_blue"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div className="card_icon" variants={iconVariants}>
                    <FiCode size={40} color="#fff" />
                  </motion.div>
                  <p>Streamlined spacecraft design with Cascade Portal’s RF Designer and Test Wizard.</p>
                </motion.div>

                <motion.div
                  className="card_wrapper dark_blue"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div className="card_icon" variants={iconVariants}>
                    <FiGlobe size={40} color="#fff" />
                  </motion.div>
                  <p>Reliable deep space communications via the Cascade Network’s global ground stations.</p>
                </motion.div>

                <motion.div
                  className="card_wrapper dark_blue"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div className="card_icon" variants={iconVariants}>
                    <FiEdit size={40} color="#fff" />
                  </motion.div>
                  <p>Shape mission-critical tools with our collaborative Feature Request System.</p>
                </motion.div>
              </div>

              <div className="cards_column">
                <motion.div
                  className="card_wrapper dark_blue"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div className="card_icon" variants={iconVariants}>
                    <GoRocket size={40} color="#fff" />
                  </motion.div>
                  <p>Future-ready with lunar coverage planned for 2027, starting with TLI in Q1 2026.</p>
                </motion.div>

                <motion.div
                  className="card_wrapper dark_blue"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div className="card_icon" variants={iconVariants}>
                    <FiHeadphones size={40} color="#fff" />
                  </motion.div>
                  <p>Expert support to ensure your deep space mission’s success, from design to launch.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="advantages_stars notouch">
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/videos/v.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="advantages_stars notouch">
          <img src="/cascade-space-logo.png" loading="lazy" alt="Cascade Space Logo" />
        </div>
      </div>

      <div id="about_card" className="card_bg middle_blue second">
        <div className="card_mover_line"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="section_heading textcolor_white">
            <div>ABOUT US</div>
          </div>
          <div className="about_wrapper">
            <div className="about_logo_button_wrapper">
              <motion.div
                className="about_logo_wrapper notouch"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="about_logo">
                  <Image
                    src="/images/logo.png"
                    loading="lazy"
                    width={392}
                    height={392}
                    alt="Cascade Space Logo"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 392px, 36vw"
                  />
                </div>
                <div className="about_logo_gradient"></div>
              </motion.div>
              <Link href="/about" className="button_primary w-button">
                Learn Our Mission
              </Link>
            </div>
            <div className="about_text_wrapper">
              <p>
                Cascade Space is pioneering deep space communications with the Cascade Portal and Network, backed by Y Combinator and Undeterred Capital.
              </p>
              <p className="text_20px">
                Our team of aerospace experts, engineers, and innovators is dedicated to simplifying spacecraft design and communications for lunar and deep space missions, empowering the next era of exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}