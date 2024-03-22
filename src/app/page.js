import Image from "next/image";
import styles from "../styles/header.module.css";
import Navbar from "@/components/Navbar";
import { tropicalOrange } from "@/fonts/fonts";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="position-absolute heading">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 col-md-8 text-center">
              <h1 className={`${tropicalOrange.className} display-2`}>
                The pure magic of Maldives
              </h1>
              <h5 className="fw-bold spacing">
                WELCOME TO PURE BLUE SURF & YOGA RETREAT
              </h5>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className={`carousel-item active ${styles.firstslide}`}>
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">Follow on our social network</p>
                <i className="bi bi-facebook mx-2 text-secondary"></i>
                <i className="bi bi-instagram mx-2 text-secondary"></i>
                <i className="bi bi-twitter mx-2 text-secondary"></i>
              </div>
            </div>
            <div className={`carousel-item ${styles.secondslide}`}>
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">Direct booking</p>
                <p className="text-secondary small">
                  Book your stay and more activities directly from here, scroll to see more
                </p>
              </div>
            </div>
            <div className={`carousel-item ${styles.thirdslide}`}>
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">
                  Discoved the perfection of Maldives
                </p>
                <p className="text-secondary small">
                  Get how we offer yoga retreat, surf and more activites and all kinds of
                  packages
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </>
  );
}
