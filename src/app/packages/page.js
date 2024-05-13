import Image from "next/image";
import Link from "next/link";
import { tropicalOrange } from "@/fonts/fonts";
import style from "../../styles/packages.module.css";
import pureSurfLogoWhite from "../../../public/pure-surf-logo-white.png";
import firststepURL from "../../../public/firststep.jpeg";
import improvementURL from "../../../public/stafania.jpeg";
import freespiritURL from "../../../public/freesurf.jpeg";
import Footer from "@/components/Footer";
import CookiesConsent from "@/components/CookiesConsent";

export default function Packages() {
  return (
    <>
    <CookiesConsent/>
      <div className={style.centerheropackage + " px-4 py-5 text-center"}>
        <Link href="/">
          <Image
            className="d-block mx-auto mb-4 img-fluid mt-5"
            src={pureSurfLogoWhite}
            alt="pure blue retreat logo"
            width={200}
          />
        </Link>
        <h1 className={`display-1 text-white my-5 ${tropicalOrange.className}`}>
          All Packages
        </h1>
      </div>

      <div id="plans" className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <header>
              <div className="pricing-header pb-md-4 mx-auto text-center">
                <p className="h3 tx-main-color">
                  Find your ideal package at <br /> Pure Blue Surf & Yoga Retreat in
                  the Maldives
                </p>
                <p className="text-secondary mt-3">
                  Packages included 7 nights and 8 days of accommodation. All
                  meal (breakfast, lunch, diner) , 10 yoga classes. Renting of
                  the materiel ( reef booth , surf skate , snorkeling items )
                </p>
              </div>
            </header>
          </div>
        </div>
        {/* <div className="table-responsive">
          <table className="table border align-middle">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">FIRST STEP</th>
                <th scope="col">IMPROVEMENT</th>
                <th scope="col">FREE SPIRIT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-info">
                <th scope="row">General Info</th>
                <td>
                  Perfect for learning the basics of surfing while relaxing with
                  yoga classes
                </td>
                <td>
                  Score great waves, train turns and flow. Stretch and connect
                  with yoga
                </td>
                <td>
                  Enjoy the bliss and peace of Maldives while discovering the
                  local culture and wonderful landscapes
                </td>
              </tr>
              <tr className="table-light">
                <th scope="row">What’s Included</th>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Accommodation 6 nights</li>
                    <li>All meals ( breakfast, lunch, dinner )</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Accommodation 6 nights</li>
                    <li>All meals ( breakfast, lunch, dinner )</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>2 sessions of surfing / day</li>
                    <li>Accommodation 6 nights</li>
                    <li>All meals ( breakfast, lunch, dinner )</li>
                  </ul>
                </td>
              </tr>
              <tr className="table-info">
                <th scope="row">Accomodation</th>
                <td>Private Room</td>
                <td>Private Room</td>
                <td>Private Room</td>
              </tr>
              <tr className="table-light">
                <th scope="row">Prices</th>
                <td>890€ / week</td>
                <td>790€ / week</td>
                <td>690€ / week</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>

      <div id="explore" className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2
              className={`${tropicalOrange.className} display-4 tx-main-color`}
            >
              Explore more about our packages
            </h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <ul
              className="nav nav-tabs d-flex justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item mx-3" role="presentation">
                <button
                  className="nav-link text-dark active spacing text-uppercase fw-bold"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  FIRST STEP
                </button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  IMPROVEMENT
                </button>
              </li>
              <li className="nav-item mx-3" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  FREE SPIRIT
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image
                        src={firststepURL}
                        alt="first step package"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className={`${tropicalOrange.className} h1`}>
                        First step
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        Our Pure Blue &quot;First Step&quot; package is perfect
                        for beginner surfers who want to learn to catch some
                        great waves step by step and join yoga classes to
                        stretch and relax. You will discover some of the best
                        beginner surf spots of Maldives and swim in crystalline
                        water. During the week there are also 2 yoga sessions by
                        the beautiful coast perfect to stretch and relax after
                        surfing. That&apos;s not it! You will be able to try
                        surf skateboarding and many other activities like
                        snorkelling or kayaking. Experience the joy of surfing
                        in paradise, where every moment is filled with adventure
                        and relaxation.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-around">
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        A typical day
                      </p>
                      <ul>
                        <li>
                          <strong>06.00</strong> – Hashtanga Yoga session.
                        </li>
                        <li>
                          <strong>07.30</strong> – Healthy breakfast (or later
                          if surfing at dawn before breakfast).
                        </li>
                        <li>
                          <strong>08.45</strong> – Discuss the surf conditions
                          and options for the day.
                        </li>
                        <li>
                          <strong>09.00</strong> – Choosing the surf spot and
                          off to ride epic waves.
                        </li>
                        <li>
                          <strong>12.30</strong> – Lunch time.
                        </li>
                        <li>
                          <strong>13.30</strong> – Another surf or two.
                        </li>
                        <li>
                          <strong>18.00</strong> – Yin Yoga session.
                        </li>
                        <li>
                          <strong>19.30</strong> – Dinner.
                        </li>
                      </ul>
                      <p className="text-secondary small">
                        *Keep in mind that this is just a general outline of
                        what a day of surf guiding might look like. Each day can
                        vary depending on factors like the weather, the waves,
                        and what the group or individual wants to do.*{" "}
                      </p>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        what is included
                      </p>
                      <ul>
                        <li>2 Yoga Classes</li>
                        <li>Surf theory before class</li>
                        <li>5 surf class for beginner</li>
                        <li>boat trip to the beginner spot</li>
                        <li>surf and equipement (booth, leash ...)</li>
                        <li>Introduction to surf skate class</li>
                        <li>Photo and video analysis</li>
                        <li>Surf culture and behavior</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        FOOD & ACCOMMODATION
                      </p>
                      <p>
                        At Pure Blue Surf & Yoga Retreat in the Maldives,
                        you&apos;ll enjoy tasty meals and cozy rooms. Our
                        delicious food is made with fresh ingredients, and our
                        rooms are comfy and relaxing. You can customize both
                        your meals and your room to suit your preferences.
                      </p>
                      <div className="mt-5">
                        <p>
                          <strong>From 860 €</strong> per person / Week
                        </p>
                        <button className="btn-book text-uppercase fw-bold">
                          <a
                            className="text-decoration-none text-white"
                            id="book-nav"
                            href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058"
                          >
                            Book now
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image
                        src={improvementURL}
                        alt="improvement package"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className={`${tropicalOrange.className} h1`}>
                        Improvement
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        This package is made for intermediate surfers looking to
                        elevate their skills and ride the waves to new heights.
                        Join us as we explore some of the finest surf spots in
                        the Maldives like Sultan and Honkeys, specially selected
                        to challenge and inspire your surfing abilities. Every
                        session is held by expert instructors and it also
                        includes photo and video analysis. In addition to
                        unforgettable surfing sessions, you will immerse
                        yourself in the tranquility of the Maldivian coastline
                        with two yoga sessions per week that will perfectly
                        complement your surfing adventures and be able to join
                        many extra adventures like snorkelling, kayaking and
                        many more.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-around">
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        A typical day
                      </p>
                      <ul>
                        <li>
                          <strong>07.30</strong> – Hatha Yoga session.
                        </li>
                        <li>
                          <strong>08.45</strong> – Healthy breakfast.
                        </li>
                        <li>
                          <strong>09.00</strong> – Time for experiencing the
                          island and enjoy the beach.
                        </li>
                        <li>
                          <strong>12.30</strong> – Lunch time.
                        </li>
                        <li>
                          <strong>17.30</strong> – Sunset Yin Yoga.
                        </li>
                        <li>
                          <strong>19.30</strong> – Dinner.
                        </li>
                      </ul>
                      <p className="text-secondary small">
                        *Keep in mind that this is just a general outline of
                        what a day of surf guiding might look like. Each day can
                        vary depending on factors like the weather, the waves,
                        and what the group or individual wants to do.*{" "}
                      </p>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        what is included
                      </p>
                      <ul>
                        <li>2 Yoga Classes</li>
                        <li>Surf guiding</li>
                        <li>Surf skate rental anytime</li>
                        <li>
                          Boat trip to Sultan and Honkeys waves
                        </li>
                        <li>
                          Personal and intimate video and photo analyse a week
                        </li>
                        <li>Surfboard rental</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        FOOD & ACCOMMODATION
                      </p>
                      <p>
                        At Pure Blue Surf & Yoga Retreat in the Maldives,
                        you&apos;ll enjoy tasty meals and cozy rooms. Our
                        delicious food is made with fresh ingredients, and our
                        rooms are comfy and relaxing. You can customize both
                        your meals and your room to suit your preferences.
                      </p>
                      <div className="mt-5">
                        <p>
                          <strong>From 790 €</strong> per person / Week
                        </p>
                        <button className="btn-book text-uppercase fw-bold">
                          <a
                            className="text-decoration-none text-white"
                            id="book-nav"
                            href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058"
                          >
                            Book now
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row mb-5 justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image
                        src={freespiritURL}
                        alt="free spirit package"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p className={`${tropicalOrange.className} h1`}>
                        Free spirit
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        The perfect blend of adventure and relaxation with our
                        Surf & Yoga + Stay package at Pure Blue Surf & Yoga
                        Retreat. Perfect for those seeking the thrill of surfing
                        and the tranquility of yoga, this package offers expert
                        surf instruction, yoga sessions focused on muscle
                        relaxation and flexibility, and accommodation in the
                        stunning island scenery. Experience the best of both
                        worlds as you choose to live an unforgettable journey of
                        wellness and adventure in paradise.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-around">
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        A typical day
                      </p>
                      <ul>
                        <li>
                          <strong>07.30</strong> – Hatha Yoga session.
                        </li>
                        <li>
                          <strong>08.45</strong> – Healthy breakfast.
                        </li>
                        <li>
                          <strong>09.00</strong> – Choosing the surf spot and
                          off to ride epic waves.
                        </li>
                        <li>
                          <strong>12.30</strong> – Lunch time.
                        </li>
                        <li>
                          <strong>13.30</strong> – Another surf or two.
                        </li>
                        <li>
                          <strong>17.30</strong> – Sunset Yin Yoga.
                        </li>
                        <li>
                          <strong>19.30</strong> – Dinner.
                        </li>
                      </ul>
                      <p className="text-secondary small">
                        *Keep in mind that this is just a general outline of
                        what a day of surf guiding might look like. Each day can
                        vary depending on factors like the weather, the waves,
                        and what the group or individual wants to do.*{" "}
                      </p>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        what is included
                      </p>
                      <ul>
                        <li>Choose schedule as you want</li>
                        <li>
                          Accomodation and food, be free to upgrade your package
                          with ours many activities
                        </li>
                        <li className="text-secondary">
                          * Surfboard not included
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-5">
                      <p className="text-uppercase tx-main-color lead">
                        FOOD & ACCOMMODATION
                      </p>
                      <p>
                        At Pure Blue Surf & Yoga Retreat in the Maldives,
                        you&apos;ll enjoy tasty meals and cozy rooms. Our
                        delicious food is made with fresh ingredients, and our
                        rooms are comfy and relaxing. You can customize both
                        your meals and your room to suit your preferences.
                      </p>
                      <div className="mt-5">
                        <p>
                          <strong>From 690 €</strong> per person / Week
                        </p>
                        <button className="btn-book text-uppercase fw-bold">
                          <a
                            className="text-decoration-none text-white"
                            id="book-nav"
                            href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058"
                          >
                            Book now
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
