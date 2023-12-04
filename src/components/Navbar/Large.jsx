import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logolight1.png";
import { navbar } from "../../constant/nav";
import Dropdown from "./Dropdown";
import { useAuth } from "../../utils/Auth";

const Large = ({ user, balance }) => {
  const auth = useAuth();
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };
  const handleLogout = () => {
    auth.logout();
  };
  const handleReload = () => {
    location.reload();
  };
  return (
    <>
      <div className="d-none d-md-block">
        <div className="float-start">
          <Link to={"/sports/home"} className="navbar-brand ps-5">
            <img src={logo} alt="logo" width="120px" />
          </Link>
        </div>

        <div className="float-end pe-5 pt-2 small fw-semibold">
          <span className="bg rounded py-1">
            <span
              className="reload-btn rounded fs-6 bg-warning text-black pb-1 cursor"
              onClick={() => handleReload()}
            >
              ↻
            </span>

            <Link
              to="http://maverickhabesha.com/wallet.html"
              className="wallet bg py-1 rounded"
            >
              <span id="user-balance" className="px-3 small">
                {balance} ETB
              </span>

              <span className="px-3 text-black bg-warning py-1 rounded bi-wallet-fill">
                &nbsp; Wallet
              </span>
            </Link>
          </span>

          {navbar.map((nav) => (
            <Link key={nav.title} to={nav.link} className="ms-5">
              <img src={nav.img} alt="" width="20px" /> {nav.title}
            </Link>
          ))}

          <span
            onClick={() => handleModal()}
            className="cursor bi bi-person-fill text-warning ms-5"
          >
            <span id="user-name"></span>
            &nbsp;{user} &nbsp;
            <span
              id="icon-link"
              className={` ${
                modal ? "bi-caret-up-fill" : "bi-caret-down-fill"
              } small`}
            ></span>
          </span>
        </div>
      </div>

      {/* <!-- Dashboard dropdown --> */}
      {modal && <Dropdown onLogout={handleLogout}></Dropdown>}
    </>
  );
};

export default Large;
