import React from "react";
import SvgImage from "../common/SvgImage";
import PhoneCall from "../assets/PhoneCall.svg";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <section>
      <div>
        <div>
          <SvgImage
            svgImage={PhoneCall}
            label="Offer"
            width="w-16"
            height="h-16"
          />
          <Button />
        </div>
        <div></div>
      </div>
      <div></div>
    </section>
  );
};

export default Navbar;
