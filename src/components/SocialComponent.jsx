import Image from "next/image";
import { tropicalOrange } from "@/fonts/fonts";
import pureBlueLogoURL from "../../public/pure-surf-logo.png";
import instagramURL from "../../public/instagram.png";

export default function SocialComponent() {
  return (
    <div id="social-network-section">
      <hr />
      <div className="container my-5 py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-4 mb-5 mb-md-0 text-center">
            <Image
              src={pureBlueLogoURL}
              placeholder="blur"
              alt="pure blue retreat logo"
              width={300}
            />
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0 text-center">
            <a href="https://www.instagram.com/pure_blue_surf_yoga_retreat/" target="_blank" 
              className={`${tropicalOrange.className}  tx-sec-color fs-3`}
            > 
              Follow us on Instagram
            <Image
                src={instagramURL}
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