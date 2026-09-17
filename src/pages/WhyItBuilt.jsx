import React from "react";
import WhyItsBuiltImg from "../assets/WhyIBuiltThis.jpg";
import Button from "../common/Button";
import StampBadge from "../common/StampBadge";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const WhyItBuilt = () => {
  const { openForm } = useCallbackForm();
  return (
    <section className="max-w-360 mx-auto">
      <div className="flex flex-col lg:flex-row ">
        {/* Image */}
        <Reveal from="left" delay={0.75} className="w-full lg:w-1/2 lg:flex ">
          <div className="relative w-full h-full p-5 md:p-10 lg:p-0">
            <img
              src={WhyItsBuiltImg}
              alt="Children on an outdoor exploration trip in the forest"
              className="h-64 sm:h-80 w-full object-cover  md:h-120 lg:h-[calc(100vh-180px)] xl:h-163"
            />

            <div className="absolute -top-10 right-5 sm:-top-14 lg:right-1/3">
              <StampBadge />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal
          from="right"
          delay={0.75}
          className="w-full lg:w-1/2 p-6 sm:px-10 flex flex-col justify-start md:justify-center gap-4 sm:gap-5"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
            Why I Built This
          </h1>
          <p className="font-heading text-secondary text-lg sm:text-2xl leading-tight">
            Somewhere in the last few years, most of us started finishing things
            for them.
          </p>
          <p className="text-sm sm:text-base">
            The project that was going wrong the night before it was due. The
            bag that wasn't packed. The friendship that needed a phone call to
            another mother. Every single time for a good reason. And every
            single time, the same thing underneath - you can't, so I will
          </p>
          <p className="text-sm sm:text-base">I have done it. I still do it.</p>

          <p className="text-sm sm:text-base leading-relaxed">
            And here's what I see in workshops, over and over: you give a child
            something slightly difficult, and within four seconds they look up.
            Not at the work. At the adult's face. Checking whether you're going
            to step in.
          </p>

          <p className="text-sm sm:text-base">They learned that from us</p>

          <p className="text-sm sm:text-base leading-relaxed">
            So this is three days where nobody steps in
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            I'm not going to tell you your child comes back changed. Three days
            doesn't change anyone. What they come back with is four or five
            things they did entirely on their own, that no adult finished for
            them
          </p>

          <div className="hidden sm:block">
            <Button onClick={openForm} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyItBuilt;
