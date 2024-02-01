import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container py-5 text-white">
          <div className="row">
            <div className="col-md-4">
              <div className="location text-center">
                <h2 className="fw-bold">LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="conact text-center">
                <h2 className="fw-bold">AROUND THE WEB</h2>
                <div className="d-flex  justify-content-center">
                  <span className="d-block me-2">
                    <FontAwesomeIcon icon={faFacebook} />
                  </span>
                  <span className="d-block me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span className="d-block me-2">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                  <span className="d-block me-2">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="freelancing text-center">
                <h2 className="fw-bold">ABOUT FREELANCER</h2>
                <span>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-rights py-4 text-white text-center ">
         <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
      </section>
    </>
  );
}
