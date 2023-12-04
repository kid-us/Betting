import React from "react";
import { Link } from "react-router-dom";
import { supports } from "../../constant/footer";
const Support = () => {
  return (
    <>
      <div className="mt-5 col-lg-2 col-md-3 col-4 fw-semibold">
        <p>Support</p>
        {supports.map((support) => (
          <p key={support.id} className="small">
            <Link className="footer-link" to={support.link}>
              {support.title}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Support;
