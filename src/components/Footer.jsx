import Image from 'next/image';
import { tropicalOrange } from "@/fonts/fonts";
import purelogoURL from "../../public/pure-surf-logo-white.png";
import noahlogoURL from "../../public/noah-logo-bigger.png";

export default function Footer() {
  return (
    <div className="container-fluid bg-footer">
        <div className="container py-3">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-3 align-items-center">
            <div className="col mb-3">
              <p className={`${tropicalOrange.className} fs-4 tx-main-color m-0 p-0`}>partners</p>
              <div className="d-flex">
              <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <Image
                  src={purelogoURL}
                  placeholder="blur"
                  width={200}
                  alt="pure surf logo"
                />
              </a>
              <a href="/" className="d-flex align-items-center mb-3 mx-md-3 link-body-emphasis text-decoration-none">
                <Image
                  src={noahlogoURL}
                  placeholder="blur"
                  width={100}
                  alt="noah surf logo"
                />
              </a>
              </div>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
              <h5 className={`${tropicalOrange.className} fs-4 tx-main-color`}>Courses</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Surf courses</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Yoga courses</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">All Packages</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className={`${tropicalOrange.className} fs-4 tx-main-color`}>Other</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About Pure Surf</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Faqs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Careers</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className={`${tropicalOrange.className} fs-4 tx-main-color`}>Contact us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Phone number: 333 333 333</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Whats app: 333 333 333</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Email: pure-surf@surfing.surf</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
  )
}