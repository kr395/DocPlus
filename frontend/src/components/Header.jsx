import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10">
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
      <div>
        <img src={assets.header_img} alt="" srcset="" />g
      </div>
    </div>
  );
};

export default Header;
