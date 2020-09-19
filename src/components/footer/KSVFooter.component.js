import React from "react";
import { EnvelopeFill, GeoAlt } from "react-bootstrap-icons";
import "./KSVFooter.css";
import fbLogo from "../../img/fb-logo-72.png";

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&amp;destination=51.71454%2C19.47813&amp;fbclid=IwAR1XPypGQD1DJ7yEzRsL_WFAiMEZSzMT1YLxLA4fv_wT-ugkF_Cbbyw7zvs";
const FB_LINK = "https://www.facebook.com/victorialodz1996";

const KSVFooter = () => {
    return (
        <footer className="footer justify-content-between p-5 d-flex mt-auto align-items-center ksv-bg">
            <div>
                <EnvelopeFill size="24" />{' '}<a className="d-none d-md-inline" href="mailto:biuro@victorialodz.pl">biuro@victorialodz.pl</a>
            </div>
            <div>
                <img src={fbLogo} width="24" height="24" alt="" />{' '}<a className="d-none d-md-inline" rel="noreferrer noopener" tabIndex="0" target="_blank" href={FB_LINK}>Odwiedź nas na Facebooku!</a>
            </div>
            <div>
                <GeoAlt size="24"/>{' '}
                <a className="d-none d-md-inline" rel="noreferrer noopener" tabIndex="0" target="_blank" href={GOOGLE_MAPS_LINK}>
                    Kosynierów Gdyńskich 18, 93-357 Łódź
                </a>
            </div>
        </footer>
    );
};

export default KSVFooter;