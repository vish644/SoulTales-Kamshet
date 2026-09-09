
// src/components/HowASeatHappens.jsx
import React from "react";
import Button from "../common/Button";

// Replace with your real images
import NeverStopStackImg1 from "../assets/NeverStopStackImg1.jpg";
import NeverStopStackImg2 from "../assets/NeverStopStackImg2.png";
import PolaroidStack from "../common/PolaroidStack";
import StampBadge from "../common/StampBadge";

const stackImages = [
  { src: NeverStopStackImg1, alt: "Children in a craft circle" },
  { src: NeverStopStackImg2, alt: "Children on a forest trek" },
];

const Booking = () => {
  return (
    <section className="w-full bg-white px-5 py-10 md:px-10 lg:px-16">
      {/* Contained cream box — NOT full-bleed */}
      <div className="mx-auto max-w-[1280px] bg-pink px-5 py-16 md:px-10 md:py-20 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left - animated polaroid stack */}
          <div className="flex justify-center lg:justify-start">
            <PolaroidStack images={stackImages} />
          </div>

          {/* Right - text content */}
          <div className="relative flex flex-col">
            <div className="mb-6 flex justify-end lg:absolute lg:-top-16 lg:right-0 lg:mb-0">
              <StampBadge lines={["Never stop", "Exploring"]} />
            </div>

            <h2 className="font-body text-[26px] font-extrabold leading-tight text-black md:text-[32px] lg:text-[38px]">
              How A Seat Actually Happens
            </h2>

            <p className="mt-4 font-heading text-xl font-medium text-secondary md:text-2xl lg:text-[26px]">
              There's no book-now button, and that's deliberate.
            </p>

            <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-neutral-800 md:text-[15px] lg:text-base">
              <p className="text-black!">
                Write in, and I'll call you. Fifteen or twenty minutes. I'll
                ask about your child - how they are with sleep, with new
                people, with things not going their way. You ask me
                everything you want.
              </p>

              <p className="text-black!">
                At the end of that call one of us says yes or no. Sometimes
                it's me. That's not a filter to make this feel special - it's
                because I'm going to be responsible for your seven-year-old
                for three nights and I'd like to have spoken to you first.
              </p>

              <p className="text-black!">
                If it's a yes, I send you the form and the payment details
                the same day.
              </p>
            </div>

            <div className="mt-7">
              <Button title="Ask for a call" />
            </div>

            <p className="mt-7 font-body text-sm font-bold text-primary md:text-base">
              Twenty-Four Seats. Most Of Them Will Go To Families Who Already
              Know Us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;