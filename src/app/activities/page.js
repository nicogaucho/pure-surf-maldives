import Image from "next/image";
import Link from "next/link";
import { tropicalOrange } from "@/fonts/fonts";
import style from "../../styles/activities.module.css";
import pureSurfLogoWhite from "../../../public/pure-surf-logo-white.png";
import snorkelURL from "../../../public/snorkel.jpg";
import jetskyURL from "../../../public/Jetsky1.jpg";
import kayakURL from "../../../public/kayaking.jpg";
import fishingURL from "../../../public/fishing.jpg";
import sandBankURL from "../../../public/sand-bank.jpeg";
import yoga1 from "../../../public/y1.jpg";
import skateURL from "../../../public/skate.JPG";
import Footer from "@/components/Footer";

export default function Activities() {
  return (
    <>
      <div className={style.centerheroaactivities + " px-4 py-5 text-center"}>
        <Link href="/">
          <Image
            className="d-block mx-auto mb-4 img-fluid mt-5"
            src={pureSurfLogoWhite}
            alt="pure blue retreat logo"
            width={200}
          />
        </Link>
        <h1 className={`${tropicalOrange.className} display-1 text-white my-5`}>
          Activities
        </h1>
      </div>

      <div id="explore" className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2
              className={`${tropicalOrange.className} display-4 tx-main-color`}
            >
              Explore more about our activities
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-dark active spacing text-uppercase fw-bold"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#snorkel-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="snorkel-tab-pane"
                  aria-selected="true"
                >
                  snorkeling
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="kayak"
                  data-bs-toggle="tab"
                  data-bs-target="#kayak-pane"
                  type="button"
                  role="tab"
                  aria-controls="kayak-pane"
                  aria-selected="false"
                >
                  Kayaking
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="jetsky"
                  data-bs-toggle="tab"
                  data-bs-target="#jetsky-pane"
                  type="button"
                  role="tab"
                  aria-controls="jetsky-pane"
                  aria-selected="false"
                >
                  Jet sky
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="fishing"
                  data-bs-toggle="tab"
                  data-bs-target="#fishing-pane"
                  type="button"
                  role="tab"
                  aria-controls="fishing-pane"
                  aria-selected="false"
                >
                  Fishing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="sand-bank"
                  data-bs-toggle="tab"
                  data-bs-target="#sand-bank-pane"
                  type="button"
                  role="tab"
                  aria-controls="sand-bank-pane"
                  aria-selected="false"
                >
                  SAND BANK CHILL
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="yoga"
                  data-bs-toggle="tab"
                  data-bs-target="#yoga-pane"
                  type="button"
                  role="tab"
                  aria-controls="yoga-pane"
                  aria-selected="false"
                >
                  SURF&YOGA
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-dark spacing text-uppercase fw-bold"
                  id="skate"
                  data-bs-toggle="tab"
                  data-bs-target="#skate-pane"
                  type="button"
                  role="tab"
                  aria-controls="skate-pane"
                  aria-selected="false"
                >
                  SURF SKate
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="snorkel-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image src={snorkelURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p
                        className={`${tropicalOrange.className} h1 tx-blue-color`}
                      >
                        snorkeling
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        Snorkeling in the Maldives is like stepping into an
                        underwater wonderland. You&apos;ll see colorful fish and
                        coral reefs, sea turtles and maybe even rays gliding
                        gracefully. With clear water, you can see everything
                        easily, making each snorkeling trip a magical
                        experience.
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        You can ask the equipment at your arrival or participate
                        to organized snorkeling trips for added price
                      </p>
                    </div>
                    <div className="col-12 my-3">
                      <p
                        className={`${tropicalOrange.className} fs-3 tx-blue-color text-center spacing`}
                      >
                        See our Snorkeling Plans
                      </p>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th scope="col">
                                <span className="tx-main-color">
                                  Snorkeling Type
                                </span>
                              </th>
                              <th scope="col">
                                <span className="tx-main-color">Duration</span>
                              </th>
                              <th scope="col">
                                <span className="tx-main-color">
                                  Price
                                </span>
                              </th>
                              <th scope="col">
                                <span className="tx-main-color">
                                  Description
                                </span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Fish Point snorkeling</th>
                              <td>2 HRS</td>
                              <td>from $80</td>
                              <td>
                                Explore the more vibrant marine life at Fish
                                Point
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Turtle snorkeling</th>
                              <td>2 HRS</td>
                              <td>from $60</td>
                              <td>
                                Swim with turtles in their natural habitat
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Stingray snorkeling (BOAT)</th>
                              <td>2 HRS</td>
                              <td>from $80</td>
                              <td>
                                Experience the thrill of ray snorkeling from a
                                boat
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Coral garden snorkeling</th>
                              <td>2 HRS</td>
                              <td>from $70</td>
                              <td>
                                Discover the underwater beauty of the coral
                                garden
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Shark point snorkeling</th>
                              <td>2 HRS</td>
                              <td>
                                from $25
                              </td>
                              <td>Dive into the adventure at Shark Point</td>
                            </tr>
                            <tr>
                              <th scope="row">Dolphin Cruise</th>
                              <td>2 HRS</td>
                              <td>from $100</td>
                              <td>
                                Criuse alongside dolphins in a relaxing journey
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="kayak-pane"
                role="tabpanel"
                aria-labelledby="kayak"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image src={kayakURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p
                        className={`${tropicalOrange.className} h1 tx-blue-color`}
                      >
                        Kayaking
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        Kayaking in the Maldives is an exciting way to explore
                        its pristine waters. Glide through the turquoise sea,
                        feeling the gentle breeze on your face as you paddle
                        along. You&apos;ll have the chance to navigate hidden
                        coves, secluded beaches, and stunning coastlines, all
                        while taking in the breathtaking beauty of the Maldivian
                        scenery.
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        Cruise in a clear blue water with the Kayak Cruise Trip
                        of 1 hours.
                      </p>
                      <ul className="list-unstyled">
                        <li className="fw-bold">Starting from 25$</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="jetsky-pane"
                role="tabpanel"
                aria-labelledby="jetsky"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image src={jetskyURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p
                        className={`${tropicalOrange.className} h1 tx-blue-color`}
                      >
                        JetSky
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        Jet skiing across the sparkling waters of Maldives is an
                        exhilarating adventure that you can&apos;t miss! Imagine
                        feeling the wind in your hair and the thrill of speed
                        while riding in pristine clear waters. With the vast
                        expanse of open water surrounding you, you&apos;ll have
                        plenty of space to explore and enjoy the freedom of the
                        ocean.
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        Jet ski your way around the scenic waters..
                      </p>
                      <ul className="list-unstyled">
                        <li className="fw-bold">Starting from 50$</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="fishing-pane"
                role="tabpanel"
                aria-labelledby="fishing"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image src={fishingURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p
                        className={`${tropicalOrange.className} h1 tx-blue-color`}
                      >
                        Fishing
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        Join the Noah Fishing Club. From colorful reef fish to
                        powerful game fish like tuna and marlin, there&apos;s
                        always something biting in the Maldivian waters. With
                        the warm sun on your face and the gentle lapping of
                        waves, fishing here is not just about the catch –
                        it&apos;s about the whole experience of being out on the
                        water, enjoying nature, and making memories that last a
                        lifetime.
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        Enjoy a serene sunset while catching your most beautiful
                        fish. <br /> Duration: 4 hours.
                      </p>
                      <ul className="list-unstyled">
                        <li className="fw-bold">Starting from 180$</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="sand-bank-pane"
                role="tabpanel"
                aria-labelledby="sand-back-tab"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image src={sandBankURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p
                        className={`${tropicalOrange.className} h1 tx-blue-color`}
                      >
                        Sand bank chill
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        A sandbank excursion in the Maldives is like discovering
                        your own private paradise. Picture yourself on a
                        pristine stretch of golden sand surrounded by
                        crystal-clear turquoise waters. It&apos;s the perfect
                        spot to soak up the sun, go for a swim, or simply relax
                        and take in the breathtaking beauty of your
                        surroundings. Whether you&apos;re travelling with
                        friends, family, or solo, this activity it&apos;s an
                        experience you&apos;ll treasure forever.
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        You can add this activity on at time of reservation or
                        directly in the house at your arrival. <br /> Duration:
                        2 hours.
                      </p>
                      <ul className="list-unstyled">
                        <li className="fw-bold">Starting from 40$</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="yoga-pane"
                role="tabpanel"
                aria-labelledby="sand-back-tab"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row justify-content-around">
                    <div className="col-12 col-md-5 mb-3 mt-md-5">
                      <Image src={yoga1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p
                        className={`${tropicalOrange.className} h1 tx-blue-color`}
                      >
                        SURF&YOGA ULTRA EXCURSION
                      </p>
                      <p className="lead tx-main-color">Surf Ultra</p>
                      <p className="text-secondary">
                        Improve your surfing with personalized video analysis,
                        surf safaris to new spots, Surfskate classes, and
                        dedicated coaching sessions to master your surf skills.
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        You can add this activity
                        directly in the house at your arrival.
                      </p>
                      <p className="lead tx-main-color">Yoga Ultra</p>
                      <p className="text-secondary">
                        Enjoy additional guided sessions, personalized coaching,
                        and exclusive workshops to deepen your practice and find
                        inner peace in the beautiful Maldives.
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        You can add this activity
                        directly in the house at your arrival.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="skate-pane"
                role="tabpanel"
                aria-labelledby="sand-back-tab"
                tabIndex="0"
              >
                <div className="container p-5">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5 mb-3">
                      <Image src={skateURL} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-5 mb-3">
                      <p
                        className={`${tropicalOrange.className} h1 tx-blue-color`}
                      >
                        Surf skate
                      </p>
                      <p className="lead tx-main-color">Overview</p>
                      <p className="text-secondary">
                        A sandbank excursion in the Maldives is like discovering
                        your own privat
                      </p>
                      <p className="lead tx-main-color">How to do it</p>
                      <p className="text-secondary">
                        You can add this activity on at time of reservation or
                        directly in the house at your arrival. <br /> Duration:
                        2 hours.
                      </p>
                      <ul className="list-unstyled">
                        <li className="fw-bold">Starting from 20$</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 m-0 p-0">
            <div
              className={style.cardaactivities1 + " card rounded-0 border-0"}
            ></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div
              className={style.cardaactivities2 + " card rounded-0 border-0"}
            ></div>
          </div>
          <div className="col-12 col-md-4 m-0 p-0">
            <div
              className={style.cardaactivities3 + " card rounded-0 border-0"}
            ></div>
          </div>
        </div>
        <div className="container my-5 py-4">
          <div className="row my-5">
            <div className="col-12 text-center">
              <p
                className={`${tropicalOrange.className} display-4 tx-main-color text-uppercase`}
              >
                Do you wanna try one of our activity?
              </p>
              <p className="lead">
                It&apos;s simple, you only need to click the button below <br />{" "}
                and add one of those amazing activities in your holiday package.{" "}
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 text-center">
              <button className="btn-book text-uppercase fw-bold">
              <a className="text-decoration-none text-white" id="book-nav"
                 href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058&token=AmxveVZe89vIhQpumcTGHxdz">Book now</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
