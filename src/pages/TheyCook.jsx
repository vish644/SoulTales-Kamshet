import React from "react";
import SvgImage from "../common/SvgImage";

import Cook from "../assets/Cook.jpg";
import spendTimeAlone from "../assets/SpendTimeAlone.svg";
import noPhoneIcon from "../assets/NoPhone.svg";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const TheyCook = () => {
  const { openForm } = useCallbackForm();
  return (
    <section className="mx-auto max-w-360">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left: copy */}
        <div className="w-full flex flex-col gap-2 lg:gap-5 order-2 lg:order-1 px-6 pt-5 sm:px-10 lg:py-14 ">
          <Reveal from="left" delay={0.75} className="flex flex-col gap-5 ">
            <p className="font-heading text-secondary text-lg sm:text-2xl">
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

            <p className="text-sm sm:text-base leading-relaxed">
              Not helping the cook. Responsible for it. If they're slow,
              everybody eats late. Including me. Nobody swoops in at seven
              o'clock because the adults are hungry. Every child does this once.
            </p>
          </Reveal>

          {/* Stat pair */}
          <Reveal from="bottom" delay={0.75}>
            {/* Stat pair */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-black/2 rounded-full p-2 shadow-sm">
                  <SvgImage
                    svgImage={spendTimeAlone}
                    label="They spend time alone"
                  />
                </div>
                <h3 className="font-bold text-sm">They Spend Time Alone</h3>
                <p className="text-sm leading-relaxed">
                  On one afternoon, each child sits by themselves for twenty
                  minutes. In sight of an adult, out of sight of each other.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-black/2 rounded-full p-2 shadow-sm">
                  <SvgImage
                    svgImage={noPhoneIcon}
                    label="They sleep somewhere quiet, with no phone"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  They Sleep Somewhere Quiet, With No Phone
                </h3>
                <p className="text-sm leading-relaxed">
                  Three nights. No phone, no tablet, no calls home. This is the
                  part parents ask about most, and I've written about it
                  properly further down.
                </p>
              </div>
            </div>

            <div className="hidden sm:block mt-5">
              <Button onClick={openForm} />
            </div>
          </Reveal>
        </div>

        {/* Right: image collage */}
        <div className="relative w-full aspect-square sm:max-w-lg lg:max-w-xl mx-auto md:mx-0 order-1 lg:order-2">
          <Reveal from="right" delay={0.75}>
            <div className="absolute inset-0 w-full overflow-hidden">
              <img
                src={Cook}
                alt="Boy with backpack at a hillside lookout beside a Kamshet signpost, hills and lake behind him"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TheyCook;
