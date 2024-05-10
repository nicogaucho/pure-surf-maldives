
import style from "../../styles/privacy.module.css";
import Footer from "@/components/Footer";
import CookiesConsent from "@/components/CookiesConsent";

export default function Privacy() {
  return (
    <>
    <CookiesConsent/>
      <div className={style.banner}>

      </div>

      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <p className="h2 tx-main-color">
             Privacy Policy - Pure Blue Retreat
            </p>
            <p className="text-secondary">
            Welcome to Pure Blue Retreat&apos;s Privacy Policy. 
            This policy outlines how we collect, 
            use, and protect your personal data when you visit our website or use our services. 
            Pure Blue Retreat is committed to ensuring the privacy and security of your data.
            </p>
            <p className="h2 tx-main-color">
            Information We Collect
            </p>
            <p className="text-secondary">
            At Pure Blue Retreat, we collect data to enhance user experience and improve our services. 
            The data collected includes non-personal information and is securely stored according to the latest global 
            and European security standards.
            </p>
            <p className="h2 tx-main-color">
            Types of Data Collected
            </p>
            <p className="text-secondary">
            We collect data to facilitate user experience and to tailor our services,
             particularly in providing surfing and yoga course packages in the Maldives. 
             The data collected may include:<br/>
             User preferences and interactions with our website.<br/>
             Technical information such as device type, browser, and IP address.<br/>
             Data used to refine advertising efforts.
            </p>
            <p className="h2 tx-main-color">
            Use of Collected Data
            </p>
            <p className="text-secondary">
            The data collected is used as an indicator to 
            tailor packages and offers to better suit user preferences. 
            This enhances the user experience by providing personalized and relevant content.
            </p>
            <p className="h2 tx-main-color">
            Security Measures
            </p>
            <p className="text-secondary">
            Pure Blue Retreat takes the security of your data seriously. 
            We implement robust security measures in compliance with the latest 
            global and European data protection laws, such as the General Data Protection Regulation (GDPR). 
            These measures ensure that your data is protected against unauthorized access, disclosure, alteration, 
            or destruction.
            </p>
            <p className="h2 tx-main-color">
            User Rights
            </p>
            <p className="text-secondary">
            Users have the right to choose whether or not to share 
            their data or accept cookies when using our site. 
            We respect your privacy preferences and provide options for managing cookie preferences.
            </p>
            <p className="h2 tx-main-color">
            Updates to Privacy Policy
            </p>
            <p className="text-secondary">
            Pure Blue Retreat reserves the right to update this Privacy Policy as necessary. 
            Users will be notified of any changes via email. 
            It is recommended to review this policy periodically for any updates.
            </p>
            <p className="h2 tx-main-color">
            Contact Us
            </p>
            <p className="text-secondary">
            If you have any questions or concerns regarding our Privacy Policy, 
            please contact us at <a href="mailto:info.pureblue@pureblueretreat.com">info.pureblue@pureblueretreat.com </a> <br/>
            This Privacy Policy was last updated on 25 April 2024.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
