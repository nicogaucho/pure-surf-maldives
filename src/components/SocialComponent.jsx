import Image from "next/image";
import { tropicalOrange } from "@/fonts/fonts";
import pureBlueLogoURL from "../../public/pure-surf-logo.png";
import instagramURL from "../../public/instagram.png";
import facebookURL from "../../public/facebook.png";

export default function SocialComponent() {
  return (
    <div id="social-network-section">
      <hr />
      <div className="container my-5 py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-4 mb-5 mb-md-0 text-center h-100">
            <Image
              src={pureBlueLogoURL}
              placeholder="blur"
              alt="pure blue retreat logo"
              width={200}
            />
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0 text-center d-flex flex-column h-100">
            <a href="https://www.instagram.com/pure_blue_surf_yoga_retreat/" target="_blank" 
              className={`${tropicalOrange.className}  tx-sec-color fs-3 mb-3`}
            > 
              Follow us on Instagram
            <Image
                src={instagramURL}
              placeholder="blur"
              alt="instagram logo"
              width={50}
            />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61557619311840&mibextid=LQQJ4d&rdid=3U46ScnkSMkdJh4K" target="_blank" 
              className={`${tropicalOrange.className}  tx-sec-color fs-3`}
            > 
              Follow us on facebook
            <Image
                src={facebookURL}
              placeholder="blur"
              alt="instagram logo"
              width={50}
            />
            </a>
          </div>
        </div> 
      </div>
    </div>
  )
} 