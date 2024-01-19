import React from "react";
import logo from "../assets/logolight1.png";
import { Link } from "react-router-dom";
import Feature from "./Footer/Feature";
import Games from "./Footer/Games";
import Support from "./Footer/Support";
import About from "./Footer/About";

const Footer = () => {
  return (
    <>
      <footer className="ps-lg-5 pb-lg-0 mb-lg-0 pb-5 mb-5">
        <div id="footer" className="container">
          <div className="row justify-content-center">
            <div className="mt-5 col-lg-3 col-md-12 col-12 small">
              <img src={logo} className="" alt="logo" width="200px" />
              <p className="small text-secondary mt-3">
                This website offers gaming with risk experience. To be a user of
                our site you must be over 18 years old. We are not responsible
                for the violation of your local laws related to i-gaming. Play
                responsibly and have fun on Maverick Habesha.
              </p>
            </div>

            <Feature></Feature>

            <Games></Games>

            <Support></Support>

            <About></About>

            <div className="col-lg-5 col-md-6 col-1 mt-lg-3 mt-5">
              <p className="small footer-link d-none d-md-block">
                &copy; 2023 All right reserved Maverick Habesha
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-7 mt-lg-3 mt-5">
              <Link
                to="https://www.tiktok.com/@maverickhabesha?_t=8gzf8eJ6Po6&_r=1https://www.tiktok.com/@maverickhabesha?_t=8gzf8eJ6Po6&_r=1"
                className="text-warning bi-tiktok fs-5"
              ></Link>
              <Link
                to="https://instagram.com/maverickhabesha2023?igshid=NGVhN2U2NjQ0Yg=="
                className="text-warning bi-instagram fs-5 mx-5"
              ></Link>
              <Link
                to="https://t.me/maverick45rd"
                className="text-warning bi-telegram fs-5"
              ></Link>
              <p className="small footer-link mt-3 d-block d-md-none">
                &copy; 2023 All right reserved Maverick Habesha
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
