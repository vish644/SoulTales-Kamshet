import React from "react";
import SvgImage from "../common/SvgImage";

import TheyCookImg from "../assets/TheyCookImg.png";
import spendTimeAlone from "../assets/SpendTimeAlone.svg";
import noPhoneIcon from "../assets/NoPhone.svg";
import Button from "../common/Button";

const TheyCook = () => {
  return (
    <section>
      <div className="max-w-360 mx-auto flex flex-col md:flex-row items-center  gap-8 lg:gap-10 px-6 sm:px-10 py-10 sm:py-14 lg:py-16">
        {/* Left: copy */}
        <div className="max-w-2xl flex flex-col gap-2 lg:gap-5 order-2 md:order-1">
          <p className="text-secondary font-semibold font-heading text-base sm:text-lg lg:text-2xl">
            They cook
          </p>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              One Group Makes Dinner
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              For The Whole Camp, Every Night.
            </h1>
          </div>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed pb-4 lg:pb-10">
            Not helping the cook. Responsible for it. If they're slow, everybody
            eats late. Including me. Nobody swoops in at seven o'clock because
            the adults are hungry. Every child does this once.
          </p>

          {/* Stat pair */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <SvgImage
                  svgImage={spendTimeAlone}
                  label="They spend time alone"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-base">
                They Spend Time Alone
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                On one afternoon, each child sits by themselves for twenty
                minutes. In sight of an adult, out of sight of each other.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <SvgImage
                  svgImage={noPhoneIcon}
                  label="They sleep somewhere quiet, with no phone"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                They Sleep Somewhere Quiet, With No Phone
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Three nights. No phone, no tablet, no calls home. This is the
                part parents ask about most, and I've written about it properly
                further down.
              </p>
            </div>
          </div>

          <div>
            <Button />
          </div>
        </div>

        {/* Right: image collage */}
        <div className="relative w-full aspect-square  sm:max-w-sm lg:max-w-lg mx-auto md:mx-0 order-1 md:order-2">
          <div className="absolute inset-0 w-full sm:w-[90%] overflow-hidden">
            <img
              src={TheyCookImg}
              alt="Boy with backpack at a hillside lookout beside a Kamshet signpost, hills and lake behind him"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheyCook;
