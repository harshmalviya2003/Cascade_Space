"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTools, FaSatellite, FaUsers, FaRocket, FaHeadset } from "react-icons/fa"; // Updated icons

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
  useEffect(() => {
    // Animate the advantages text
    gsap.fromTo(
      ".added_advatages_text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".added_advatages_text",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Animate cards with stagger
    gsap.fromTo(
      ".card_wrapper",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cards_wrapper",
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Animate planet images
    gsap.fromTo(
      ".advantages_planet_1",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ".advantages_planet_1",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      ".advantages_planet_2",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ".advantages_planet_2",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Animate stars
    gsap.fromTo(
      ".advantages_stars",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".advantages_stars",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Animate About Us section
    gsap.fromTo(
      ".section_heading",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section_heading",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      ".about_logo_wrapper",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about_logo_wrapper",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      ".about_text_wrapper",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about_text_wrapper",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cards = [
    {
      icon: <FaTools className="w-8 h-8 text-white" />,
      text: "Streamlined spacecraft design with Cascade Portal’s RF Designer and Test Wizard.",
    },
    {
      icon: <FaSatellite className="w-8 h-8 text-white" />,
      text: "Reliable deep space communications via the Cascade Network’s global ground stations.",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      text: "Shape mission-critical tools with our collaborative Feature Request System.",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-white" />,
      text: "Future-ready with lunar coverage planned for 2027, starting with TLI in Q1 2026.",
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-white" />,
      text: "Expert support to ensure your deep space mission’s success, from design to launch.",
    },
  ];

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
                  Cascade Space is transforming deep space exploration with innovative tools and infrastructure. Our
                  expertise in spacecraft design and communications, combined with a user-centric approach, empowers
                  missions beyond Earth. From the Cascade Portal’s validated software to our expanding ground station
                  network, we’re building the backbone for lunar and deep space success.
                </p>
                <Link href="/contact-us" className="button_primary bg-[#3B7BAA] w-button">
                  Start Your Mission
                </Link>
              </div>
            </div>
            <div className="cards_wrapper">
              <div className="cards_column">
                {cards.slice(0, 3).map((card, index) => (
                  <div key={index} className="card_wrapper dark_blue">
                    <div className="card_icon flex items-center justify-center">{card.icon}</div>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
              <div className="cards_column">
                {cards.slice(3).map((card, index) => (
                  <div key={index} className="card_wrapper dark_blue">
                    <div className="card_icon flex items-center justify-center">{card.icon}</div>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="advantages_stars notouch">
          <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src="/videos/v.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="about_card" className="card_bg middle_blue second bg-black">
        <div className="card_mover_line"></div>
        <div className="w-layout-blockcontainer container w-container">
          <div className="section_heading textcolor_white">
            <div>ABOUT US</div>
          </div>
          <div className="about_wrapper">
            <div className="about_logo_button_wrapper">
              <div className="about_logo_wrapper notouch">
                <div className="about_logo">
                  <Image
                    src="/images/logo.png"
                    loading="lazy"
                    width={392}
                    height={392}
                    alt="Cascade Space Logo"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 392px, 36vw"
                  /> 
                  <h1>Your Logo Here</h1>
                </div>
                <div className="about_logo_gradient"></div>
              </div>
              <Link href="/missions" className="button_primary bg-[#3B7BAA] w-button">
                Learn Our Mission
              </Link>
            </div>
            <div className="about_text_wrapper">
              <p>
                Cascade Space is pioneering deep space communications with the Cascade Portal and Network, backed by Y
                Combinator and Undeterred Capital.
              </p>
              <p className="text_20px">
                Our team of aerospace experts, engineers, and innovators is dedicated to simplifying spacecraft design and
                communications for lunar and deep space missions, empowering the next era of exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}