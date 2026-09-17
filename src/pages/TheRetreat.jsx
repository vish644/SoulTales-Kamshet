import React, { useState, useRef, useEffect } from "react";
import { DAYS } from "../data/data";
import SvgImage from "../common/SvgImage";
import PolaroidStack from "../common/PolaroidStack";

const TheRetreat = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = DAYS[activeIndex];

  const nextIndex = (activeIndex + 1) % DAYS.length;

  return (
    <section className="max-w-360 mx-auto  px-6 lg:px-10 flex flex-col gap-4 lg:gap-5">
      <h1 className="font-semibold ">What Actually Happens</h1>

      <div className="space-y-1 lg:space-y-2">
        <p className="text-sm lg:text-xl">
          We will skip the adjectives and tell you what your child does.{" "}
          <span className="font-heading text-lg sm:text-2xl text-secondary">
            They make things - and the things get tested
          </span>
        </p>

        <p className="text-sm lg:text-xl">
          This is most of the retreat, so let me explain it properly. Every day
          they make something, and every day it gets harder.
        </p>
      </div>

      {/* Tabs — mobile: active + next only */}
      <div className="flex sm:hidden gap-3 w-full">
        {[activeIndex, nextIndex].map((index) => {
          const day = DAYS[index];
          const isActive = index === activeIndex;
          return (
            <button
              key={day.key}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md border flex-1 min-w-0 basis-0 ${
                isActive
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-200 hover:border-secondary"
              }`}
            >
              <span className="relative z-10 w-3 h-3 flex items-center justify-center shrink-0">
                <SvgImage
                  svgImage={day.icon}
                  label="icon"
                  color={isActive ? "bg-white" : "bg-secondary"}
                />
              </span>

              <span
                className={`relative z-10 text-xs font-semibold truncate ${
                  isActive ? "text-white" : "text-gray-900"
                }`}
              >
                {day.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-primary rotate-45" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tabs — sm and up: full row, unchanged */}
      <div className="hidden sm:flex sm:flex-wrap gap-4">
        {DAYS.map((day, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={day.key}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer flex items-center justify-center gap-2 lg:gap-3 px-2.5 py-2 lg:px-3 lg:py-3 rounded-md border min-w-40 flex-1 lg:min-w-56 xl:min-w-64 lg:flex-initial ${
                isActive
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-200 hover:border-secondary"
              }`}
            >
              <span className="relative z-10 w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0">
                <SvgImage
                  svgImage={day.icon}
                  label="icon"
                  color={isActive ? "bg-white" : "bg-secondary"}
                />
              </span>

              <span
                className={`relative z-10 text-sm lg:text-lg font-semibold whitespace-nowrap ${
                  isActive ? "text-white" : "text-gray-900"
                }`}
              >
                {day.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rotate-45" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-16 items-center justify-center lg:max-w-4xl lg:mx-auto">
        {/* Overlapping polaroid photos */}
        <div className="flex justify-center col-span-2">
          <PolaroidStack images={active.photos} className="max-w-full" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center gap-2 lg:gap-4 col-span-4 lg:text-left">
          <h3 className="font-bold text-base lg:text-lg">{active.heading}</h3>
          <p className="leading-relaxed max-w-lg text-xs lg:text-base">
            {active.body}
          </p>
          <p className="font-heading text-secondary text-lg sm:text-2xl">
            "{active.quote}"
          </p>
          <p className="font-bold">{active.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default TheRetreat;
