import React, { useEffect, useState } from "react";
import "./home.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Home() {

  const location = useLocation();
  const {  pathname } = location;
  let currentPath = pathname.slice(1);
  let [link, setLink] = useState(currentPath);
  useEffect(() => {
    setLink(currentPath || 'START FRAMEWORK')
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div id="routers">
        <Outlet context={{ link, setLink }} />
      </div>
      <Footer />
    </>
  );
}
