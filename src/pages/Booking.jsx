import React from "react";
import Button from "../common/Button";

//Images
import NeverStopStackImg1 from "../assets/NeverStopStackImg1.jpg";
import NeverStopStackImg2 from "../assets/NeverStopStackImg2.png";
import PolaroidStack from "../common/PolaroidStack";
import StampBadge from "../common/StampBadge";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const stackImages = [
  { src: NeverStopStackImg1, alt: "Children in a craft circle" },
  { src: NeverStopStackImg2, alt: "Children on a forest trek" },
];

const Booking = () => {
  const { openForm } = useCallbackForm();
  return (
    <section className="w-full bg-white px-4 sm:px-5 md:px-10 lg:px-16 relative flex items-center">
      <div className="bg-white w-full max-w-360 mx-auto flex justify-center lg:justify-end">
        <div className="w-full  lg:w-[85%] bg-pink px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:py-20 lg:px-10 relative overflow-visible">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-10">
            {/* Left - animated polaroid stack, bleeds onto white area on large screens */}
            <Reveal
              from="left"
              delay={0.75}
              className="flex justify-center lg:justify-start lg:-ml-52 xl:-ml-52 2xl:-ml-32"
            >
              <PolaroidStack images={stackImages} />
              <div className=" absolute -top-8 right-4 sm:-top-5 sm:right-6 block lg:hidden">
                <StampBadge lines={["Never stop", "Exploring"]} />
              </div>
            </Reveal>

            {/* Badge  */}
            <Reveal
              from="bottom"
              delay={0.75}
              className="flex justify-center lg:justify-end lg:absolute lg:top-16 right-0 lg:right-16 hidden lg:block"
            >
              <StampBadge lines={["Never stop", "Exploring"]} />
            </Reveal>

            {/* Right - text content */}
            <Reveal
              from="right"
              delay={0.75}
              className="relative flex flex-col gap-5 sm:gap-6 md:gap-7 lg:-ml-52 xl:-ml-72 2xl:-ml-72"
            >
              <h1 className="">How A Seat Actually Happens</h1>

              <p className="font-heading lg:text-left font-normal text-secondary text-lg sm:text-2xl">
                There's no book-now button, and that's deliberate.
              </p>

              <div className="flex flex-col gap-4  leading-relaxed ">
                <p className="text-black! text-sm lg:text-base">
                  Write in, and I'll call you. Fifteen or twenty minutes. I'll
                  ask about your child - how they are with sleep, with new
                  people, with things not going their way. You ask me everything
                  you want.
                </p>

                <p className="text-black!  text-sm lg:text-base">
                  At the end of that call one of us says yes or no. Sometimes
                  it's me. That's not a filter to make this feel special - it's
                  because I'm going to be responsible for your seven-year-old
                  for three nights and I'd like to have spoken to you first.
                </p>

                <p className="text-black!  text-sm lg:text-base">
                  If it's a yes, I send you the form and the payment details the
                  same day.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start  sm:block">
                <Button title="Ask for a call" onClick={openForm} />
              </div>

              <p className="font-body text-sm  lg:text-left font-bold text-primary md:text-base">
                Twenty-Four Seats. Most Of Them Will Go To Families Who Already
                Know Us.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
