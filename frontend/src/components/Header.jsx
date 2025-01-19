import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      {/* Left Side  */}
      <div>
        <p>
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>
            Simply Browse through our extensive List of Trusted Doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="http://">
          Book Appointment <img src={assets.arrow_icon} alt="arrow icon" />
        </a>
      </div>
      {/* Right Side  */}
      <div></div>
    </div>
  );
};

export default Header;
