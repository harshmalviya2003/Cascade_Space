import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

// Import icons from react-icons library
import { 
  FaRocket, 
  FaSatellite, 
  FaMicrochip, 
  FaWifi, 
  FaFlask, 
  FaCheckCircle, 
  FaTools, 
  FaLightbulb, 
  FaVoteYea,
  FaChartLine,
  FaRegLightbulb,
  FaNetworkWired,
  FaCodeBranch
} from 'react-icons/fa';
import { GiSpaceship, GiSatelliteCommunication, GiProcessor } from 'react-icons/gi';
import { BsStars, BsCpu, BsLightningCharge } from 'react-icons/bs';

export default function PremiumProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create cosmic particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-[#3B7BAA]';
        
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 10;
        
        gsap.set(particle, {
          width: `${size}px`,
          height: `${size}px`,
          left: `${posX}%`,
          top: `${posY}%`,
          opacity: 0,
          scale: 0
        });
        
        gsap.to(particle, {
          opacity: Math.random() * 0.6 + 0.2,
          scale: 1,
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
        
        particlesRef.current.appendChild(particle);
      }
    };

    // Horizontal scroll animation
    const panels = gsap.utils.toArray(".panel") as HTMLElement[];
    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        end: "+=4000",
        markers: false
      }
    });

    // Panel-specific animations
    // RF Designer - Elastic bounce with glow
    gsap.to(".rf-box", {
      y: -100,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
      boxShadow: "0 0 30px rgba(59, 123, 170, 0.7)",
      scrollTrigger: {
        trigger: ".rf-box",
        containerAnimation: scrollTween,
        start: "left 70%",
        toggleActions: "play none none reset"
      }
    });

    // Test Wizard - Color shift with parallax
    gsap.to(".test-box", {
      y: -80,
      backgroundColor: "#3B7BAA",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".test-box",
        containerAnimation: scrollTween,
        start: "center 80%",
        end: "center 20%",
        scrub: true
      }
    });

    // Design Your Own - 3D flip animation
    gsap.fromTo(".design-box", 
      { rotationY: 180, opacity: 0 },
      {
        rotationY: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".design-box",
          containerAnimation: scrollTween,
          start: "center center"
        }
      }
    );

    // Cascade Portal - Text reveal with particles
    gsap.from(".cascade-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".cascade-section",
        containerAnimation: scrollTween,
        start: "left 60%"
      }
    });

    // Create particles on mount
    createParticles();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Cosmic Background */}
      <div ref={particlesRef} className="fixed inset-0 z-0 pointer-events-none" />
      
      {/* Horizontal Scrolling Product Showcase */}
      <div ref={containerRef} className="relative h-screen w-[400%] flex z-10">
        {/* RF Designer Panel */}
        <section 
          className="panel w-full h-full md:mt-30 mt-60 flex items-center justify-center p-4 sm:p-8"
        >
          <div className="w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                <GiSpaceship className="text-5xl text-[#3B7BAA] animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="text-[#3B7BAA]">Cascade</span> Portal
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Revolutionizing spacecraft design with our integrated suite of tools. 
              Access validated software, generate test plans, and ensure network 
              compatibility—all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-16">
              <Link 
                href="/demo" 
                className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white font-semibold rounded-full transition-all 
                          transform hover:scale-105 shadow-lg hover:shadow-[#3B7BAA]/50"
              >
                <FaRocket className="mr-2" /> Book a Demo
              </Link>
              <Link 
                href="/features" 
                className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#3B7BAA] text-[#3B7BAA] hover:text-white 
                          hover:bg-[#3B7BAA]/20 font-semibold rounded-full transition-all transform hover:scale-105"
              >
                <BsStars className="mr-2" /> Explore Features
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
        <section 
          className="panel w-full h-full md:mt-0 mt-40 flex items-center justify-center p-4 sm:p-8"
        >
          <div className="w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                <GiSatelliteCommunication className="text-5xl text-[#3B7BAA]" />
              </div>
            </div>
            <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4">RF System Design</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">RF Designer</h2>
            <p className="text-base pt-4 pb-4 sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Design your spacecraft RF system using commercially available components. 
              Model performance using link margin tools and ensure optimal communication 
              capabilities for your mission.
            </p>
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="w-full max-w-md bg-gray-800/50 p-6 sm:p-8 rounded-lg border-l-4 border-[#3B7BAA] hover:bg-gray-800/70 transition-all transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-3">
                  <FaNetworkWired className="text-[#3B7BAA] mr-2" />
                  <h4 className="font-semibold text-lg sm:text-xl text-white">Component Library</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">Access verified commercial components</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><BsLightningCharge className="mr-2 text-[#3B7BAA]" /> Transceivers & Amplifiers</li>
                  <li className="flex items-center"><FaWifi className="mr-2 text-[#3B7BAA]" /> Antennas & Filters</li>
                  <li className="flex items-center"><GiProcessor className="mr-2 text-[#3B7BAA]" /> Power Management</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/rf-designer" 
              className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
            >
              <FaTools className="mr-2" /> Start Designing
            </Link>
          </div>
        </section>

        {/* Test Wizard Panel */}
        <section 
          className="panel w-full md:mt-0 mt-40 h-full flex items-center justify-center p-4 sm:p-8"
        >
          <div className="w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                <FaFlask className="text-5xl text-[#3B7BAA]" />
              </div>
            </div>
            <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4">Testing Suite</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Test Wizard</h2>
            <p className="text-base pt-5 pb-5 sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Create test plans for your spacecraft design from proven templates. 
              Streamline your verification process with automated test case generation 
              and documentation.
            </p>
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="w-full max-w-md bg-gray-800/50 p-6 sm:p-8 rounded-lg border-l-4 border-[#3B7BAA] hover:bg-gray-800/70 transition-all transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="text-[#3B7BAA] mr-2" />
                  <h4 className="font-semibold text-lg sm:text-xl text-white">Test Templates</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">Comprehensive test libraries</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><FaSatellite className="mr-2 text-[#3B7BAA]" /> Pre-flight Validation</li>
                  <li className="flex items-center"><FaMicrochip className="mr-2 text-[#3B7BAA]" /> Component Testing</li>
                  <li className="flex items-center"><FaCodeBranch className="mr-2 text-[#3B7BAA]" /> System Integration</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/test-wizard" 
              className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
            >
              <FaChartLine className="mr-2" /> Explore Templates
            </Link>
          </div>
        </section>

        {/* Design Your Own Panel */}
        <section 
          className="cascade-section panel md:mt-0 mt-40 w-full h-full flex items-center justify-center p-4 sm:p-8"
        >
          <div className="w-full max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-[#3B7BAA]/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50">
                <FaLightbulb className="text-5xl text-[#3B7BAA] animate-pulse" />
              </div>
            </div>
            <div className="text-[#3B7BAA] text-sm uppercase tracking-widest mb-4">Feature Development</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Design Your Own</h2>
            <p className="text-base sm:text-lg pt-5 pb-5 text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our team is hard at work building out our feature set and you can help us 
              prioritize the backlog to get you features you will use as soon as possible.
            </p>
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="w-full max-w-md bg-gray-800/50 p-6 sm:p-8 rounded-lg border-l-4 border-[#3B7BAA] hover:bg-gray-800/70 transition-all transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-3">
                  <FaVoteYea className="text-[#3B7BAA] mr-2" />
                  <h4 className="font-semibold text-lg sm:text-xl text-white">Feature Voting</h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">Shape our roadmap</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><FaRegLightbulb className="mr-2 text-[#3B7BAA]" /> Vote on New Features</li>
                  <li className="flex items-center"><FaTools className="mr-2 text-[#3B7BAA]" /> Suggest Improvements</li>
                  <li className="flex items-center"><FaChartLine className="mr-2 text-[#3B7BAA]" /> Track Development</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/roadmap" 
              className="inline-flex items-center px-6 py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white rounded-lg transition-colors"
            >
              <FaCodeBranch className="mr-2" /> Join Development
            </Link>
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className="relative py-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-black z-10 rounded-b-[7vw] overflow-hidden">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#3B7BAA]/20 rounded-full border border-[#3B7BAA]/50 animate-pulse">
              <GiSpaceship className="text-5xl text-[#3B7BAA]" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="text-[#3B7BAA]">transform</span> your spacecraft design?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading aerospace companies who trust Cascade Portal for their mission-critical design workflows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-[#3B7BAA] hover:bg-[#2a5d87] text-white font-semibold rounded-full 
                        transition-all transform hover:scale-105 shadow-lg hover:shadow-[#3B7BAA]/50"
            >
              <FaRocket className="mr-2" /> Contact Sales
            </Link>
            <Link 
              href="/pricing" 
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3 bg-transparent border-2 border-[#3B7BAA] text-[#3B7BAA] hover:text-white 
                        hover:bg-[#3B7BAA]/20 font-semibold rounded-full transition-all transform hover:scale-105"
            >
              <BsStars className="mr-2" /> View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}