import React from "react";
import { Link } from "react-router-dom";
import { aboutUs } from "../../constant/footer";

const About = () => {
  return (
    <div className="mt-5 col-lg-2 col-md-3 col-4 fw-semibold">
      <p>About Us</p>
      {aboutUs.map((about) => (
        <p key={about.id} className="small">
          <Link className="footer-link" to={about.link}>
            {about.title}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default About;
