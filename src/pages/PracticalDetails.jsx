// src/components/PracticalBit.jsx
import React from "react";
import { Calendar, Globe2, Users, Tent } from "lucide-react";
import Button from "../common/Button";
import PracticalDetailsImg from "../assets/PracticalDetails.png"; // replace with your actual image
import Places from "../assets/Places.svg"
import When from "../assets/When.svg"
import Where from "../assets/Where.svg"
import Ages from "../assets/Ages.svg"



const infoItems = [
  {
    icon: When,
    label: "When",
    value: "Thu 12 - Sun 15 Nov 2026",
  },
  {
    icon: Where,
    label: "Where",
    value: "Moonstone Hammock, Kamshet",
  },
  {
    icon: Ages,
    label: "Ages",
    value: "7 to 11",
  },
  {
    icon: Places,
    label: "Places",
    value: "24 children only",
  },
];

const PracticalDetails = () => {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left column */}
        <div className="flex flex-col">
          <h2 className="font-body text-[28px] font-extrabold leading-tight text-black md:text-[32px] lg:text-[38px]">
            The Practical Bit
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-neutral-800 md:text-[15px] lg:text-base">
            <p className="text-neutral-800">
              <span className="font-bold text-black">Included:</span> three
              nights' stay, all meals, return transport from Pune, all
              materials, facilitation, water safety equipment, first aid and
              insurance.
            </p>

            <p className="text-neutral-800">
              <span className="font-bold text-black">Not included:</span>{" "}
              anything you send them with.
            </p>

            <p className="text-neutral-800">
              <span className="font-bold text-black">Getting there:</span> we
              travel together by bus from a Pune pickup point on Thursday
              morning. The pickup point and timing are confirmed about a week
              before departure. On Sunday you drive up yourself for the last
              morning and take your child home after lunch.
            </p>

            <p className="text-neutral-800">
              <span className="font-bold text-black">Payment:</span> full
              payment confirms the seat. There's no deposit-and-balance,
              because it complicates things for everyone.
            </p>

            <div>
              <p className="font-bold text-black">If you need to cancel:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-800">
                <li>
                  More than 30 days before departure - full refund, less
                  ₹1,500 towards administration
                </li>
                <li>15 to 30 days before - 50% refunded</li>
                <li>
                  Less than 15 days before - no refund, as the costs are
                  committed by then
                </li>
              </ul>
            </div>

            <p className="text-neutral-800">
              If your child can't come for a medical reason and you send us a
              doctor's note, we'll hold the full amount as credit against a
              future Young SoulTales programme.
            </p>

            <p className="text-neutral-800">
              <span className="font-bold text-black">What to bring:</span> a
              proper list comes once you're booked. Nothing needs buying -
              old clothes are better than new ones, and everything they wear
              will get clay on it.
            </p>
          </div>

          <div className="mt-8">
            <Button title="Ask for a call" />
          </div>
        </div>

        {/* Right column - image + floating info bar */}
        <div className="relative">
          <img
            src={PracticalDetailsImg}
            alt="Children doing crafts at camp"
            className="h-[380px] w-full object-cover md:h-[480px] lg:h-[605px]"
          />

          {/* Info bar */}
          <div
            className="
              absolute bottom-4 left-2 right-2
              flex flex-wrap justify-between gap-2
              rounded-xl bg-white p-2 shadow-lg
              md:bottom-6 md:-left-4 md:-right-4 md:gap-0 md:p-3
              lg:-left-8 lg:-right-8 lg:p-4
            "
          >
            {infoItems.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={`flex flex-1 min-w-[45%] items-center gap-2 px-2 py-1.5 md:min-w-0 md:gap-3 md:px-4 md:py-2 ${
                  i !== 0 ? "md:border-l md:border-neutral-200" : ""
                }`}
              >
                <img src={Icon}
                  className="h-5 w-5 shrink-0 text-secondary md:h-6 md:w-6"
                  strokeWidth={1.75}
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-wide text-neutral-400 md:text-[11px]">
                    {label}
                  </span>
                  <span className="font-body text-xs font-bold text-black md:text-sm">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalDetails;