import React, { useState } from "react";
import { DAYS } from "../data/data";
import SvgImage from "../common/SvgImage";

const TheRetreat = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = DAYS[activeIndex];

  return (
    <section className="max-w-360 mx-auto px-6 py-14 flex flex-col gap-6">
      <h1 className="font-semibold ">What Actually Happens</h1>

      <div className="space-y-1 lg:space-y-2">
        <p className="text-sm lg:text-xl">
          We will skip the adjectives and tell you what your child does.{" "}
          <span className="font-heading text-sm lg:text-2xl text-secondary">
            They make things - and the things get tested
          </span>
        </p>

        <p className="text-sm lg:text-xl">
          This is most of the retreat, so let me explain it properly. Every day
          they make something, and every day it gets harder.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 sm:gap-4 lg:gap-5">
        {DAYS.map((day, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={day.key}
              onClick={() => setActiveIndex(index)}
              className={`relative flex items-center justify-center gap-2 sm:gap-2 lg:gap-8 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-md border flex-1 min-w-[70px] sm:min-w-[120px] lg:min-w-[180px] ${
                isActive
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-200 hover:border-secondary"
              }`}
            >
              <span className="relative z-10 w-4 h-4 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center shrink-0">
                <SvgImage
                  svgImage={day.icon}
                  label="Offer"
                  color={isActive ? "bg-white" : "bg-secondary"}
                />
              </span>

              <span
                className={`relative z-10 text-sm sm:text-base lg:text-lg font-semibold truncate ${
                  isActive ? "text-white" : "text-gray-900"
                }`}
              >
                {day.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rotate-45" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-14 items-start">
        {/* Overlapping polaroid photos */}
        <div className="relative h-80 max-w-xs">
          <div className="absolute top-0 left-6 w-56 bg-white p-2 pb-8 shadow-lg -rotate-6">
            <img
              src={active.photos[0]}
              alt=""
              className="w-full h-52 object-cover"
            />
          </div>
          <div className="absolute top-16 left-0 w-56 bg-white p-2 pb-8 shadow-xl rotate-3">
            <img
              src={active.photos[1]}
              alt=""
              className="w-full h-52 object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 pt-2">
          <h3 className="font-bold text-base lg:text-lg">{active.heading}</h3>

          <p className="leading-relaxed max-w-lg">{active.body}</p>

          <p className="font-heading  text-secondary text-lg lg:text-2xl">
            "{active.quote}"
          </p>

          <p className="font-bold ">{active.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default TheRetreat;
