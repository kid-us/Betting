import { React, useState } from "react";
import logo from "../../assets/mmm.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthenticateUser";
import SmallMenu from "./SmallMenu";

const Small = ({ user, balance }) => {
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
      <div className="d-block d-md-none">
        <div className="row justify-content-between px-2">
          <div className="col-2">
            <Link to="/sports/home" className="navbar-brand">
              <img src={logo} alt="logo" className="mt-1" width="45px" />
            </Link>
          </div>

          <div className="col-8 mt-2">
            <p className="text-center fs-5">
              <span
                className="reload-btn rounded bg-warning px-2 text-black pb-1 cursor"
                onClick={() => handleReload()}
              >
                ↻
              </span>
              <Link
                to="http://maverickhabesha.com/wallet.html"
                className="py-1 wallet rounded bg2"
              >
                <span id="sm-user-balance" className="py-1 px-3 bg-dark small">
                  {balance} <span className="small">ETB</span>
                </span>
                <span className="px-2 text-black bg-warning py-1 rounded bi-wallet-fill"></span>
              </Link>
            </p>
          </div>

          <div className="col-1">
            <p onClick={() => handleModal()} className="bi-list fs-1"></p>
          </div>
        </div>
      </div>

      {/* <!-- small device menu modal --> */}
      {modal && (
        <SmallMenu
          username={user}
          onClick={handleModal}
          onLogout={handleLogout}
        ></SmallMenu>
      )}
    </>
  );
};

export default Small;
