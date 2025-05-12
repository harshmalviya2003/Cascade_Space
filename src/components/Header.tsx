"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="header w-nav"
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(1px)" }}
    >
      <div className="container navbar w-container">
        <div className="header_wrapper">
          <Link href="/" aria-current="page" className="w-nav-brand w--current">
            {/* <Image
              src="/images/1.webp"
              loading="lazy"
              width={128}
              height={128}
              alt="Cascade Space - Deep Space Communications"
              className="header-logo"
            /> */}
            <h3 className="text-white text-2xl font-bold">YOUR LOGO</h3>
          </Link>
          <div
            className="header_menu_icon w-nav-button"
            style={{ color: "white" }}
            onClick={toggleMenu}
          >
            <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
          <nav
            role="navigation"
            className={`header_menu w-nav-menu ${isMenuOpen ? "mobile-open" : ""}`}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
          >
            <Link
              href="#about_card"
              className="header_link w-nav-link"
              style={{ color: "white", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/cascade-portal"
              className="header_link w-nav-link"
              style={{ color: "white", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={() => setIsMenuOpen(false)}
            >
              Portal
            </Link>
            <Link
              href="/cascade-network"
              className="header_link w-nav-link"
              style={{ color: "white", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={() => setIsMenuOpen(false)}
            >
              Network
            </Link>
            <Link
              href="/missions"
              className="header_link w-nav-link"
              style={{ color: "white", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={() => setIsMenuOpen(false)}
            >
              Missions
            </Link>
            <Link
              href="/resources"
              className="header_link w-nav-link"
              style={{ color: "white", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact-us"
              className="header_link w-nav-link"
              style={{ color: "white", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us"
              className="header_button w-button"
              style={{
                backgroundColor: "#3B7BAA",
                color: "white",
                borderRadius: "9999px",
                padding: "10px 20px",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2a5d87")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3B7BAA")}
              onClick={() => setIsMenuOpen(false)}
            >
              START YOUR MISSION
            </Link>
            <div className="header_social_mobile_only">
              <div className="links">
                <div className="footer_navigation_content">
                  <Link
                    href="mailto:contact@cascade.space"
                    className="footer_navigation_link w-inline-block"
                    style={{ color: "white", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    <div>contact@cascade.space</div>
                  </Link>
                  <Link
                    href="tel:+447312221374"
                    className="footer_navigation_link w-inline-block"
                    style={{ color: "white", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    <div>+44-7312-221374</div>
                  </Link>
                </div>
              </div>
              <div className="icons">
                {/* TODO: Replace with actual Cascade Space social links (e.g., LinkedIn, Twitter/X) */}
                <Link
                  href="#"
                  className="footer_navigation_link social w-inline-block"
                  style={{ color: "white", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3B7BAA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  <div className="icon_svg">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8587 16.9826C12.887 18.6549 13.3434 20.8758 15.0448 21.9949L21.4654 26.2183C22.4974 26.8971 23.8889 26.322 24.1405 25.1126L27.9594 6.75559C28.2421 5.39664 26.906 4.2652 25.6122 4.76801L3.49077 13.3652C1.96764 13.9571 2.01492 16.1285 3.56239 16.6536L9.04389 18.5134C10.1923 18.9031 11.4583 18.7133 12.442 18.0041L13.8587 16.9826Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="icon_svg">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3384 25.6628L13.1241 25.6227L12.9217 25.7036L7.84791 27.7331L7.56019 24.8366L7.52726 24.5051L7.25922 24.3073C4.03746 21.9296 1.9502 18.1086 1.9502 13.8C1.9502 6.59268 7.79288 0.75 15.0002 0.75C22.2075 0.75 28.0502 6.59268 28.0502 13.8C28.0502 17.4184 26.626 20.808 24.0994 23.0748C21.5865 25.3293 17.9276 26.5233 13.3384 25.6628Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10.6988 7.20121C10.6085 7.19691 10.5161 7.20336 10.4195 7.22484C9.42043 7.44616 8.42783 8.17026 8.3999 9.46376C8.42783 9.64425 8.42568 9.83763 8.49229 10.0009C8.81885 10.8002 9.10245 11.6253 9.51066 12.3817C11.498 16.0559 14.5037 18.6107 18.3344 20.2329C18.7921 20.4263 19.2647 20.4671 19.7266 20.2737C20.3626 20.0094 20.9019 19.6012 21.2607 19.0146C21.7527 18.2089 21.7591 17.6502 20.9491 17.055C20.4185 16.664 19.8964 16.2622 19.3593 15.8797C18.5407 15.2996 17.6555 15.1986 17.0454 16.217C17.0131 16.2686 16.9659 16.3116 16.925 16.3545C16.6114 16.6876 16.2268 16.7692 15.8186 16.6016C14.2695 15.9635 13.0728 14.9343 12.3509 13.4023C11.9255 12.502 12.0416 12.0508 12 WELL8365 11.4513C12.916 11.3933 12.9912 11.331 13.0642 11.2643C13.4123 10.9463 13.5047 10.5682 13.2984 10.1406C12.8322 9.16509 12.2113 8.29488 11.425 7.545C11.2123 7.34302 10.9695 7.21625 10.6988 7.20121Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .header-logo {
            width: 80px;
            height: 80px;
          }

          .header_menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            z-index: 100;
          }

          .header_menu.mobile-open {
            transform: translateX(0);
          }

          .header_link,
          .header_button {
            margin: 10px 0;
            font-size: 18px;
          }

          .header_button {
            margin-top: 20px;
          }

          .header_menu_icon {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 24px;
            cursor: pointer;
            z-index: 101;
          }

          .menu-icon-bar {
            width: 100%;
            height: 3px;
            background: white;
            transition: all 0.3s ease;
          }

          .menu-icon-bar.open:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .menu-icon-bar.open:nth-child(2) {
            opacity: 0;
          }

          .menu-icon-bar.open:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
          }

          .header_social_mobile_only {
            margin-top: 30px;
            text-align: center;
          }
        }

        @media (min-width: 992px) {
          .header_menu_icon {
            display: none;
          }

          .menu-icon-bar {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}