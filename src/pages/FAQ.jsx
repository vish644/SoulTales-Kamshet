import { useState } from "react";
import AccordionItem from "../common/AccordionItem";

const leftItems = [
  {
    id: "never-slept-away",
    question: "She's never slept away from home.",
    answer: [
      "Then tell me that on the call, and tell me honestly — not the version where she's fine.",
      "Some children do have a hard first night. That is not a failure of the retreat, and it's not a failure of your child. There's an adult sleeping nearby. There's a small group she's already spent a day building something with. In my experience, the child who struggles on Thursday night is very often the one running the fire on Friday.",
      <>
        But some children genuinely aren't ready, and three nights is a long
        time to be wrong about that. <em>That's what the call is for.</em>
      </>,
    ],
  },
  {
    id: "cries-wants-home",
    question: "What if he cries and wants to come home?",
    answer: [
      "Crying isn't a signal to end the retreat — it's usually a signal that he misses you, which is a good thing about him, not a bad sign about the week.",
      "We don't pretend it away and we don't rush him past it. A counselor sits with him, names what he's feeling, and gets him to the next thing on the schedule. If it's still there after a full day, you'll hear from us before you'd even think to ask.",
    ],
  },
  {
    id: "cant-call-child",
    question: "Why can't I call my child?",
    answer: [
      "Because the call is usually for you, not for them. A child who's settling in gets unsettled by hearing your voice and being reminded of everything they're missing at home.",
      "You'll get a call from a staff member, not your child, partway through — a real update, not a status ping. If something is genuinely wrong, we call you immediately, no waiting for the scheduled check-in.",
    ],
  },
  {
    id: "water",
    question: "There's water. Tell me about that.",
    answer: [
      "Yes — a lake, waist-deep at the swim line, fenced off from the rest of the property. Every child is assessed on arrival before they're allowed past the dock, regardless of what you tell us about their swimming.",
      "Two certified lifeguards are on the water any time a child is, plus a counselor in the water with the non-swimmers. No child is ever in the water unsupervised, including during free swim.",
    ],
  },
];

const rightItems = [
  {
    id: "how-many-adults",
    question: "How many adults, really?",
    answer: [
      "One adult for every six children, awake hours. Overnight, it drops to one for every ten, with a senior staff member on a walking round of the cabins all night.",
      "That ratio is fixed regardless of enrolment — if we're short-staffed for a session, we cap the number of children instead of stretching the adults thinner.",
    ],
  },
  {
    id: "medical",
    question: "What about medical?",
    answer: [
      "A nurse is on site for the full retreat, not on call from somewhere else. Medication is logged and administered by her, not self-managed by a nine-year-old.",
      "For anything beyond what she can handle, the nearest hospital is eleven minutes by road and we have a vehicle and driver on standby the entire time, day and night.",
    ],
  },
  {
    id: "not-outdoorsy",
    question: "My child is not outdoorsy. Or sporty. Or good at art.",
    answer: [
      "Good — most of them aren't, on day one. The schedule isn't built around who's already confident; it's built so a reluctant kid has four or five different doors into the week, not just one.",
      "We're watching for which door she walks through, not grading her on the ones she doesn't.",
    ],
  },
  {
    id: "hates-it",
    question: "What if he hates it?",
    answer: [
      "Some kids do, for the first day. We'd rather you hear that from us plainly than have us paper over it on the phone.",
      "If it's still true after we've genuinely tried — new cabin group, new activity, one-on-one time with a counselor he trusts — we'll talk with you about what's next. That conversation is never off the table.",
    ],
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState("never-slept-away");

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20 lg:px-20 lg:py-24">
        <span className="block font-heading text-secondary text-[24px] md:text-[28px] tracking-normal leading-none mb-3">
          Your worries, answered properly
        </span>

        <h2 className="font-body font-bold text-black text-[28px] md:text-[32px] lg:text-[38px] leading-[48px] tracking-normal max-w-3xl mb-10 md:mb-14">
          This Is The Part I'd Read First If I Were You.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-8 items-start">
          <div className="flex flex-col gap-4 md:gap-5">
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
        </div>
      </div>
    </section>
  );
}
