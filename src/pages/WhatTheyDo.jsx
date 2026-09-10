import React from "react";
import WhyItsBuiltThisWayImg from "../assets/WhyItsBuiltThisWay.png";
import Button from "../common/Button";

const WhatTheyDo = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-stretch max-w-360 mx-auto">
        {/* Image */}
        <div className="relative lg:w-1/2">
          <img
            src={WhyItsBuiltThisWayImg}
            alt="Children on an outdoor exploration trip in the forest"
            className="w-full h-full object-cover"
          />
          Badge
          <div className="absolute bottom-6 right-6 w-28 h-28 rounded-full bg-[#1E6E5A] flex items-center justify-center text-center">
            <p className="text-white text-sm font-heading leading-tight">
              Never stop
              <br />
              Exploring
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 px-6 sm:px-10 py-10 sm:py-14 lg:py-16 bg-pink flex flex-col  justify-center gap-5">
          <p className="font-heading text-secondary text-sm">
            Why it's built this way
          </p>

          <h1 className="text-4xl font-bold text-black leading-tight">
            Here's the thing about seven to eleven.
          </h1>

          <p className="text-sm text-gray-700 leading-relaxed">
            Somewhere around this age, children stop believing praise. They have
            worked out that "well done" is free — that adults say it regardless,
            and that it tells them nothing about whether they are actually any
            good at anything. Which means the more we encourage them, the less
            it lands.
          </p>

          <h2 className="text-lg font-bold text-text-highlight">
            What they haven't stopped believing is evidence.
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            So nothing here is judged. Nobody's work is held up as the best one.
            I don't tell them their raft is lovely. The raft goes in the water
            and either it holds, or it sinks, and that verdict comes from the
            raft, not from me. It can't be softened, and it can't be faked, and
            that is exactly why they trust it.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Most of them will fail the first test. That's not a bad afternoon —
            that's the whole design. What happens next is the retreat: they work
            out which part gave way, they change it, they try again.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            A child who has done that four times in four days has something you
            cannot give them by telling them.
          </p>

          <div>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatTheyDo;
