"use client";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function NotFound() {
  // Animation variants remain unchanged
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "backOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Cascade Space</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to Cascade Space's homepage to explore deep space communications."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex flex-col min-h-screen w-full bg-black">

        <main
          className="flex-grow mt-40 md:ml-80 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
          role="alert"
        >
          <motion.div
            className="text-center w-full max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-12" variants={itemVariants}>
              <motion.div
                className="text-[#3B7BAA] mb-8"
                animate="float"
                whileHover="hover"
                aria-hidden="true"
              >
                <FaRocket className="w-20 h-20 mx-auto" />
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3B7BAA] to-[#6BB5E8]"
                variants={itemVariants}
              >
                Lost in Deep Space?
              </motion.h1>

              <motion.p
                className="text-gray-600 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Error 404: The page you&apos;re looking for has drifted into the cosmic void. Let&apos;s navigate you back to mission control!
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/"
                  className="inline-block bg-gradient-to-r from-[#3B7BAA] to-[#6BB5E8] text-white py-4 px-10 rounded-full uppercase font-bold text-sm tracking-wider hover:opacity-90 transition-opacity shadow-lg hover:shadow-[#3B7BAA]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7BAA] focus-visible:ring-offset-2 ring-offset-black"
                  aria-label="Return to Cascade Space homepage"
                >
                  Back to Home
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/contact-us"
                  className="inline-block bg-transparent border-2 border-[#3B7BAA] text-[#3B7BAA] py-4 px-10 rounded-full uppercase font-bold text-sm tracking-wider hover:bg-[#3B7BAA] hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7BAA] focus-visible:ring-offset-2 ring-offset-black"
                  aria-label="Contact Cascade Space support"
                >
                  Contact Support
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </main>

      </div>
    </>
  );
}