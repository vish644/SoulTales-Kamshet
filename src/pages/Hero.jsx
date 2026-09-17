// import React, { useEffect, useRef } from "react";
// import Button from "../common/Button";
// import bgImage from "../assets/bgImage.png";
// import heroVideo from "../assets/Kamshet_place_4.mp4";
// import Reveal from "../common/Reveal";
// import { useCallbackForm } from "../context/CallbackFormContext";

// const Hero = () => {
//   const { openForm } = useCallbackForm();

//   const videoRef = useRef(null);
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = true;
//     v.defaultMuted = true;
//     const playPromise = v.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(() => {
//         // Autoplay blocked; could show a manual play button as fallback here
//       });
//     }
//   }, []);
//   return (
//     <section className="relative w-full overflow-hidden max-h-screen max-w-360 mx-auto">
//       <div className="flex flex-col lg:flex-row w-full max-h-screen relative">
//         {/* MOBILE/TABLET ONLY: video on top, flush, no overlay */}
//         <div className="relative w-full h-72 md:h-125 lg:hidden shrink-0">
//           {/* <video
//             src={heroVideo}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           /> */}
//           <video
//             ref={videoRef}
//             src={heroVideo}
//             muted
//             defaultMuted
//             loop
//             playsInline
//             preload="auto"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />
//         </div>

//         {/* LEFT: navy bgImage panel + text — 60% width on desktop */}
//         <div className="relative w-full lg:w-[60%] min-h-110 sm:min-h-100 lg:min-h-screen shrink-0 z-10 bg-primary">
//           <div
//             className="absolute inset-0 h-full bg-no-repeat bg-cover bg-center lg:bg-left"
//             style={{
//               backgroundImage: `url(${bgImage})`,
//             }}
//           />

//           {/* Subtle dark overlay so text stays readable regardless of crop */}
//           <div className="absolute inset-0 bg-primary lg:bg-primary/20" />

//           <Reveal from="left" delay={0.75}>
//             <div className="relative z-10 w-full flex flex-col justify-center gap-3 sm:gap-6 text-white px-6 sm:px-10 py-8 sm:py-12 lg:py-16 lg:min-h-screen">
//               <p className="font-heading text-secondary text-lg sm:text-2xl">
//                 No phones. No parents. Nothing done for them.
//               </p>
//               <h1 className="max-w-2xl">
//                 Your Child Has Probably Never Been Given A Job That Mattered.
//               </h1>
//               <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl">
//                 Not a chore, where the outcome was really yours. A job — where
//                 an adult was depending on them, and nobody stepped in to finish
//                 it.
//               </p>
//               <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">
//                 Three nights in Kamshet. Twenty-four children, seven to eleven.
//               </p>
//               <div className="mt-2 hidden sm:block">
//                 <Button onClick={openForm} />
//               </div>
//             </div>
//           </Reveal>
//         </div>

//         {/* Overlapping torn/squiggle edge — desktop only, sits ON TOP of the seam */}
//         <div
//           className="absolute inset-y-0 z-20 hidden lg:block"
//           style={{
//             left: "calc(60% - 75px)",
//             width: "140px",
//             backgroundImage: `url(${bgImage})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "right center",
//             backgroundSize: "auto 100%",
//           }}
//         />

//         {/* DESKTOP ONLY: video — 40% width, flush under the overlapping tear */}
//         <div className="relative hidden lg:block lg:w-[40%]  shrink-0">
//           <video
//             src={heroVideo}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import Button from "../common/Button";
import bgImage from "../assets/bgImage.png";
import heroVideo from "../assets/Kamshet_place_4_compressed.mp4";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const Hero = () => {
  const { openForm } = useCallbackForm();

  return (
    <section className="relative w-full overflow-hidden max-h-screen max-w-360 mx-auto">
      <div className="flex flex-col lg:flex-row w-full max-h-screen relative">
        {/* MOBILE/TABLET ONLY: video on top */}
        <div className="relative w-full h-72 md:h-125 lg:hidden shrink-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* LEFT: navy bgImage panel + text — 60% width on desktop */}
        <div className="relative w-full lg:w-[60%] min-h-110 sm:min-h-100 lg:min-h-screen shrink-0 z-10 bg-primary">
          <div
            className="absolute inset-0 h-full bg-no-repeat bg-cover bg-center lg:bg-left"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />

          {/* Subtle dark overlay so text stays readable regardless of crop */}
          <div className="absolute inset-0 bg-primary lg:bg-primary/20" />

          <Reveal from="left" delay={0.75}>
            <div className="relative z-10 w-full flex flex-col justify-center gap-3 sm:gap-6 text-white px-6 sm:px-10 py-8 sm:py-12 lg:py-16 lg:min-h-screen">
              <p className="font-heading text-secondary text-lg sm:text-2xl">
                No phones. No parents. Nothing done for them.
              </p>

              <h1 className="max-w-2xl">
                Your Child Has Probably Never Been Given A Job That Mattered.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl">
                Not a chore, where the outcome was really yours. A job — where
                an adult was depending on them, and nobody stepped in to finish
                it.
              </p>

              <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                Three nights in Kamshet. Twenty-four children, seven to eleven.
              </p>

              <div className="mt-2 hidden sm:block">
                <Button onClick={openForm} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* OVERLAPPING TORN/SQUIGGLE EDGE — DESKTOP ONLY */}
        <div
          className="absolute inset-y-0 z-20 hidden lg:block"
          style={{
            left: "calc(60% - 75px)",
            width: "140px",
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "auto 100%",
          }}
        />

        {/* DESKTOP ONLY: video — 40% width */}
        <div className="relative hidden lg:block lg:w-[40%] shrink-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
