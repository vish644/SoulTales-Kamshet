// src/components/NotForEveryChild.jsx
import React from "react";
import Button from "../common/Button";
import HonestyImg from "../assets/Honesty.png"; // replace with your actual image

const Honesty = () => {
  return (
    <section className="grid w-full grid-cols-1 bg-primary lg:grid-cols-2">
      {/* Left column - text content */}
      <div className="flex flex-col justify-center px-5 py-14 md:px-10 md:py-20 lg:px-20 lg:py-24">
        <h2 className="font-body text-[26px] font-extrabold leading-tight text-white md:text-[32px] lg:text-[38px]">
          This Isn't For Every Child
        </h2>

        <h3 className="mt-4 font-heading text-2xl font-medium text-secondary md:text-3xl lg:text-[32px]">
          Honestly:
        </h3>

        <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-muted md:text-[15px] lg:text-base">
          <p>
            If your child is going through something significant right now -
            a loss, a big change at home, something they're struggling with -
            this may not be the right three days, and I'd want to talk about
            it properly before you book.
          </p>

          <p>
            If you're hoping we'll fix a behaviour, please don't send them.
            Children work out very fast when the adults are working on them
            rather than interested in them, and everything you'd want from
            this stops being possible the moment they do.
          </p>

          <p>
            And if you'd like to stay nearby just in case - I understand the
            instinct, and I'd still say no. Half the value of these three
            days is that you weren't there.
          </p>
        </div>

        <div className="mt-8">
          <Button title="Ask for a call" />
        </div>
      </div>

      {/* Right column - full-bleed image */}
      <div className="h-[320px] w-full lg:h-auto lg:min-h-[700px]">
        <img
          src={HonestyImg}
          alt="Child smiling holding a cookie"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Honesty;