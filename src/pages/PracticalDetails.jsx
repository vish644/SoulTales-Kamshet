import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import PracticalDetailsImg from "../assets/PracticalDetails.png";
import { infoItems } from "../data/data";
import Reveal from "../common/Reveal";
import { useCallbackForm } from "../context/CallbackFormContext";

const PracticalDetails = () => {
  const { openForm } = useCallbackForm();
  const useIsMobile = (breakpoint = 640) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < breakpoint);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    return isMobile;
  };
  const isMobile = useIsMobile();
  return (
    <section className="w-full bg-white px-5 md:px-10 lg:px-20 ">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10">
        {/* Left column — text content: order-2 on mobile so it renders below the image */}
        <Reveal
          from="left"
          delay={0.75}
          className="order-1 flex flex-col gap-4 lg:order-1"
        >
          <h2 className="font-body text-[28px] font-bold leading-tight text-black md:text-[32px] lg:text-h1 tracking-normal">
            The Practical Bit
          </h2>

          <div className="flex flex-col gap-4 text-sm  leading-relaxed text-neutral-800 md:text-[15px] lg:text-sm">
            <p className="text-neutral-800 text-sm  leading-6 tracking-normal">
              <span className="font-bold text-black text-sm  leading-6 tracking-normal">
                Included:
              </span>{" "}
              three nights' stay, all meals, return transport from Pune, all
              materials, facilitation, water safety equipment, first aid and
              insurance.
            </p>

            <p className="text-neutral-800 text-sm  leading-6 tracking-normal">
              <span className="font-bold text-black text-sm  leading-6 tracking-normal">
                Not included:
              </span>{" "}
              anything you send them with.
            </p>

            <p className="text-neutral-800 text-sm  leading-6 tracking-normal">
              <span className="font-bold text-black text-sm  leading-6 tracking-normal">
                Getting there:
              </span>{" "}
              we travel together by bus from a Pune pickup point on Thursday
              morning. The pickup point and timing are confirmed about a week
              before departure. On Sunday you drive up yourself for the last
              morning and take your child home after lunch.
            </p>

            <p className="text-neutral-800 text-sm  leading-6 tracking-normal">
              <span className="font-bold text-black text-sm  leading-6 tracking-normal">
                Payment:
              </span>{" "}
              full payment confirms the seat. There's no deposit-and-balance,
              because it complicates things for everyone.
            </p>

            <div>
              <p className="font-bold text-black text-sm  leading-6 tracking-normal">
                If you need to cancel:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-800 text-sm  leading-6 tracking-normal">
                <li>
                  More than 30 days before departure - full refund, less ₹1,500
                  towards administration
                </li>
                <li>15 to 30 days before - 50% refunded</li>
                <li>
                  Less than 15 days before - no refund, as the costs are
                  committed by then
                </li>
              </ul>
            </div>

            <p className="text-neutral-800 text-sm  leading-6 tracking-normal">
              If your child can't come for a medical reason and you send us a
              doctor's note, we'll hold the full amount as credit against a
              future Young SoulTales programme.
            </p>

            <p className="text-neutral-800 text-sm  leading-6 tracking-normal">
              <span className="font-bold text-black text-sm  leading-6 tracking-normal">
                What to bring:
              </span>{" "}
              a proper list comes once you're booked. Nothing needs buying - old
              clothes are better than new ones, and everything they wear will
              get clay on it.
            </p>
          </div>

          <div className="hidden sm:block">
            <Button title="Ask for a call" onClick={openForm} />
          </div>
        </Reveal>

        {/* Right column — image + floating info bar */}
        <Reveal
          from="right"
          delay={0.75}
          className="relative order-2 lg:order-2"
        >
          <img
            src={PracticalDetailsImg}
            alt="Children doing crafts at camp"
            className="h-64 sm:h-80 w-full object-cover md:h-120 lg:h-151.25"
          />

          {/* Info bar — static below image on mobile; overlays + patrols on sm+ */}
          <motion.div
            className="
      static 
      sm:absolute sm:mt-0 sm:left-2 sm:right-2 sm:top-[85%]
      flex flex-col md:flex-row flex-nowrap gap-1
      rounded-xl bg-white p-2 shadow-lg
    "
            animate={isMobile ? undefined : { top: ["80%", "90%", "80%"] }}
            transition={
              isMobile
                ? undefined
                : {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
            }
          >
            {infoItems.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={`flex min-w-0 items-center gap-1 px-1 py-1 sm:gap-2 sm:px-2 md:py-2 ${
                  i !== 0
                    ? "border-l border-neutral-200 pl-1 sm:pl-2 md:pl-4"
                    : ""
                } ${i >= 2 ? "gap-0.5 px-0.5 sm:gap-2 sm:px-2" : ""}`}
              >
                <img
                  src={Icon}
                  className="h-3.5 w-3.5 shrink-0 text-secondary sm:h-5 sm:w-5 md:h-6 md:w-6"
                  strokeWidth={1.75}
                />
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="font-body text-[7px] font-semibold uppercase tracking-wide text-neutral-400 md:text-[10px]">
                    {label}
                  </span>
                  <span className="font-body text-[10px]  font-bold text-black">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default PracticalDetails;
