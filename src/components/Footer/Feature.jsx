import React from "react";
import { features } from "../../constant/footer";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <>
      <div className="mt-5 offset-lg-1 col-lg-2 col-md-3 col-4 fw-semibold">
        <p>Features</p>
        {features.map((feature) => (
          <p key={feature.id} className="small">
            <Link className="footer-link" to={feature.link}>
              {feature.title}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Feature;
