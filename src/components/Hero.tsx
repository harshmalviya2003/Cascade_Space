import Link from 'next/link';
import Image from 'next/image';
import {  useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Video initialization
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.play().catch((error: Error) => console.log("Video autoplay prevented:", error));
    }

    // Particle animation
    const createParticles = () => {
      if (!particlesRef.current) return;
      particlesRef.current.innerHTML = '';
      const particleCount = 60;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-white/30';
        
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;
        
        gsap.set(particle, {
          width: `${size}px`,
          height: `${size}px`,
          left: `${posX}%`,
          top: `${posY}%`,
          scale: 0.2,
          opacity: 0,
        });
        
        gsap.to(particle, {
          y: (Math.random() - 0.5) * 200,
          x: (Math.random() - 0.5) * 200,
          opacity: Math.random() * 0.5 + 0.2,
          scale: Math.random() * 0.8 + 0.5,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
        
        particlesRef.current.appendChild(particle);
      }
    };

    // Star animation
    const createStars = () => {
      if (!starsRef.current) return;
      starsRef.current.innerHTML = '';
      const starCount = 100;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full bg-white';
        
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 3;
        const duration = Math.random() * 5 + 3;
        const brightness = Math.random() * 0.7 + 0.3;
        
        gsap.set(star, {
          width: `${size}px`,
          height: `${size}px`,
          left: `${posX}%`,
          top: `${posY}%`,
          opacity: 0,
          filter: `brightness(${brightness})`,
        });
        
        gsap.to(star, {
          opacity: brightness,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
        
        starsRef.current.appendChild(star);
      }
    };

    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' }
    });

    tl.fromTo(
      headingRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(
      subheadingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      '-=0.8'
    )
    .fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.6'
    )
    .fromTo(
      buttonContainerRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    );

    // Parallax effect on scroll
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
      backgroundPosition: '50% 40%',
    });

    // Initialize effects
    createParticles();
    createStars();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden  bg-center bg-cover"
      style={{ backgroundImage: "url('/images/space-bg.jpg')" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <Image 
            src="/images/space-fallback.jpg" 
            fill
            alt="Space background"
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/80"></div>
      </div>

      {/* Stars */}
      <div ref={starsRef} className="absolute inset-0 z-10"></div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-10"></div>

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3B7BAA]/20 blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#3B7BAA]/15 blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full mt-20  py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <div ref={headingRef} className="mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#3B7BAA] to-[#3B7BAA]/90">
                  Intergalactic Payment
                </span>
              </h1>
            </div>

            <div ref={subheadingRef} className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-medium">
                Solutions for the <span className="text-[#3B7BAA] font-semibold">Digital Universe</span>
              </h2>
            </div>

            <div ref={textRef} className="mb-12 max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-white/85 leading-relaxed">
                Revolutionizing financial transactions across the cosmos with our 
                <span className="text-[#3B7BAA] font-semibold"> quantum payment technology</span> and 
                <span className="text-white font-semibold"> zero-gravity security protocols</span>.
              </p>
            </div>

            <div ref={buttonContainerRef} className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/contact-us" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#3B7BAA]/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3B7BAA] to-[#3B7BAA]/80 opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#3B7BAA]/90 to-[#3B7BAA]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Launch Your Project
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
              <Link 
                href="/demo" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                <span className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Explore Demo
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce w-10 h-16 flex flex-col items-center">
          <div className="w-1 h-8 bg-white/50 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-[#3B7BAA] to-transparent animate-scrollIndicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
}