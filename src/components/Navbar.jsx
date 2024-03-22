import Image from 'next/image'
import { tropicalOrange } from "@/fonts/fonts";
import purelogoURL from "../../public/pure-surf-logo-white.png";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-nav-custom fixed-top p-3"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list display-3 text-white"></i>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex"
          >
            <a
              className="navbar-brand me-0 d-none d-md-block col-lg-2"
              href="#"
            >
              <Image
                src={purelogoURL}
                alt="Logo"
                width={150}
                priority={false}
              />
            </a>
            <ul className="navbar-nav col-lg-8 justify-content-lg-center">
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fw-bold tx-orange" href="/surfcourses">
                  SURFING
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fw-bold tx-orange" href="/yogacourses">
                  YOGA
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fw-bold tx-orange" href="/activites">
                  ACTIVITIES
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fw-bold tx-orange" href="/packages">
                  PACKAGES
                </a>
              </li>
              <li className="nav-item mx-md-3 text-white">
                <a className="nav-link text-reset fw-bold tx-orange" href="/accomodations">
                  ACCOMMODATIONS
                </a>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-2 justify-content-lg-end">
              <button id="book-nav" className={`${tropicalOrange.className} btn text-white fs-4`}>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start bg-nav-custom" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <Image
                src={purelogoURL}
                alt="Logo"
                width={150}
              />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul className="navbar-nav col-lg-8 justify-content-lg-center">
              <li className="nav-item mx-md-3 my-2 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/surfcourses">
                  SURFING
                </a>
              </li>
              <li className="nav-item mx-md-3 my-2 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/yogacourses">
                  YOGA
                </a>
              </li>
              <li className="nav-item mx-md-3 my-2 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/activites">
                  ACTIVITIES
                </a>
              </li>
              <li className="nav-item mx-md-3 my-2 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/packages">
                  PACKAGES
                </a>
              </li>
              <li className="nav-item mx-md-3 my-2 text-white">
                <a className="nav-link text-reset fs-4 fw-bold tx-orange" href="/accomodations">
                  ACCOMMODATIONS
                </a>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-2 justify-content-lg-end my-2">
              <button id="book-nav" className="btn tx-blue-color fs-4 fw-bold m-0 p-0 tx-orange">
                BOOK NOW
              </button>
            </div>
        </div>
      </div>
    </>
  )
}