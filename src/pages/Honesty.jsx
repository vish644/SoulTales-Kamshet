import React from "react";
import Button from "../common/Button";
import HonestyImg from "../assets/Honesty.png"; // replace with your actual image
import bgImage from "../assets/bgImage.png";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const Honesty = () => {
  const { openForm } = useCallbackForm();
  return (
    <section className="relative grid w-full grid-cols-1 bg-primary lg:grid-cols-2 max-w-360 mx-auto">
      {/* LEFT: navy bgImage panel + text — order-2 on mobile so it renders below the image */}
      <div className="order-2 relative w-full lg:order-1 min-h-110 sm:min-h-100 lg:min-h-screen shrink-0 z-10 bg-primary">
        <div
          className="absolute inset-0 h-full bg-no-repeat bg-cover bg-center lg:bg-left"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />

        {/* Subtle dark overlay so text stays readable regardless of crop */}
        <div className="absolute inset-0 bg-primary lg:bg-primary/20" />

        <Reveal from="left" delay={0.75}>
          <div className="relative z-10 w-full flex flex-col justify-center gap-3 sm:gap-6 text-white px-6 sm:px-10 py-8 sm:py-12 lg:py-16 lg:min-h-screen lg:max-w-2xl">
            <h2 className="font-body text-[26px] font-bold md:text-[32px] lg:text-h1 leading-12">
              This Isn't For Every Child
            </h2>

            <h3 className="font-heading text-xl leading-7 font-medium text-secondary md:text-2xl lg:text-[28px]">
              Honestly:
            </h3>

            <div className="flex flex-col gap-4">
              <p className="text-sm lg:text-base leading-6 tracking-normal">
                If your child is going through something significant right now -
                a loss, a big change at home, something they're struggling with
                - this may not be the right three days, and I'd want to talk
                about it properly before you book.
              </p>

              <p className="text-sm lg:text-base leading-6 tracking-normal">
                If you're hoping we'll fix a behaviour, please don't send them.
                Children work out very fast when the adults are working on them
                rather than interested in them, and everything you'd want from
                this stops being possible the moment they do.
              </p>

              <p className="text-sm lg:text-base leading-6 tracking-normal">
                And if you'd like to stay nearby just in case - I understand the
                instinct, and I'd still say no. Half the value of these three
                days is that you weren't there.
              </p>
            </div>

            <div className="mt-2 hidden sm:block">
              <Button title="Ask for a call" onClick={openForm} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Right column - full-bleed image: order-1 on mobile so it renders above the text */}
      <div className="order-1 h-80 w-full sm:h-80 md:h-145 lg:order-2 lg:h-auto lg:min-h-175 p-5 md:p-10 lg:p-0">
        <img
          src={HonestyImg}
          alt="Child smiling holding a cookie"
          className="h-full w-full object-top lg:object-center"
        />
      </div>

      {/* Overlapping torn/squiggle edge — desktop only, sits ON TOP of the seam */}
      <div
        className="absolute inset-y-0 z-20 hidden lg:block"
        style={{
          left: "calc(50% - 75px)",
          width: "140px",
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "auto 100%",
        }}
      />
    </section>
  );
};

export default Honesty;
