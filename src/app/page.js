import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";
import Navbar from "@/components/Navbar";
import FormContact from "@/components/FormContact";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import { tropicalOrange } from "@/fonts/fonts";
import surfing from "../../public/surfing.png";
import goodvibe from "../../public/goodvibe.png";
import packages from "../../public/packages.png";
import season from "../../public/season.png";
import cancellation from "../../public/cancellation.png";
import globe from "../../public/global.png";
import firststepURL from "../../public/firststep.jpeg";
import stefania from "../../public/stafania.jpeg";
import freespiritURL from "../../public/freesurf.jpeg";
import facilitiesURL from "../../public/facilities.jpg";
import roomsURL from "../../public/room.jpg";
import foodURL from "../../public/food.jpg";
import yogacoursesURL from "../../public/y4.jpg";
import skatingURL from "../../public/skate-activity.jpg";
import snorkelingURL from "../../public/snorkeling.jpeg";
import jetskyURL from "../../public/jetsky.jpg";
import SocialComponent from '@/components/SocialComponent';
import { cookies } from "next/headers";
import CookiesConsent from "@/components/CookiesConsent";
import classes from '../styles/page.module.css'
import OfferModal from "@/components/OfferModal";

export default function Home() {
  return (
    <>
      <CookiesConsent />
      <Navbar />
      <OfferModal />


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
                <p className="fw-light m-0 p-0">Design for all levels and budget</p>
                <p className="tx-main-color small">
                  From snorkeling to jet skiing, there&apos;s something for everyone
                </p>
              </div>
            </div>
            <div className={`carousel-item ${styles.secondslide}`}>
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">Direct booking</p>
                <p className="tx-main-color small">
                  Book your stay and more activities directly from here, scroll
                  to see more
                </p>
              </div>
            </div>
            <div className={`carousel-item ${styles.thirdslide}`}>
              <div className="carousel-caption caption-animated">
                <p className="fw-light m-0 p-0">
                  Discoved the perfection of Maldives
                </p>
                <p className="tx-main-color small">
                  Get how we offer yoga retreat, surf and more activites and all
                  kinds of packages
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
          {/* <div className="col-10 col-md-6 mb-3 text-center">
            <Video />
          </div> */}
          <div className="col-10 mb-5 text-center">
            <Video />
          </div>
          {/* <div className="col-10 col-md-6 mb-3 text-center">
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
                  <p className="p-0 m-0">All kinds of waves, Gentle Reef Break</p>
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
                  <p className="p-0 m-0">Only good vibes</p>
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
                  <p className="p-0 m-0">March - November</p>
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
                  <p className="p-0 m-0">Starting from 690€</p>
                </div>
              </div>
            </div>
            <button className="btn-book text-uppercase fw-bold">
              <a className="text-decoration-none text-white" id="book-nav"
                 href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058">Book now</a>
            </button>
          </div> */}
          <div className="col-10 mb-3 text-center">
            <div className="row">
              <div className="col-6 col-md-3 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <Image
                    alt="surf icon"
                    src={surfing}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">SURFING</p>
                  <p className="p-0 m-0">All kinds of waves, Gentle Reef Break</p>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <Image
                    alt="goodvibe icon"
                    src={goodvibe}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">VIBES</p>
                  <p className="p-0 m-0">Only good vibes</p>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3">
                  <Image
                    alt="season icon"
                    src={season}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">SEASON</p>
                  <p className="p-0 m-0">March - November</p>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="card w-75 text-center border-0 d-block mx-auto mb-3 py-md-3">
                  <Image
                    alt="packages icon"
                    src={packages}
                    placeholder="blur"
                    className="d-block mx-auto mb-3"
                  />
                  <p className="spacing tx-main-color p-0 m-0">PACKAGES</p>
                  <p className="p-0 m-0">Starting from 690€</p>
                </div>
              </div>
            </div>
            <button className="btn-book text-uppercase fw-bold">
              <a className="text-decoration-none text-white" id="book-nav"
                href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058">Book now</a>
            </button>
          </div>
        </div>
      </div>
      {/* cards packages */}
      <main id="packages-section">
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">PACKAGES</p>
              <p className={`display-4 fw-light ${tropicalOrange.className}`}>
                EXPERIENCE THE BEST OF MALDIVES
              </p>
              <p>
                Design for all levels and budget ...{" "}
                <span className="fw-bold tx-main-color">
                  Pure Blue Surf & Yoga retreat
                </span>{" "}
                provides you the perfect packages for all surfers. Eat, Surf,
                Relax, Repeat is our Anthem
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card text-bg-dark border-0 rounded-0 text-center"
                  style={{ height: "22rem", overflow: "hidden" }}
                >
                  <Image
                    alt="first step package"
                    src={firststepURL}
                    placeholder="blur"
                    className="card-img opacity-50"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5
                        className={`card-title ${tropicalOrange.className} h1`}
                      >
                        FIRST STEP
                      </h5>
                      <p className="card-text fw-bold">
                        STARTING FROM 860€ / WEEK
                      </p>
                      <Link href="/packages">
                        <button className="btn-book text-uppercase fw-bold">
                          info package
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card text-bg-dark border-0 rounded-0 text-center"
                  style={{ height: "22rem", overflow: "hidden" }}
                >
                  <Image
                    alt="improvement package"
                    src={stefania}
                    placeholder="blur"
                    className="card-img opacity-50"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5
                        className={`card-title ${tropicalOrange.className} h1`}
                      >
                        IMPROVEMENT
                      </h5>
                      <p className="card-text fw-bold">
                        STARTING FROM 790€ / WEEK
                      </p>
                      <Link href="/packages">
                        <button className="btn-book text-uppercase fw-bold">
                          info package
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card text-bg-dark border-0 rounded-0 text-center"
                  style={{ height: "22rem", overflow: "hidden" }}
                >
                  <Image
                    alt="free spirit package"
                    src={freespiritURL}
                    placeholder="blur"
                    className="card-img opacity-50"
                  />
                  <div className="card-img-overlay d-flex justify-content-center align-items-end">
                    <div>
                      <h5
                        className={`card-title ${tropicalOrange.className} h1`}
                      >
                        Free spirit
                      </h5>
                      <p className="card-text fw-bold">
                        STARTING FROM 690€ / WEEK
                      </p>
                      <Link href="/packages">
                        <button className="btn-book text-uppercase fw-bold">
                          info package
                        </button>
                      </Link>
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
                  <blockquote
                    className={`blockquote mb-0 ${tropicalOrange.className} fs-2 text-white `}
                  >
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
      {/* surf courses section */}
      <div
        id="surfing-section"
        className={`container-fluid ${styles.bgsurfcourses}`}
      >
        <div className="row">
          <div className="p-md-5">
            <div className="container py-5">
              <p className="fw-bold tx-sec-color spacing">SURF COURSES</p>
              <p className={`${tropicalOrange.className} text-white display-3`}>
                Explore perfect waves
              </p>
              <p className="col-8 col-md-4 text-white">
                Maldives are now getting famous for their world class waves: the
                gift that the wildest nature offers us is just waiting for you
                to put a wetsuit on and jump on your board!
              </p>
              <Link href="/surf">
                <button className="btn-book text-uppercase fw-bold">
                  Surf plans
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* accomodation section */}
      <main id="accomodations-section">
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">ACCOMODATION</p>
              <p className={`display-4 fw-light ${tropicalOrange.className}`}>
                OUR RETREAT IN THE HEART OF THE OCEAN
              </p>
              <p>
                Maldives start to be world famous for his world class waves.
                During the season, from March to November the pure nature of
                Maldives gives us constant and all level waves for us to enjoy,
                score, master.
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className={`row mb-5 ${classes.accomodation}`}>
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card d-block mx-auto rounded-0 border-0 shadow-sm"
                  style={{ height: "25rem" }}
                >
                  <Image
                    alt="rooms"
                    src={roomsURL}
                    placeholder="blur"
                    height={250}
                    className="card-img-top rounded-0"
                  />
                  <div className="card-body text-center">
                    <p className={`fs-2 ${tropicalOrange.className}`}>Rooms</p>
                    <p className="card-text">
                      Your calm and relaxing space facing the Ocean: Noah Beach
                      Lodge
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card d-block mx-auto rounded-0 border-0 shadow-sm"
                  style={{ height: "25rem" }}
                >
                  <Image
                    alt="facilities"
                    src={facilitiesURL}
                    placeholder="blur"
                    height={250}
                    className="card-img-top rounded-0"
                  />
                  <div className="card-body text-center">
                    <p className={`fs-2 ${tropicalOrange.className}`}>
                      Facilities
                    </p>
                    <p className="card-text">
                      All you need to fully enjoy your retreat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div
                  className="card d-block mx-auto rounded-0 border-0 shadow-sm"
                  style={{ height: "25rem" }}
                >
                  <Image
                    alt="food"
                    src={foodURL}
                    placeholder="blur"
                    height={250}
                    className="card-img-top rounded-0"
                  />
                  <div className="card-body text-center">
                    <p className={`fs-2 ${tropicalOrange.className}`}>Food</p>
                    <p className="card-text">
                      Healthy and nourishing local food at Noah Beach Lodge
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 text-center">
                <Link href="/accomodation">
                  <button className="btn-book text-uppercase fw-bold">
                    Explore Our space
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* yoga section */}
      <div id="yoga-section" className="container my-5 py-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-12 col-md-4 mb-3">
            <Image
              alt="yoga classes"
              src={yogacoursesURL}
              className="img-fluid"
              blurDataURL
            />
          </div>
          <div className="col-12 col-md-5 mb-3">
            <p className="lead tx-main-color spacing text-center">YOGA</p>
            <p className={`display-4 fw-bold ${tropicalOrange.className}`}>
              Discover, LEARN, EXPLORE
            </p>
            <p>
              Try yoga at Pure Blue Surf & Yoga Retreat in the Maldives. Our
              yoga classes are led by experts and are great for everyone, no
              matter if you&apos;re new to yoga or have done it before.
            </p>
            <p className="fw-bold">How it works</p>
            <ul>
              <li>2 classes a day</li>
              <li>Hatha yoga and Yin</li>
              <li>Certified teacher</li>
            </ul>
            <Link href="/yoga">
              <button className="btn-book text-uppercase fw-bold mt-3">
                yoga plans
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* activities section */}
      <section id="activities-section" className="py-3 text-center container">
        <div className="row py-lg-5">
          <div className="col-10 col-md-8 mx-auto">
            <p className="lead tx-main-color spacing">ACTIVITIES</p>
            <p
              className={`display-4 fw-light text-uppercase ${tropicalOrange.className}`}
            >
              Join the NOAH Adventure club
            </p>
            <p>
              We have lots of fun things you can do at Pure Blue. From
              snorkeling to jet skiing, there&apos;s something for everyone.
              Explore all the shades of blue with all the activities of the Noah
              Adventure club
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-md-4 mb-3">
              <div className="card text-bg-dark border-0 rounded-0 text-center">
                <Image
                  alt="yoga classes"
                  src={skatingURL}
                  placeholder="blur"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="card-img opacity-50"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                  <div>
                    <h5 className={`card-title h1 ${tropicalOrange.className}`}>
                      ADDS-ON
                    </h5>
                    <p className="card-text fs-1">Surf Skate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="card text-bg-dark border-0 rounded-0 text-center">
                <Image
                  alt="yoga classes"
                  src={snorkelingURL}
                  placeholder="blur"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="card-img opacity-50"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                  <div>
                    <h5 className={`card-title h1 ${tropicalOrange.className}`}>
                      Free activity
                    </h5>
                    <p className="card-text fs-1">Snorkelling</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="card text-bg-dark border-0 rounded-0 text-center">
                <Image
                  alt="yoga classes"
                  src={jetskyURL}
                  placeholder="blur"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="card-img opacity-50"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                  <div>
                    <h5 className={`card-title h1 ${tropicalOrange.className}`}>
                      ADDS-ON
                    </h5>
                    <p className="card-text fs-1">Jet Ski</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 text-center">
              <Link href="/activities">
                <button className="btn-book text-uppercase fw-bold">
                  SEE MORE ACTIVITIES
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* about us section */}
      <div id="about-section">
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-10 col-md-8 mx-auto">
              <p className="lead tx-main-color spacing">ABOUT US</p>
              <p
                className={`display-4 fw-light text-uppercase ${tropicalOrange.className}`}
              >
                Passionate about the sea
              </p>
              <p>
                Pure Blue surf&yoga retreat and Noah Beach lodge are a young
                association getting along for the same purpose: give and a
                marvelous and affordable true experiences of surfing
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-6 mb-3">
                <p className="fw-bold tx-main-color">
                  What’s a vacation if not the only chance to make a dream
                  something real, that you can feel through your skin, eyes and
                  every sense?
                </p>
                <p>
                  The Maldives are one of those few places on our beautiful blue
                  planet that has that dreamy aura that makes you doubt they
                  actually exist outside of commercials and medias: colors that
                  not even our wildest imagination can picture, smells of spices
                  and infinite flavours of tropical fruit.
                </p>
                <p>
                  {" "}
                  “Maldives” can be defined as the quintessential paradise, an
                  antonomasia that entered our vocabulary to describe that
                  unreachable place of perfection and dream.
                </p>
                <p className="text-uppercase tx-main-color">
                  Pure Blue Surf is the step that makes it available and real
                  for you
                </p>
                <p>
                  And, as if that wasn’t enough, on top of that we offer one of
                  the most beloved and connected-to-nature sport that is
                  becoming a global trend: surfing.
                </p>
                <p>
                  Three surf spots, reachable by boat, that will make your
                  holiday an unstoppable symphony of amusement, emotions and
                  discover.
                </p>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <p className="tx-main-color">
                  Our body and our mind, though, also need a moment of
                  stillness, and swimming among our colourful scaled friends
                  that inhabit the pristine waters of the archipelago, is
                  probably the best place to search and find that inner peace.
                </p>
                <p className="tx-main-color">
                  And again, something else that makes Pure Blue Surf the
                  perfect destination for this “real life dream” is that it’s
                  located on a small local island, because we make of
                  sustainability our core value, because we believe in giving
                  back as much as we can to the local population, as they offer
                  to us all of these amazing features that enrich our
                  experience.
                </p>
                <p>
                  {" "}
                  When we say reachable, we mean it not just in a metaphorical
                  sense, but also in the most practical way: reaching our corner
                  of paradise from the International Airport of Malè couldn’t be
                  easier, thanks to the renewed connections
                </p>
                <p className="">
                  When you’re discovering Asia, the continent that is the cradle
                  of civilization, with the wildest nature and sea wildlife, you
                  can’t miss out on Maldives: this archipelago is waiting for
                  you and it’s just one step away, at Pure Blue Surf.
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 col-md-4 mb-3 text-center">
                <Image
                  src={cancellation}
                  placeholder="blur"
                  width={50}
                  alt="good vibe icon"
                />
                <span className="ms-3">
                  7 days free cancellation & free rebooking
                </span>
              </div>
              <div className="col-12 col-md-4 mb-3 text-center">
                <Image
                  src={goodvibe}
                  placeholder="blur"
                  width={50}
                  alt="good vibe icon"
                />
                <span className="ms-3">Good vibes only</span>
              </div>
              <div className="col-12 col-md-4 mb-3 text-center">
                <Image
                  src={globe}
                  placeholder="blur"
                  width={50}
                  alt="good vibe icon"
                />
                <span className="ms-3">Global team / great quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormContact />

      <SocialComponent />
      <Footer />
    </>
  );
}
