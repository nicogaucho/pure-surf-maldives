import Image from 'next/image';
import Link from "next/link";
import { tropicalOrange } from "@/fonts/fonts";
import noahlogoURL from "../../public/noah-logo-bigger.png";

export default function Footer() {
  return (
    <div className="container-fluid bg-footer">
        <div className="container py-3">
          <footer className="row py-3 my-3 align-items-center">
            <div className="col mb-3">
              <p className={`${tropicalOrange.className} fs-4 tx-main-color m-0 p-0`}>partners</p>
              <a href="/" className="d-flex align-items-center mb-3 mx-md-3 link-body-emphasis text-decoration-none">
                <Image
                  src={noahlogoURL}
                  placeholder="blur"
                  width={100}
                  alt="noah surf logo"
                />
              </a>
            </div>

            <div className="col mb-3">
            <h5 className={`${tropicalOrange.className} fs-4 tx-main-color`}>Courses</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#surfing-section" className="nav-link p-0 text-white">
                  Surf courses
                  </Link>
                 
                </li>
                <li className="nav-item mb-2">
                  <Link href="#yoga-section" className="nav-link p-0 text-white">
                  Yoga courses
                  </Link>
               
                </li>
                <li className="nav-item mb-2">
                  <Link href="#packages-section" className="nav-link p-0 text-white">
                  All Packages
                  </Link>
                  
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className={`${tropicalOrange.className} fs-4 tx-main-color`}>Other</h5>
              <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#about-section" className="nav-link p-0 text-white">
                  About Pure blue retreat
                </Link>                  
                </li>
                <li className="nav-item mb-2">
                <Link href="#contacts-section" className="nav-link p-0 text-white">
                  Faqs
                </Link>                  
                </li>
                <li className="nav-item mb-2">
                <Link href="#contacts-section" className="nav-link p-0 text-white">
                  Careers
                </Link>                  
                </li>
                <li className="nav-item mb-2">
                <Link href="/privacy" className="nav-link p-0 text-white">
                  Privacy Policy
                </Link>                  
                </li>
                <li className="nav-item mb-2">
                <Link href="/terms" className="nav-link p-0 text-white">
                  Terms and Conditions
                </Link>                  
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className={`${tropicalOrange.className} fs-4 tx-main-color`}>Contact us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="tel:+9607750180" className="nav-link p-0 text-white">Phone number: +960 775-0180</a></li>
                <li className="nav-item mb-2 p-0 text-white">
                  {/* <a href=" https://wa.me/34643542843" target="_blank" className="nav-link p-0 text-white"> */}
                  Whats app: +34 643 542 843
                  {/* </a> */}
                </li>
                <li className="nav-item mb-2"><a href="mailto:info.pureblue@pureblueretreat.com" className="nav-link p-0 text-white">Email: info.pureblue@pureblueretreat.com </a></li>
              </ul>
            </div>

          </footer>
        </div>
      </div>
  )
}