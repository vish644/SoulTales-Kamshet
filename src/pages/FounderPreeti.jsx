import React from "react";
import preetiImg from "../assets/Founder-Preeti.png";
import bgImage from "../assets/bgImage.png";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const FounderPreeti = () => {
  const { openForm } = useCallbackForm();
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-360 mx-auto relative flex flex-col lg:flex-row items-stretch lg:max-h-screen">
        {/* Content panel — dark, textured background image with navy tint */}
        <div className="relative w-full lg:w-1/2 min-h-130 sm:min-h-145 lg:min-h-0 overflow-hidden order-2 lg:order-1 z-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          <div className="absolute inset-0 bg-primary lg:bg-primary/20" />

          <Reveal
            from="top"
            delay={0.75}
            className={
              "relative z-10 h-full p-6 text-white sm:px-10 sm:py-8 lg:px-16 max-w-3xl flex flex-col justify-center gap-4"
            }
          >
            <h1>Who Is Running This</h1>

            <p className="font-heading text-secondary text-lg sm:text-2xl">
              I am Preeti Toraskar.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              I have a Master's in Expressive Movement Therapy, which covers
              movement, art, music and drama. I trained under Dr Daniel Siegel,
              and I was part of the Transform Trauma cohort at Oxford with
              Bessel van der Kolk, Esther Perel and Richard Schwartz. Before all
              of this, I spent eighteen years as a spatial designer, which is
              probably why I am the sort of person who cares whether a thing
              actually stands up.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              I have been running Young SoulTales programmes with children and
              parents for some years now, mostly in Pune.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              On this retreat there will be 5 adults living with the children -
              me and 4 volunteers - plus Mehul, who is photographing and
              filming. One adult sleeps close to each group. Someone is awake
              and reachable all night, and it isn't me, because I need to be
              functional the next day.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              <span className="font-bold text-white">
                I take every enquiry call myself.
              </span>{" "}
              Not a coordinator, not an office. If you write in, you get me. I
              have told families before that I don't think their child is ready
              for this, and I'll do it again if I think it.
            </p>

            <div className="hidden sm:block">
              <Button onClick={openForm} />
            </div>
          </Reveal>
        </div>

        {/* Overlapping torn/squiggle edge — desktop only, sits on top of the seam */}
        <div
          className="absolute inset-y-0 z-20 hidden lg:block"
          style={{
            left: "calc(50% - 65px)",
            width: "160px",
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "auto 100%",
          }}
        />

        {/* Photo — flush against the panel, no margin/padding between them */}
        <div className="relative w-full max-h-screen lg:w-1/2 aspect-4/3 lg:aspect-auto order-1 lg:order-2 p-5 md:p-10 lg:p-0">
          <img
            src={preetiImg}
            alt="Preeti Toraskar standing outdoors among trees"
            className="h-64 sm:h-80 w-full object-cover md:h-165 lg:h-screen"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderPreeti;
