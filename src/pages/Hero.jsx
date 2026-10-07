import React from "react";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

// Images
import bgImage from "../assets/bgImage.png";
import mobileBgImage from "../assets/MobileHeroImage.png";
import heroImg from "../assets/HeroImage.png";
import NoPhonesImg from "../assets/NoPhonesImage.png";

const Hero = () => {
  const { openForm } = useCallbackForm();

  return (
    <section className="relative w-full overflow-hidden lg:max-h-screen max-w-360 mx-auto">
      <div className="flex flex-col lg:flex-row w-full max-h-screen relative">
        {/* MOBILE/TABLET ONLY: image on top */}
        <div className="relative w-full h-96 md:h-140 lg:hidden shrink-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          <img
            src={NoPhonesImg}
            alt="No phones. No parents. Nothing done for them."
            className="absolute -right-6 sm:right-2 top-2 w-[60%] max-w-[250px] h-auto max-h-16 sm:max-h-24 object-contain z-10"
          />
        </div>
        {/* LEFT (bottom on mobile): navy panel + text — 60% width on desktop */}

        <div className="relative w-full lg:w-[60%] sm:min-h-100 lg:min-h-screen shrink-0 z-20 lg:bg-primary -mt-8 sm:-mt-12 md:-mt-14 lg:mt-0">
          {/* Texture — MOBILE/TABLET: dedicated mobile asset, torn edge baked into the top */}
          <div
            className="absolute inset-0 h-full bg-no-repeat bg-cover bg-top lg:hidden"
            style={{
              backgroundImage: `url(${mobileBgImage})`,
            }}
          />

          {/* Texture — DESKTOP: original asset, left edge */}
          <div
            className="absolute inset-0 h-full bg-no-repeat bg-cover bg-left hidden lg:block"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />

          {/* Subtle tint so text stays readable, texture still shows through on all screens */}
          {/* <div className="absolute inset-0 bg-primary/20" /> */}

          <Reveal from="left" delay={0.75}>
            <div className="relative z-10 w-full flex flex-col justify-center gap-3 sm:gap-5 text-white px-6 sm:px-10 pt-8 md:pt-14 pb-6 sm:pb-12  lg:py-16 lg:min-h-screen">
              <p className="font-heading text-secondary text-lg sm:text-2xl">
                No phones. No parents. Nothing done for them.
              </p>

              <h1 className="max-w-2xl">
                Your Child Has Probably Never Been Given A Job That Mattered.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl">
                Not a chore, where the outcome was really yours. A job — where
                an adult was depending on them, and nobody stepped in to finish
                it.
              </p>

              <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                Three nights in Kamshet. Twenty-four children, seven to eleven.
              </p>

              <div className="mt-2 hidden sm:block">
                <Button onClick={openForm} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* OVERLAPPING TORN/SQUIGGLE EDGE — DESKTOP ONLY, vertical seam */}
        <div
          className="absolute inset-y-0 z-20 hidden lg:block"
          style={{
            left: "calc(60% - 75px)",
            width: "140px",
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "auto 100%",
          }}
        />
        {/* DESKTOP ONLY: hero image — 40% width, matches left panel height */}
        <div className="relative hidden lg:block lg:w-[40%] min-h-screen shrink-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <img
            src={NoPhonesImg}
            alt="No phones. No parents. Nothing done for them."
            className="absolute -right-5 top-8 w-[75%] xl:w-[70%] max-w-sm h-auto max-h-20 xl:max-h-24 object-contain z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
