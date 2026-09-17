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
      className={`flex items-center justify-center gap-2.5 w-54.5 h-10.5 md:w-60 md:h-12 lg:w-65 lg:h-13 bg-secondary text-black cursor-pointer px-4 py-2.5 md:px-5 md:py-3.5 lg:px-6 lg:py-4 ${className}`}
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
