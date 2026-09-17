import React from "react";
import WhyItsBuiltThisWayImg from "../assets/WhyItsBuiltThisWay.png";
import Button from "../common/Button";
import StampBadge from "../common/StampBadge";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const WhatTheyDo = () => {
  const { openForm } = useCallbackForm();
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-stretch max-w-360 mx-auto">
        {/* Image */}
        <Reveal from="left" delay={0.75} className="w-full lg:w-1/2">
          <div className="relative p-5 md:p-10 lg:p-0 h-full">
            <img
              src={WhyItsBuiltThisWayImg}
              alt="Children on an outdoor exploration trip in the forest"
              className="h-64 sm:h-80 w-full object-cover md:h-120 lg:h-full"
            />

            <div className="absolute -bottom-13 lg:-bottom- right-18">
              <StampBadge />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal from="right" delay={0.75} className="w-full lg:w-1/2">
          <div className="px-6 sm:px-10 py-10 bg-pink flex flex-col justify-center gap-4 h-full">
            <p className="font-heading text-lg sm:text-2xl text-secondary">
              Why it's built this way
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
              Here's the thing about seven to eleven.
            </h1>

            <p className="text-sm sm:text-base leading-relaxed">
              Somewhere around this age, children stop believing praise. They
              have worked out that "well done" is free — that adults say it
              regardless, and that it tells them nothing about whether they are
              actually any good at anything. Which means the more we encourage
              them, the less it lands.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-text-highlight">
              What they haven't stopped believing is evidence.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed">
              So nothing here is judged. Nobody's work is held up as the best
              one. I don't tell them their raft is lovely. The raft goes in the
              water and either it holds, or it sinks, and that verdict comes
              from the raft, not from me. It can't be softened, and it can't be
              faked, and that is exactly why they trust it.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              Most of them will fail the first test. That's not a bad afternoon
              — that's the whole design. What happens next is the retreat: they
              work out which part gave way, they change it, they try again.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              A child who has done that four times in four days has something
              you cannot give them by telling them.
            </p>

            <div className="hidden sm:block">
              <Button onClick={openForm} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhatTheyDo;
