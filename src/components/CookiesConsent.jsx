"use client"

import React from "react";
import { hasCookie, setCookie, deleteCookie } from "cookies-next";
import styles from "../styles/page.module.css";
import Link from "next/link";

export default function CookiesConsent() {

    const [showConsent, setShowConsent] = React.useState(false);

    React.useEffect(()=>{
        setShowConsent(!hasCookie("localConsent"));

    },[]);

    const acceptCookies = () =>{
        setShowConsent(false);
        setCookie("localConsent","true",{})
    };

    const refusedCookies = () =>{
        deleteCookie(null, "localConsent");
        setShowConsent(false);
    };

    if(!showConsent)
    {
        return null;
    }

    return(
        <div className={styles.cookiesconsentPanel}>
            <div className={styles.cookiesconsent}>
            <span className={styles.cookiesText}>
                This website using cookies to improve user experience. By using our website you consent to all the Terms of Usage in accordance with out <Link href="/privacy">Privacy Policy.</Link>
            </span>
            <button className={styles.cookiesButton} onClick={()=>acceptCookies()}>
                Accept
            </button>
            <button className={styles.cookiesButtonRefused} onClick={()=>refusedCookies()}>
                Refuse
            </button>
            </div>
        </div>
    )
}