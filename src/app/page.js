// import { Suspense } from 'react';
import Image from "next/image";
import styles from "@/styles/header.module.css";
import Navbar from "@/components/Navbar";
import { tropicalOrange } from "@/fonts/fonts";
import surfing from "../../public/surfing.png";
import goodvibe from "../../public/goodvibe.png";
import packages from "../../public/packages.png";
import season from "../../public/season.png";
import firststepURL from "../../public/firststep.jpg";
import improvementURL from "../../public/improvement.jpg";
import freespiritURL from "../../public/freespirit.jpg";
// import VideoComponent from '../components/VideoComponent';

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
      <div className="container mt-5 pt-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="fs-2 fw-bold spacing">
              PURE BLUE SURF & YOGA RETREAT
            </p>
            <p className="spacing">HIMMAFUSHI , MALDIVES</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-around mb-5">
          <div className="col-10 col-md-5 mb-3">
            <p className={`${tropicalOrange.className} fs-1 text-center`}>
              Live a unique and transformative experience, blending the <br />{" "}
              <span className="tx-main-color tx-main-color">
              ADRENALINE of catching waves with the serenity of yoga
              </span>
            </p>
          </div>
          <div className="col-10 col-md-5 mb-3">
            <p className="fw-light fs-5 text-center text-md-start">
              Welcome to Pure Blue Retreat in the Maldives, where the magic of
              surfing and yoga awaits! Immerse yourself in thrilling waves and
              relaxing yoga sessions on our pristine shores. Our comfy rooms and
              delicious local cuisine add a touch of luxury to your escape. Pure
              Blue is all about the perfect blend of excitement and serenity –
              join us for an easygoing retreat in this tropical paradise!
            </p>
          </div>
        </div>
      </div>
      {/* video section */}
      <div className="container mb-3 mb-3">
        <div className="row align-items-center justify-content-around">
          <div className="col-10 col-md-6 mb-3 text-center">
            <p className='display-5'>
              INSERT VIDEO
            </p>
          </div>
          <div className="col-10 col-md-6 mb-3 text-center">
            <div className="row">
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <Image
                    alt="surf icon"
                    src={surfing}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">SURFING</p>
                  <p className="p-0 m-0">All kinds of waves</p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <Image
                    alt="goodvibe icon"
                    src={goodvibe}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">VIBES</p>
                  <p className="p-0 m-0">only good vibes</p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <Image
                    alt="season icon"
                    src={season}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">SEASON</p>
                  <p className="p-0 m-0">May - January</p>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3 py-md-3">
                  <Image
                    alt="packages icon"
                    src={packages}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">PACKAGES</p>
                  <p className="p-0 m-0">Starting from 700€</p>
                </div>
              </div>
            </div>
            <button className="btn-book text-uppercase fw-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
      {/* cards packages */}
      <main>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">PACKAGES</p>
              <p className={`display-4 fw-light ${tropicalOrange.className}`}>
                EXPERIENCE THE BEST OF MALDIVES
              </p>
              <p>
              Design for all levels and budget ... <span className="fw-bold tx-main-color">Pure Blue Surf & Yoga retreat</span> provide you the perfect packages for all surfers . Eat, surf, relaxe, Repeat is our Anthem
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center" style={{ height: '22rem', overflow: "hidden"}}>
                  <Image
                    alt="first step package"
                    src={firststepURL}
                    placeholder="blur"
                    className="card-img opacity-50"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className={`card-title ${tropicalOrange.className} h1`}>FIRST STEP</h5>
                      <p className="card-text fw-bold">
                        STARTING FROM 790€ / WEEK
                      </p>
                        <button className="btn-book text-uppercase fw-bold">
                          Info&book
                        </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center" style={{ height: '22rem', overflow: "hidden"}}>
                  <Image
                    alt="improvement package"
                    src={improvementURL}
                    placeholder="blur"
                    className="card-img opacity-50"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className={`card-title ${tropicalOrange.className} h1`}>IMPROVEMENT</h5>
                      <p className="card-text fw-bold">
                        STARTING FROM 690€ / WEEK
                      </p>
                      <button className="btn-book text-uppercase fw-bold">
                        Info&book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card text-bg-dark border-0 rounded-0 text-center" style={{ height: '22rem', overflow: "hidden"}}>
                  <Image
                    alt="free spirit package"
                    src={freespiritURL}
                    placeholder="blur"
                    className="card-img opacity-50"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5 className={`card-title ${tropicalOrange.className} h1`}>Free spirit</h5>
                      <p className="card-text fw-bold"> 
                        STARTING FROM 590€ / WEEK
                      </p>
                      <button className="btn-book text-uppercase fw-bold">
                        Info&book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* what customers */}
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <p className="h3 text-uppercase tx-main-color spacing">
              What customers say
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-12 col-md-12">
                <div className="card bg-main-color border-0 rounded-0 py-5">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                      <div className="card-body">
                        <blockquote className={`blockquote mb-0 ${tropicalOrange.className} fs-2 text-white`}>
                          <p>
                            “SURFING IN MALDIVES WAS ALWAYS MY DREAM AND DOING IT
                            WHILE AT PURE BLUE WAS JUST PERFECT FOR ME! THE LOCATION,
                            THE STAFF AND THE SERVICE WERE JUST PERFECT”.
                          </p>
                          <footer className="blockquote-footer  mt-3 text-white">
                            Jacopo{" "}
                            <cite title="Source Title">from google reviews</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
      </div>
    </>
  );
}
