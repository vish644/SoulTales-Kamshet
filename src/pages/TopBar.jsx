import React from "react";
import { socialIconsData } from "../data/data";
import SvgImage from "../common/SvgImage";
import PhoneCall from "../assets/phone-call1.svg";
import Mail from "../assets/Email.svg";

const TopBar = () => {
  return (
    <section className="bg-pink ">
      <div className="flex flex-row items-center justify-between gap-1.5 sm:gap-0 py-2 sm:py-3 max-w-360 mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-6 text-[10px] xs:text-xs sm:text-sm">
          <a
            href="tel:+919209180701"
            className="flex items-center gap-1 sm:gap-2 whitespace-nowrap"
          >
            <SvgImage
              svgImage={PhoneCall}
              label="Phone"
              width="w-3 sm:w-5"
              height="h-3 sm:h-5"
            />
            +91 92091-80701
          </a>
          <a
            href="mailto:soul@youngsoultales.com"
            className="flex items-center gap-1 sm:gap-2 whitespace-nowrap"
          >
            <SvgImage
              svgImage={Mail}
              label="Mail"
              width="w-3 sm:w-5"
              height="h-3 sm:h-5"
            />
            <span className="">soul@youngsoultales.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          {socialIconsData.map(({ name, icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer">
              <SvgImage
                svgImage={icon}
                label={name}
                width="w-4 sm:w-6"
                height="h-4 sm:h-6"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBar;
