import React from "react";
import PhoneCall from "../assets/PhoneCall.svg";
import SvgImage from "./SvgImage";

const Button = ({
  title = "Ask for a call",
  onClick,
  type,
  icon = true,
  className,
}) => {
  return (
    <button
      className={`flex items-center gap-2  bg-secondary text-black cursor-pointer px-4 py-2.5 text-xs md:px-5 md:py-3.5 md:text-sm lg:px-5 lg:py-4 lg:text-base ${className}`}
      onClick={onClick}
      type="submit"
    >
      <h3 className="font-body font-semibold text-xs sm:text-sm lg:text-base leading-4 tracking-[0.75px] uppercase text-white">
        {title}
      </h3>
      {icon && (
        <SvgImage svgImage={PhoneCall} label="Offer" width="w-5" height="h-5" />
      )}
    </button>
  );
};

export default Button;
