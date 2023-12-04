import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebar } from "../../constant/sidebar";
import FAQ from "./FAQ";
import Social from "./Social";

const SIdebar = () => {
  const [faq, setFaq] = useState(false);
  const [social, setSocial] = useState(false);

  const handleModal = (show) => {
    if (show === 7) {
      if (!faq) {
        setFaq(true);
      } else {
        setFaq(false);
      }
    } else if (show === 8) {
      if (!social) {
        setSocial(true);
      } else {
        setSocial(false);
      }
      console.log(show);
    }
  };
  return (
    <>
      {sidebar.map((side) => (
        <div key={side.id} className="mt-3">
          <p className="bg p-2 rounded">
            {side.btn ? (
              <Link onClick={() => handleModal(side.id)}>
                <img src={side.img} alt="" width="23px" />
                <span className="text-white fs-6 ms-2">{side.title}</span>
              </Link>
            ) : (
              <Link to={side.link ? side.link : ""}>
                <img src={side.img} alt="" width="23px" />
                <span className="text-white fs-6 ms-2">{side.title}</span>
              </Link>
            )}
          </p>
        </div>
      ))}

      {faq && <FAQ onClick={() => handleModal(7)}></FAQ>}
      {social && <Social></Social>}
    </>
  );
};

export default SIdebar;
