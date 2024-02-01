import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./star.css";

export default function Star(props) {
  return (
    <>
      <div className={(props.myClass || '') +' star'}>
        <div className="text-center pt-4 text-white">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            {props.linkName} 
            
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="line ms-3 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
}
