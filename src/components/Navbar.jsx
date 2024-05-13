"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { tropicalOrange } from "@/fonts/fonts";
import purelogoURL from "../../public/pure-surf-logo-white.png";
import menuURL from "../../public/menubar.png";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top p-3 ${
          scrolling ? "bg-nav-custom-scroll" : "bg-nav-custom"
        }`}
        style={{
          maxWidth: "100vw",
        }}
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Image src={menuURL} alt="menu bar" width={30} />
          </button>
          <div className="collapse navbar-collapse d-lg-flex">
            <a
              className="navbar-brand me-0 d-none d-md-block col-lg-2"
              href="#"
            >
              <Image
                src={purelogoURL}
                alt="pure blue logo"
                width={80}
                priority={false}
              />
            </a>
            <ul className="navbar-nav col-lg-8 justify-content-lg-center">
              <li className="nav-item mx-md-3 text-white">
                <Link
                  className="nav-link text-reset fw-bold tx-orange"
                  href="#packages-section"
                >
                  PACKAGES
                </Link>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <Link
                  className="nav-link text-reset fw-bold tx-orange"
                  href="#surfing-section"
                >
                  SURFING
                </Link>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <Link
                  className="nav-link text-reset fw-bold tx-orange"
                  href="#accomodations-section"
                >
                  ACCOMMODATIONS
                </Link>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <Link
                  className="nav-link text-reset fw-bold tx-orange"
                  href="#yoga-section"
                >
                  YOGA
                </Link>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <Link
                  className="nav-link text-reset fw-bold tx-orange"
                  href="#activities-section"
                >
                  ACTIVITIES
                </Link>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <Link
                  className="nav-link text-reset fw-bold tx-orange"
                  href="#contacts-section"
                >
                  CONTACTS
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-2 justify-content-lg-end">
                <a id="book-nav"
                className={`${tropicalOrange.className} btn-book-nav text-decoration-none`} href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058">Book now</a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start bg-nav-custom"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <Image src={purelogoURL} alt="Logo" width={150} />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav col-lg-8 justify-content-lg-center">
            <li className="nav-item mx-md-3 my-2 text-white">
              <Link
                className="nav-link text-reset fw-bold tx-orange"
                href="#surfing-section"
              >
                SURFING
              </Link>
            </li>
            <li className="nav-item mx-md-3 my-2 text-white">
              <Link
                className="nav-link text-reset fw-bold tx-orange"
                href="#yoga-section"
              >
                YOGA
              </Link>
            </li>
            <li className="nav-item mx-md-3 my-2 text-white">
              <Link
                className="nav-link text-reset fw-bold tx-orange"
                href="#activities-section"
              >
                ACTIVITIES
              </Link>
            </li>
            <li className="nav-item mx-md-3 my-2 text-white">
              <Link
                className="nav-link text-reset fw-bold tx-orange"
                href="#packages-section"
              >
                PACKAGES
              </Link>
            </li>
            <li className="nav-item mx-md-3 my-2 text-white">
              <Link
                className="nav-link text-reset fw-bold tx-orange"
                href="#accomodations-section"
              >
                ACCOMMODATIONS
              </Link>
            </li>
            <li className="nav-item mx-md-3 my-2 text-white">
              <Link
                className="nav-link text-reset fw-bold tx-orange"
                href="#contacts-section"
              >
                CONTACTS
              </Link>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-2 justify-content-lg-end my-2">
          <a id="book-nav"
                className={`${tropicalOrange.className} btn-book-nav text-decoration-none`} href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058">Book now</a>
          </div>
        </div>
      </div>
    </>
  );
}
