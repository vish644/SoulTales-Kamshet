import React from "react";
import LastMorningImg from "../assets/LastMorning.png";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const ForParents = () => {
  const { openForm } = useCallbackForm();
  return (
    <section className="relative bg-white">
      {/* Cream panel — starts ~12% in from the left on desktop, full-bleed on mobile */}
      <div className="absolute inset-y-0 left-0 right-0 lg:left-[12%] bg-pink" />

      <div className="relative max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-[38%_62%] items-center gap-10 lg:gap-0 py-10 lg:py-0">
        {/* Polaroid photo card, overlapping the white/cream boundary */}
        <Reveal from="left" delay={0.75}>
          <div className="relative z-10 bg-white shadow-xl p-6 pb-16 mx-auto w-full max-w-md">
            <img
              src={LastMorningImg}
              alt="Group photo of children and staff on the last morning of camp, in front of a hillside temple"
              className="w-full h-72 sm:h-90 object-cover"
            />
          </div>
        </Reveal>

        {/* Content */}

        <Reveal
          from="right"
          delay={0.75}
          className="flex flex-col gap-5 px-6 lg:pr-16 py-0 lg:py-14"
        >
          <h1 className="">The Last Morning</h1>

          <p className="font-heading text-secondary text-lg sm:text-2xl leading-tight">
            Sunday, from about half past ten, you drive up from Pune.
          </p>

          <div className=" leading-relaxed space-y-4 ">
            <p className="text-sm lg:text-lg">
              There is no slideshow. I will not stand in front of you and tell
              you how your child did.
            </p>
            <p className="text-sm lg:text-lg">
              They show you. What they built is standing there, and you can walk
              around it, or push it, or look up at it. Their group performs the
              thing they made up. Each child shows you one thing they couldn't
              do on Thursday.
            </p>
            <p className="text-sm lg:text-lg">
              I speak for about four minutes at the end, and I don't talk about
              anyone's child.
            </p>
            <p className="text-sm lg:text-lg">
              Then we all eat together, and you take them home.
            </p>
            <p className="text-sm lg:text-lg">
              I would ask you to come to this yourself. Not send someone. It
              matters more than it sounds like it does.
            </p>
          </div>

          <div className="hidden sm:block">
            <Button onClick={openForm} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ForParents;
