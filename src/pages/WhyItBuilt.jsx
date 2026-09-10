import React from "react";
import WhyItsBuiltImg from "../assets/WhyIBuiltThis.jpg";
import Button from "../common/Button";

const WhyItBuilt = () => {
  return (
    <section className="max-w-360 mx-auto ">
      <div className="flex flex-col md:flex-row p-16">
        {/* Image */}
        <div className="relative w-full md:w-1/2 max-h-screen md:aspect-auto">
          <img
            src={WhyItsBuiltImg}
            alt="Children on an outdoor exploration trip in the forest"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 bg-pink flex flex-col justify-center gap-4 sm:gap-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
            Why I Built This
          </h1>
          <p className="font-heading text-secondary text-sm sm:text-base">
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

          <p className="text-sm  leading-relaxed">
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

          <div>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItBuilt;
