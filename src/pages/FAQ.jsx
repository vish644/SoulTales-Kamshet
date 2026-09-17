import { useState } from "react";
import AccordionItem from "../common/AccordionItem";
import { leftItems, rightItems } from "../data/data";
import Reveal from "../common/Reveal";

export default function FAQ() {
  const [openId, setOpenId] = useState("never-slept-away");

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-360 px-6 md:px-10 lg:px-20 ">
        <Reveal from="left" delay={0.75}>
          <span className="block font-heading text-secondary text-lg sm:text-2xl tracking-normal leading-none mb-3">
            Your worries, answered properly
          </span>

          <h1 className="font-body font-bold text-black  max-w-3xl mb-5 md:mb-10">
            This Is The Part I'd Read First If I Were You.
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-8 items-start">
          <Reveal from="bottom" delay={0.75}>
            <div className="flex flex-col gap-2 md:gap-5">
              {leftItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </Reveal>

          <Reveal from="bottom" delay={0.75}>
            <div className="flex flex-col gap-4 md:gap-5">
              {rightItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
