import React from "react";
import preetiImg from "../assets/Founder-Preeti.png";
import bgImage from "../assets/bgImage.png";
import Button from "../common/Button";

const FounderPreeti = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch min-h-0 md:min-h-[38rem]">
        {/* Content panel — dark, textured background image with navy tint */}
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0" />

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 flex flex-col justify-center gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Who Is Running This
            </h1>

            <p className="font-heading italic text-orange-500 text-base sm:text-lg">
              I am Preeti Toraskar.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              I have a Master's in Expressive Movement Therapy, which covers
              movement, art, music and drama. I trained under Dr Daniel Siegel,
              and I was part of the Transform Trauma cohort at Oxford with
              Bessel van der Kolk, Esther Perel and Richard Schwartz. Before all
              of this, I spent eighteen years as a spatial designer, which is
              probably why I am the sort of person who cares whether a thing
              actually stands up.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              I have been running Young SoulTales programmes with children and
              parents for some years now, mostly in Pune.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              On this retreat there will be 5 adults living with the children -
              me and 4 volunteers - plus Mehul, who is photographing and
              filming. One adult sleeps close to each group. Someone is awake
              and reachable all night, and it isn't me, because I need to be
              functional the next day.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-bold text-white">
                I take every enquiry call myself.
              </span>{" "}
              Not a coordinator, not an office. If you write in, you get me. I
              have told families before that I don't think their child is ready
              for this, and I'll do it again if I think it.
            </p>

            <div className="mt-2">
              <Button />
            </div>
          </div>

          {/* Torn paper seam — desktop only, bridges into the photo with no gap */}
          <div
            className="hidden md:block absolute top-0 bottom-0 -right-4 w-10 bg-white z-20"
            style={{
              clipPath:
                "polygon(30% 0%, 55% 4%, 35% 9%, 60% 15%, 40% 22%, 65% 29%, 45% 36%, 70% 43%, 50% 50%, 72% 57%, 48% 64%, 68% 71%, 42% 78%, 62% 85%, 38% 92%, 55% 97%, 30% 100%, 0% 100%, 0% 0%)",
              boxShadow: "2px 0 12px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Torn paper seam — mobile only, horizontal, bridges panel into photo below */}
        <div
          className="block md:hidden relative h-8 w-full bg-white z-20"
          style={{
            clipPath:
              "polygon(0% 30%, 4% 55%, 9% 35%, 15% 60%, 22% 40%, 29% 65%, 36% 45%, 43% 70%, 50% 50%, 57% 72%, 64% 48%, 71% 68%, 78% 42%, 85% 62%, 92% 38%, 97% 55%, 100% 30%, 100% 0%, 0% 0%)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}
        />

        {/* Photo — flush against the panel, no margin/padding between them */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto">
          <img
            src={preetiImg}
            alt="Preeti Toraskar standing outdoors among trees"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderPreeti;
