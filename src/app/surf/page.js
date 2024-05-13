import Image from "next/image";
import Link from 'next/link';
import { tropicalOrange } from "@/fonts/fonts";
import style from "../../styles/surf.module.css";
import pureSurfLogoWhite from "../../../public/pure-surf-logo-white.png";
import surfPackURL from "../../../public/surf-pack.jpeg";
import surfPack2URL from "../../../public/surf-pack-2.jpeg";
import skateURL from "../../../public/skate.jpg";
import mapURL from "../../../public/map.jpg";
import Footer from "@/components/Footer";
import CookiesConsent from "@/components/CookiesConsent";

export default function Surf() {
  return (
    <>
      <CookiesConsent />
      <div className={style.centerherosurf + " px-4 py-5 text-center"}>
        <Link href="/">
          <Image
            className="d-block mx-auto mb-4 img-fluid mt-5"
            src={pureSurfLogoWhite}
            alt="pure blue retreat logo"
            width={200}
          />
        </Link>
        <h1 className={`display-1 text-white my-5 ${tropicalOrange.className}`}>
          Surf Courses
        </h1>
      </div>

      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="h2 tx-main-color">
              Pristine waves and stunning tropical scenery.
            </p>
            <p className="text-secondary">
              Our surf lessons are designed for all levels. Perfect for people
              whom wants to start and learn in the paradise, <br /> for the one
              who already know a bit about surfing and want to get better or
              whom ready to score perfect waves... <br /> Pure blue Surf & Yoga
              retreat will always provide you the best way to have fun and learn
              new things!
            </p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <Image src={surfPackURL} className="img-fluid" alt="surf image" />
          </div>
          <div className="col-12 col-md-4 mb-5">
            <p className="tx-main-color text-uppercase">Levels</p>
            <p className={`h1 ${tropicalOrange.className}`}>
              WAVES FOR ALL LEVELS
            </p>
            <p className="mt-5 text-start">
              Wether you are a beginner or an experienced surfer we have all the
              options for you to enjoy some of the best waves of Maldives and
              have fun in the blue clear water
            </p>
            <p className="mt-2 text-start">
              Known as a true swell magnet during the season, Jailbreak, which is within walking
              distance, offers perfect conditions with offshore winds and waves working at every tide
              and size... Come and experience this world-class spot !
            </p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <Image src={surfPack2URL} className="img-fluid" alt="surf image" />
          </div>
          <div className="col-12 col-md-4 mb-5 order-md-first">
            <p className="tx-main-color text-uppercase">SPOTS</p>
            <p className={`h1 ${tropicalOrange.className}`}>
              SMOOTH AND GLASSY WAVES
            </p>
            <p className="mt-5">
              Discover the ultimate surfing haven along this <br /> picturesque
              coastline. Here, youll find perfect waves that cater to all levels
              of surfers. From gentle rollers to thrilling tubes, its a dream
              come true for anyone looking to catch some waves and soak up the
              sun.
            </p>
          </div>
        </div>
        <div className="row mb-5 justify-content-around align-items-center">
          <div className="col-12 col-md-5 mb-5">
            <Image src={skateURL} alt="skate image" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 mb-5">
            <p className="tx-main-color text-uppercase">Surf Skate</p>
            <p className={`h1 ${tropicalOrange.className}`}>Surfing on land</p>
            <p className="mt-5 text-start">
              We will practice surf skating at the nearby skatepark and improve
              our balance, coordination, and technique. This will translates
              directly to better performance in real surfing. It&apos;s a great
              way to sharpen our skills and have fun outside of the water.
            </p>
          </div>
        </div>
        {/* <div className="col-12 mb-5 text-center">
            <button className="btn-book text-uppercase fw-bold mt-5">
                I want to surf!
            </button>
        </div> */}
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="h3 tx-main-color text-uppercase">Main point breaks</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <Image src={mapURL} alt="map image" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container my-5 py-4">
        <div className="row my-5">
          <div className="col-12 text-center">
            <p className={`display-4 tx-main-color text-uppercase ${tropicalOrange.className}`}>
              Do you wanna try to surf with us?
            </p>
            <p className="lead">
              It&apos;s simple, you only need to click the button below <br />{" "}
              and add one of our personal surf course in your holiday package.{" "}
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 text-center">
            <button className="btn-book text-uppercase fw-bold">
              <a className="text-decoration-none text-white" id="book-nav"
                href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128058">Book now</a>
            </button>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <p className="h3 tx-main-color">WHAT WILL YOU LEARN</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 mb-5">
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">The lineup</h5>
                <p className="card-text">
                  Introduction to the lineup and the written and unwritten rules
                  to follow when surfing in this area.
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Surf safety, surf etiquette & priority rules
                </h5>
                <p className="card-text">
                  We cover topics on how to behave in the water, crowd handling,
                  positioning, pecking order, how to fall, and where to paddle
                  back out without being in danger of hurting yourself or
                  others.
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Ocean awareness</h5>
                <p className="card-text">
                  In this course, youll no longer only be in the shallows on the
                  inside sandbank but outside in deeper water. Therefore, well
                  teach you everything you need to know about ocean safety and
                  factors like rips, tides, waves and weather to ensure your
                  safety in the ocean.{" "}
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Spot guiding</h5>
                <p className="card-text">
                  Throughout the week, the local surf teacher will take you to
                  different spots according to the swell and weather conditions.
                  This means youll learn what spots work best on different
                  tides, swell- and wind directions, so you can spend your time
                  surfing the best spots at the right times.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Individual coaching</h5>
                <p className="card-text">
                  The coach will see what you need to improve and which
                  adjustments are required to take your surfing to the next
                  level.{" "}
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Surf equipment</h5>
                <p className="card-text">
                  There are many types of boards for different kinds of waves,
                  body types and skillsets. During the course, youll learn more
                  about these. Youll also have the opportunity to try out some
                  different ones.
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Surfing green waves</h5>
                <p className="card-text">
                  The goal for this course is to become comfortable catching
                  waves on your own, standing up and surfing down the line,
                  going left and right.
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Surfing terms</h5>
                <p className="card-text">
                  Learn the language of surfing and develop a broader
                  understanding of the jargon and culture.{" "}
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Board control in the lineup
                </h5>
                <p className="card-text">
                  Well help you refresh and tighten up your lineup game, making
                  sure you know how to position yourself on the board and in the
                  lineup.{" "}
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Techniques for passing through the waves
                </h5>
                <p className="card-text">
                  We’ll practice the turtle roll and the duck dive depending on
                  your level.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
