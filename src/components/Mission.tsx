"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import {
  FaRocket,
  FaSatellite,
  FaMicrochip,
  FaWifi,
  FaFlask,
  FaCheckCircle,
  FaTools,
  FaVoteYea,
  FaChartLine,
  FaNetworkWired,
  FaCodeBranch,
} from "react-icons/fa";
import { GiSpaceship, GiSatelliteCommunication, GiProcessor } from "react-icons/gi";
import { BsStars, BsCpu, BsLightningCharge } from "react-icons/bs";

export default function PremiumProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Mobile breakpoint at 640px
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create cosmic particles (optimized for mobile)
    const createParticles = () => {
      if (!particlesRef.current) return;

      particlesRef.current.innerHTML = "";
      const particleCount = isMobile ? 20 : 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute rounded-full bg-[#3B7BAA]";

        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 8;

        gsap.set(particle, {
          width: `${size}px`,
          height: `${size}px`,
          left: `${posX}%`,
          top: `${posY}%`,
          opacity: 0,
          scale: 0,
        });

        gsap.to(particle, {
          opacity: Math.random() * 0.4 + 0.2,
          scale: 1,
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        particlesRef.current.appendChild(particle);
      }
    };

    // Create particles on mount
    createParticles();

    // Desktop-specific animations (horizontal scroll)
    if (!isMobile) {
      const panels = gsap.utils.toArray(".panel") as HTMLElement[];
      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          end: () => `+=${containerRef.current?.offsetWidth || window.innerWidth * panels.length}`,
          markers: false,
        },
      });

      // RF Designer Box Animation
      gsap.to(".rf-box", {
        boxShadow: "0 0 30px rgba(59, 123, 170, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".rf-box",
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reset",
        },
      });

      // Test Wizard Box Animation (same as RF Designer)
      gsap.to(".test-box", {
        boxShadow: "0 0 30px rgba(59, 123, 170, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".test-box",
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reset",
        },
      });

      // Feature Request System Box Animation (same as RF Designer)
      gsap.to(".design-box", {
        boxShadow: "0 0 30px rgba(59, 123, 170, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-box",
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(".cascade-text", {
        opacity: 1,
        duration: 1,
        visibility: "visible",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".cascade-section",
          containerAnimation: scrollTween,
          start: "left 60%",
        },
      });
    } else {
      // Mobile-specific animations (vertical scroll)
      // RF Designer Box Animation
      gsap.to(".rf-box", {
        boxShadow: "0 0 30px rgba(59, 123, 170, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".rf-box",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      // Test Wizard Box Animation (same as RF Designer)
      gsap.to(".test-box", {
        boxShadow: "0 0 30px rgba(59, 123, 170, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".test-box",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      // Feature Request System Box Animation (same as RF Designer)
      gsap.to(".design-box", {
        boxShadow: "0 0 30px rgba(59, 123, 170, 0.7)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".design-box",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(".cascade-text", {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".cascade-section",
          start: "top 60%",
        },
      });
    }

    // Force ScrollTrigger refresh after setup
    setTimeout(() => ScrollTrigger.refresh(), 100);

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Cosmic Background */}
      <div ref={particlesRef} className="fixed inset-0 z-0 pointer-events-none" />

      {isMobile ? (
        // Mobile View (Vertical Grid Layout)
        <div className="relative z-10 box-border">
          {/* Cascade Portal Section */}
          <section className="min-h-screen w-full py-16 px-4 sm:px-8">
            <div className="w-full max-w-7xl mx-auto">
              <div className="mb-20">
                <div className="flex justify-center mb-12">
                  <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                    <GiSpaceship className="text-5xl text-[#3B7BAA]" />
                  </div>
                </div>
                <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white text-center">
                  <span className="text-[#3B7BAA]">Cascade</span> Portal
                </h1>
                <p className="cascade-text text-base sm:text-lg md:text-xl text-gray-300 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
                  Streamline spacecraft design for lunar and deep space missions with validated tools, seamless{" "}
                  <span className="text-[#3B7BAA]">Cascade Network</span> integration, and automated test plans—all in one platform.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
                {/* RF Designer Box */}
                <div className="rf-box bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                      <GiSatelliteCommunication className="text-5xl text-[#3B7BAA]" />
                    </div>
                  </div>
                  <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4 text-center">RF System Design</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">RF Designer</h2>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Design spacecraft RF systems optimized for high-latency, long-range deep space communications using commercially available components and link margin tools.
                  </p>
                  <div className="w-full bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#3B7BAA] mb-6">
                    <div className="flex items-center mb-3">
                      <FaNetworkWired className="text-[#3B7BAA] mr-2" />
                      <h4 className="font-semibold text-lg text-white">Component Library</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">Access verified commercial components</p>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-center">
                        <BsLightningCharge className="mr-2 text-[#3B7BAA]" /> Transceivers & Amplifiers
                      </li>
                      <li className="flex items-center">
                        <FaWifi className="mr-2 text-[#3B7BAA]" /> Antennas & Filters
                      </li>
                      <li className="flex items-center">
                        <GiProcessor className="mr-2 text-[#3B7BAA]" /> Power Management
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/cascade-portal#rf-designer"
                      className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
                    >
                      <FaTools className="mr-2" /> Start Designing
                    </Link>
                  </div>
                </div>

                {/* Test Wizard Box */}
                <div className="test-box bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                      <FaFlask className="text-5xl text-[#3B7BAA]" />
                    </div>
                  </div>
                  <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4 text-center">Testing Suite</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Test Wizard</h2>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Create test plans tailored for lunar and deep space missions from proven templates. Automate verification with comprehensive test cases and documentation.
                  </p>
                  <div className="w-full bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#3B7BAA] mb-6">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-[#3B7BAA] mr-2" />
                      <h4 className="font-semibold text-lg text-white">Test Templates</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">Comprehensive test libraries</p>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-center">
                        <FaSatellite className="mr-2 text-[#3B7BAA]" /> Pre-flight Validation
                      </li>
                      <li className="flex items-center">
                        <FaMicrochip className="mr-2 text-[#3B7BAA]" /> Component Testing
                      </li>
                      <li className="flex items-center">
                        <FaCodeBranch className="mr-2 text-[#3B7BAA]" /> System Integration
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/cascade-portal#test-wizard"
                      className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
                    >
                      <FaChartLine className="mr-2" /> Explore Templates
                    </Link>
                  </div>
                </div>

                {/* Feature Request System Box */}
                <div className="design-box bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                      <FaVoteYea className="text-5xl text-[#3B7BAA]" />
                    </div>
                  </div>
                  <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4 text-center">User Collaboration</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Feature Request System</h2>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Shape the future of space tech with our Feature Request System. Vote on and prioritize tools to accelerate your lunar and deep space missions.
                  </p>
                  <div className="w-full bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#3B7BAA] mb-6">
                    <div className="flex items-center mb-3">
                      <FaVoteYea className="text-[#3B7BAA] mr-2" />
                      <h4 className="font-semibold text-lg text-white">Feature Voting</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">Shape our roadmap</p>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-center">
                        <FaVoteYea className="mr-2 text-[#3B7BAA]" /> Vote on New Features
                      </li>
                      <li className="flex items-center">
                        <FaTools className="mr-2 text-[#3B7BAA]" /> Suggest Improvements
                      </li>
                      <li className="flex items-center">
                        <FaChartLine className="mr-2 text-[#3B7BAA]" /> Track Development
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/resources#feature-requests"
                      className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
                    >
                      <FaCodeBranch className="mr-2" /> Join Development
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                <Link
                  href="/cascade-portal"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-[#3B7BAA]/50"
                >
                  <FaRocket className="mr-2" /> Discover Portal
                </Link>
                <Link
                  href="/missions"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#3B7BAA] text-[#3B7BAA] hover:text-white hover:bg-[#3B7BAA]/20 font-semibold rounded-full transition-all transform hover:scale-105"
                >
                  <BsStars className="mr-2" /> Explore Missions
                </Link>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          {/* <section className="relative py-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-black z-10 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                  <GiSpaceship className="text-5xl text-[#3B7BAA]" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Launch Your <span className="text-[#3B7BAA]">Deep Space</span> Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Join innovators using Cascade Portal and our expanding ground station network to power missions beyond Earth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-[#3B7BAA]/50"
                >
                  <FaRocket className="mr-2" /> Contact Us
                </Link>
                <Link
                  href="/cascade-network"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-transparent border-2 border-[#3B7BAA] text-[#3B7BAA] hover:text-white hover:bg-[#3B7BAA]/20 font-semibold rounded-full transition-all transform hover:scale-105"
                >
                  <BsStars className="mr-2" /> Explore Cascade Network
                </Link>
              </div>
            </div>
          </section> */}
        </div>
      ) : (
        // Desktop View (Horizontal Scrolling)
        <div ref={containerRef} className="relative h-screen w-[400%] flex z-10 box-border">
          {/* Cascade Portal Panel */}
          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8 opacity-100">            <div className="w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                  <GiSpaceship className="text-5xl text-[#3B7BAA]" />
                </div>
              </div>
              <h1 className="cascade-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                <span className="text-[#3B7BAA]">Cascade</span> Portal
              </h1>
              <p className="cascade-text text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
                Streamline spacecraft design for lunar and deep space missions with validated tools, seamless{" "}
                <span className="text-[#3B7BAA]">Cascade Network</span> integration, and automated test plans—all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-16">
                <Link
                  href="/cascade-portal"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-[#3B7BAA]/50"
                >
                  <FaRocket className="mr-2" /> Discover Portal
                </Link>
                <Link
                  href="/missions"
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#3B7BAA] text-[#3B7BAA] hover:text-white hover:bg-[#3B7BAA]/20 font-semibold rounded-full transition-all transform hover:scale-105"
                >
                  <BsStars className="mr-2" /> Explore Missions
                </Link>
              </div>
              <div className="flex justify-center space-x-8 mt-8 opacity-80">
                <FaSatellite className="text-2xl text-[#3B7BAA]" />
                <FaMicrochip className="text-2xl text-[#3B7BAA]" />
                <FaWifi className="text-2xl text-[#3B7BAA]" />
                <BsCpu className="text-2xl text-[#3B7BAA]" />
              </div>
            </div>
          </section>

          {/* RF Designer Panel */}
          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="rf-box w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                  <GiSatelliteCommunication className="text-5xl text-[#3B7BAA]" />
                </div>
              </div>
              <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4">RF System Design</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">RF Designer</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Design spacecraft RF systems optimized for high-latency, long-range deep space communications using commercially available components and link margin tools.
              </p>
              <div className="flex justify-center mb-8 sm:mb-10">
                <div className="w-full max-w-md bg-gray-800/50 p-6 sm:p-8 rounded-lg border-l-4 border-[#3B7BAA] hover:bg-gray-800/70 transition-all transform hover:scale-105 shadow-lg">
                  <div className="flex items-center mb-3">
                    <FaNetworkWired className="text-[#3B7BAA] mr-2" />
                    <h4 className="font-semibold text-lg sm:text-xl text-white">Component Library</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Access verified commercial components</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <BsLightningCharge className="mr-2 text-[#3B7BAA]" /> Transceivers & Amplifiers
                    </li>
                    <li className="flex items-center">
                      <FaWifi className="mr-2 text-[#3B7BAA]" /> Antennas & Filters
                    </li>
                    <li className="flex items-center">
                      <GiProcessor className="mr-2 text-[#3B7BAA]" /> Power Management
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/cascade-portal#rf-designer"
                className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
              >
                <FaTools className="mr-2" /> Start Designing
              </Link>
            </div>
          </section>

          {/* Test Wizard Panel */}
          <section className="panel w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="test-box w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                  <FaFlask className="text-5xl text-[#3B7BAA]" />
                </div>
              </div>
              <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4">Testing Suite</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Test Wizard</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Create test plans tailored for lunar and deep space missions from proven templates. Automate verification with comprehensive test cases and documentation.
              </p>
              <div className="flex justify-center mb-8 sm:mb-10">
                <div className="w-full max-w-md bg-gray-800/50 p-6 sm:p-8 rounded-lg border-l-4 border-[#3B7BAA] hover:bg-gray-800/70 transition-all transform hover:scale-105 shadow-lg">
                  <div className="flex items-center mb-3">
                    <FaCheckCircle className="text-[#3B7BAA] mr-2" />
                    <h4 className="font-semibold text-lg sm:text-xl text-white">Test Templates</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Comprehensive test libraries</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <FaSatellite className="mr-2 text-[#3B7BAA]" /> Pre-flight Validation
                    </li>
                    <li className="flex items-center">
                      <FaMicrochip className="mr-2 text-[#3B7BAA]" /> Component Testing
                    </li>
                    <li className="flex items-center">
                      <FaCodeBranch className="mr-2 text-[#3B7BAA]" /> System Integration
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/cascade-portal#test-wizard"
                className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
              >
                <FaChartLine className="mr-2" /> Explore Templates
              </Link>
            </div>
          </section>

          {/* Feature Request System Panel */}
          <section className="cascade-section panel w-full h-full flex items-center justify-center Abdul p-4 sm:p-8">
            <div className="design-box w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                  <FaVoteYea className="text-5xl text-[#3B7BAA]" />
                </div>
              </div>
              <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4">User Collaboration</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Feature Request System</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Shape the future of space tech with our Feature Request System. Vote on and prioritize tools to accelerate your lunar and deep space missions.
              </p>
              <div className="flex justify-center mb-8 sm:mb-10">
                <div className="w-full max-w-md bg-gray-800/50 p-6 sm:p-8 rounded-lg border-l-4 border-[#3B7BAA] hover:bg-gray-800/70 transition-all transform hover:scale-105 shadow-lg">
                  <div className="flex items-center mb-3">
                    <FaVoteYea className="text-[#3B7BAA] mr-2" />
                    <h4 className="font-semibold text-lg sm:text-xl text-white">Feature Voting</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Shape our roadmap</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <FaVoteYea className="mr-2 text-[#3B7BAA]" /> Vote on New Features
                    </li>
                    <li className="flex items-center">
                      <FaTools className="mr-2 text-[#3B7BAA]" /> Suggest Improvements
                    </li>
                    <li className="flex items-center">
                      <FaChartLine className="mr-2 text-[#3B7BAA]" /> Track Development
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/resources#feature-requests"
                className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
              >
                <FaCodeBranch className="mr-2" /> Join Development
              </Link>
            </div>
          </section>
        </div>
      )}

      {/* Final CTA Section (Shared for both views) */}
      <section className="relative py-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-black z-10 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
              <GiSpaceship className="text-5xl text-[#3B7BAA]" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Launch Your <span className="text-[#3B7BAA]">Deep Space</span> Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join innovators using Cascade Portal and our expanding ground station network to power missions beyond Earth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-[#3B7BAA]/50"
            >
              <FaRocket className="mr-2" /> Contact Us
            </Link>
            <Link
              href="/cascade-network"
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-transparent border-2 border-[#3B7BAA] text-[#3B7BAA] hover:text-white hover:bg-[#3B7BAA]/20 font-semibold rounded-full transition-all transform hover:scale-105"
            >
              <BsStars className="mr-2" /> Explore Cascade Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}