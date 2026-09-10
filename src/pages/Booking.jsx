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
    <section className="w-full bg-white px-5 py-10 md:px-10 lg:px-16 relative  flex items-center">
      <div className="bg-white w-full max-w-[1440px] mx-auto flex justify-center lg:justify-end">
        <div className="w-full lg:w-[90%] bg-pink px-5 py-12 md:px-10 md:py-16 lg:py-20 lg:px-16 relative overflow-visible rounded-2xl lg:rounded-none min-h-screen">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10">
            {/* Left - animated polaroid stack, bleeds onto white area on large screens */}
            <div className="flex justify-center lg:justify-start lg:-ml-52 xl:-ml-52 2xl:-ml-32">
              <PolaroidStack images={stackImages} />
            </div>

            {/* Right - text content */}
            {/* Right - text content */}
            <div className="relative flex flex-col gap-6 md:gap-7 lg:gap-8 lg:-ml-52 xl:-ml-72 2xl:-ml-72">
              <div className="flex justify-center lg:justify-end lg:absolute lg:-top-16 lg:-right-16">
                <StampBadge lines={["Never stop", "Exploring"]} />
              </div>

              <h2 className="font-body text-[24px] text-center lg:text-left font-bold leading-tight md:leading-[48px] tracking-normal text-black sm:text-[26px] md:text-[26px] lg:text-[32px] xl:text-[38px]">
                How A Seat Actually Happens
              </h2>

              <p className="font-heading text-lg text-center lg:text-left font-normal text-secondary sm:text-xl md:text-2xl lg:text-[26px] leading-6">
                There's no book-now button, and that's deliberate.
              </p>

              <div className="flex flex-col gap-4 text-sm leading-relaxed text-neutral-800 md:text-[15px] lg:text-base">
                <p className="text-black!">
                  Write in, and I'll call you. Fifteen or twenty minutes. I'll
                  ask about your child - how they are with sleep, with new
                  people, with things not going their way. You ask me everything
                  you want.
                </p>

                <p className="text-black!">
                  At the end of that call one of us says yes or no. Sometimes
                  it's me. That's not a filter to make this feel special - it's
                  because I'm going to be responsible for your seven-year-old
                  for three nights and I'd like to have spoken to you first.
                </p>

                <p className="text-black!">
                  If it's a yes, I send you the form and the payment details the
                  same day.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button title="Ask for a call" />
              </div>

              <p className="font-body text-sm text-center lg:text-left font-bold text-primary md:text-base">
                Twenty-Four Seats. Most Of Them Will Go To Families Who Already
                Know Us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
