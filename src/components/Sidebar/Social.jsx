import React from "react";
import "./modal.css";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <>
      <div
        id="social-media"
        className="animate__animated animate__fadeInUp rounded shadow-lg"
      >
        <p>
          <Link
            to="https://www.tiktok.com/@maverickhabesha?_t=8gzf8eJ6Po6&_r=1https://www.tiktok.com/@maverickhabesha?_t=8gzf8eJ6Po6&_r=1"
            className="text-warning fw-semibold small bi-tiktok fs-5"
          >
            <span className="small"> &nbsp; &nbsp; Tik tok</span>
          </Link>
        </p>
        <p>
          <Link
            to="https://instagram.com/maverickhabesha2023?igshid=NGVhN2U2NjQ0Yg=="
            className="text-warning fw-semibold small bi-instagram fs-5"
          >
            <span className="small"> &nbsp; &nbsp; Instagram </span>
          </Link>
        </p>
        <p>
          <Link
            to="https://t.me/maverick45rd"
            className="text-warning fw-semibold small bi-telegram fs-5"
          >
            <span className="small"> &nbsp; &nbsp; Telegram</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Social;
