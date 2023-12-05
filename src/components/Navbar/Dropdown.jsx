import React from "react";

const DashboardDropdown = ({ onLogout }) => {
  return (
    <div id="dashboard-links" className="py-3 small pe-3 ps-2">
      <ul className="fw-semibold">
        <li>
          <a href="http://maverickhabesha.com/dashboard.html">
            <span className="bi-person-fill text-warning"></span> &nbsp; Profile
          </a>
        </li>

        <hr className="my-2" />
        <li>
          <a href="http://maverickhabesha.com/setting.html">
            <span className="bi-gear-fill text-warning"></span> &nbsp; Setting
          </a>
        </li>

        <hr className="my-2" />
        <li>
          <a onClick={onLogout} className="cursor">
            <span className="bi-power text-warning"></span> &nbsp; Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardDropdown;
