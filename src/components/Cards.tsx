import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaUserCheck, FaChartBar, FaHeadset, FaRobot } from 'react-icons/fa'; // Import icons

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
  useEffect(() => {
    // Animate the advantages text
    gsap.fromTo(
      '.added_advatages_text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.added_advatages_text',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate cards with stagger
    gsap.fromTo(
      '.card_wrapper',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cards_wrapper',
          start: 'top 75%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate planet images
    gsap.fromTo(
      '.advantages_planet_1',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: '.advantages_planet_1',
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      '.advantages_planet_2',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: '.advantages_planet_2',
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate stars
    gsap.fromTo(
      '.advantages_stars',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.advantages_stars',
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate About Us section
    gsap.fromTo(
      '.section_heading',
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section_heading',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      '.about_logo_wrapper',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about_logo_wrapper',
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      '.about_text_wrapper',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about_text_wrapper',
          start: 'top 80%',
          toggleActions: 'play none none reset',
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
      icon: <FaCode className="w-8 h-8 text-white" />,
      text: 'Simple, yet comprehensive API integration for seamless operations.',
    },
    {
      icon: <FaUserCheck className="w-8 h-8 text-white" />,
      text: 'Expert guidance in configuring advanced and alternative payment methods.',
    },
    {
      icon: <FaChartBar className="w-8 h-8 text-white" />,
      text: 'Capabilities to export insightful analytics to external BI systems for data-driven decision making.',
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-white" />,
      text: 'Round-the-clock technical support to ensure smooth transactions.',
    },
    {
      icon: <FaRobot className="w-8 h-8 text-white" />,
      text: 'Automation of all types of reporting, boosting your business efficiency.',
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
                <h2>Added Advantages:</h2>
                <p>
                  Our journey through the intricacies of dealing with high-risk clients, coupled with our proficiency in
                  crafting diverse business processing solutions, has equipped us with a wealth of experience and expertise
                  in payment systems. Our multilingual team is adept at fostering effective dialogues and communication with
                  banks, PSPs, and merchants. This proficiency enables us to conduct business across a multitude of regions,
                  including the majority of European Union countries, Asia, Africa, and CIS countries.
                </p>
                <Link href="/contact-us" className="button_primary w-button">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="cards_wrapper">
              <div className="cards_column">
                {cards.slice(0, 3).map((card, index) => (
                  <div key={index} className="card_wrapper dark_blue">
                    <div className="card_icon flex items-center justify-center">
                      {card.icon}
                    </div>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
              <div className="cards_column">
                {cards.slice(3).map((card, index) => (
                  <div key={index} className="card_wrapper dark_blue">
                    <div className="card_icon flex items-center justify-center">
                      {card.icon}
                    </div>
                    <p>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="advantages_planet_1 notouch">
          <video autoPlay loop muted playsInline style={{ width: '582px', height: '582px', objectFit: 'cover' }}>
            <source src="/videos/v.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="advantages_planet_2 notouch">
          <video autoPlay loop muted playsInline style={{ width: '57px', height: '57px', objectFit: 'cover' }}>
            <source src="/planet2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="advantages_stars notouch">
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
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
                    src="/images/1.webp"
                    loading="lazy"
                    width={392}
                    height={392}
                    alt=""
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 392px, 36vw"
                  />
                </div>
                <div className="about_logo_gradient"></div>
              </div>
              <Link href="/possibilities" className="button_primary bg-[#3B7BAA] w-button">
                More about us
              </Link>
            </div>
            <div className="about_text_wrapper">
              <p>
                AKARI is a state-of-the-art, comprehensive project, innovatively designed by leading experts in the banking
                and online payment processing industry.
              </p>
              <p className="text_20px">
                Our team is formed by elite banking security professionals, online acquiring experts, high-profile
                developers, programmers, and analytics, all passionate and detail-oriented when it comes to each project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}