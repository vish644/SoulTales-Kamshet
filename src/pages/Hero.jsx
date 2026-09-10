import React from "react";
import Button from "../common/Button";
import bgImage from "../assets/bgImage.png";
import heroVideo from "../assets/Kamshet_place_4.mp4";
import WhatsappIcon from "../assets/whatsapp.svg";
import SvgImage from "../common/SvgImage";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      <div className="flex w-full min-h-screen relative">
        {/* LEFT: navy bgImage panel + text — 60% width */}
        <div className="relative w-full lg:w-[60%] min-h-screen flex-shrink-0 z-10">
          <div
            className="absolute inset-0 h-full bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPosition: "left center",
            }}
          />

          <div className="relative z-10 w-full flex flex-col justify-center gap-5 text-white min-h-screen px-6 sm:px-10 py-10 sm:py-14 lg:py-16">
            <p className="text-secondary font-heading font-semibold text-lg sm:text-2xl">
              No phones. No parents. Nothing done for them.
            </p>
            <h1 className="">
              Your Child Has Probably Never Been Given A Job That Mattered.
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-lg">
              Not a chore, where the outcome was really yours. A job — where an
              adult was depending on them, and nobody stepped in to finish it.
            </p>
            <p className="text-base sm:text-lg font-semibold text-white">
              Three nights in Kamshet. Twenty-four children, seven to eleven.
            </p>
            <div className="mt-2">
              <Button />
            </div>
          </div>
        </div>

        {/* Overlapping torn/squiggle edge — sits ON TOP of the seam, above the video */}
        <div
          className="absolute inset-y-0 z-20 hidden lg:block"
          style={{
            left: "calc(60% - 60px)", // shift left of the seam so the tear overlaps both panels
            width: "120px", // just wide enough to cover the torn-edge graphic
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center", // align to the RIGHT edge of the source image (where the tear lives)
            backgroundSize: "auto 100%",
          }}
        />

        {/* RIGHT: video — 40% width, flush under the overlapping tear */}
        <div className="relative hidden lg:block lg:w-[40%] min-h-screen flex-shrink-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center block"
          />
        </div>
      </div>

      <div
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 cursor-pointer"
        onClick={() => console.log("Whatspp Btn clicked!")}
      >
        <SvgImage
          svgImage={WhatsappIcon}
          label="Chat on WhatsApp"
          width="w-10 sm:w-12"
          height="h-10 sm:h-12"
        />
      </div>
    </section>
  );
};

export default Hero;
