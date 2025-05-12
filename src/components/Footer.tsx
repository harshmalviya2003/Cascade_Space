import Link from "next/link";
import {
  FaEnvelope,
  FaTwitter,
  FaTools,
  FaSatellite,
  FaUsers,
  FaRocket,
  FaInfoCircle,
  FaPhone,
  FaStar,
} from "react-icons/fa"; // Updated icons for Solutions and Company

export default function Footer() {
  const solutions = [
    { name: "Cascade Portal", href: "/cascade-portal", icon: <FaTools className="w-4 h-4" /> },
    { name: "Cascade Network", href: "/cascade-network", icon: <FaSatellite className="w-4 h-4" /> },
    { name: "Feature Requests", href: "/resources#feature-requests", icon: <FaUsers className="w-4 h-4" /> },
    { name: "Lunar Roadmap", href: "/missions", icon: <FaRocket className="w-4 h-4" /> },
  ];

  const company = [
    { name: "About Cascade Space", href: "/about", icon: <FaInfoCircle className="w-4 h-4" /> },
    { name: "Contact Us", href: "/contact-us", icon: <FaPhone className="w-4 h-4" /> },
    { name: "Missions", href: "/missions", icon: <FaStar className="w-4 h-4" /> },
  ];

  return (
    <div>
      <div className=""></div>
      <footer className="footer-section bg-gradient-to-b from-[#000000] to-[#0A0E22] text-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <div className="text-xl font-semibold text-white mb-5 tracking-wider">READY TO LAUNCH</div>
            <div className="mb-10">
              <div className="mb-5">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Launch Your Deep Space Mission<br />
                  <span className="opacity-80 font-normal">with Cascade Space</span>
                </h2>
              </div>
              <Link
                href="/contact-us"
                className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full uppercase font-semibold text-sm hover:bg-blue-600 transition-colors"
              >
                START YOUR MISSION
              </Link>
            </div>

            {/* Three-column layout */}
            <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl my-10 gap-8">
              {/* Contacts Section */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold uppercase mb-4 tracking-wider">CONTACTS</h3>
                <p className="text-gray-400 mb-2">info@cascadespace.com</p>
                <p className="text-gray-400 mb-3">+1-800-CASCADE</p>
                <div className="flex gap-3">
                  <Link href="mailto:info@cascadespace.com" className="transition-transform hover:scale-110">
                    <FaEnvelope className="w-6 h-6 text-gray-400 hover:text-white" />
                  </Link>
                  <Link href="https://x.com/cascadespace" className="transition-transform hover:scale-110">
                    <FaTwitter className="w-6 h-6 text-gray-400 hover:text-white" />
                  </Link>
                </div>
              </div>

              {/* Solutions Section */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold uppercase mb-4 tracking-wider">SOLUTIONS</h3>
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 mb-2 hover:text-white transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Company Section */}
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold uppercase mb-4 tracking-wider">COMPANY</h3>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 mb-2 hover:text-white transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination Dots (Decorative) */}
            <div className="flex justify-center gap-2 mb-10">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>

            {/* Bottom Links and Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full pt-5 border-t border-white/10">
              <div className="text-gray-400 text-sm mb-5 md:mb-0">
                <p>© Design By DesignsVerse, 2025</p>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 text-sm hover:text-white transition-colors uppercase"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="text-gray-400 text-sm hover:text-white transition-colors uppercase"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-400 text-sm hover:text-white transition-colors uppercase"
                >
                  Cookies
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-400 text-sm hover:text-white transition-colors uppercase"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}