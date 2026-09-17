import Facebook from "../assets/Facebook.svg";
import Youtube from "../assets/Youtube.svg";
import Instagram from "../assets/Instagram.svg";

// Days
import Thursday from "../assets/Thursday.svg";
import Friday from "../assets/Friday.svg";
import Saturday from "../assets/Saturday.svg";
import Sunday from "../assets/Sunday.svg";

// Images
import Thursday1 from "../assets/Thursday1.png";
import Thursday2 from "../assets/Thursday2.jpg";
import Friday1 from "../assets/Friday1.jpg";
import Friday2 from "../assets/Friday2.jpg";
import Saturday1 from "../assets/Saturday1.jpg";
import Saturday2 from "../assets/SAturday2.jpg";
import Sunday1 from "../assets/Sunday1.jpg";
import Sunday2 from "../assets/Sunday2.jpg";

//Practical Details svg's
import Places from "../assets/Places.svg";
import When from "../assets/When.svg";
import Where from "../assets/Where.svg";
import Ages from "../assets/Ages.svg";
import { Calendar, Globe2, Users, Tent } from "lucide-react";

export const DAYS = [
  {
    key: "thursday",
    label: "Thursday",
    icon: Thursday,
    photos: [
      { src: Thursday1, alt: "Child holding their first small clay creation" },
      { src: Thursday2, alt: "Close-up of the finished piece on Thursday" },
    ],
    heading: "Thursday Is Small And Quick.",
    body: "Everyone Finishes Something Within About Twenty Minutes, Because Everyone Needs To Begin From",
    quote: "I made a thing.",
    footer: "No Exceptions. No Child Left Behind. On Day One.",
  },
  {
    key: "friday",
    label: "Friday",
    icon: Friday,
    photos: [
      { src: Friday1, alt: "Child holding their first small clay creation" },
      { src: Friday2, alt: "Close-up of the finished piece on Thursday" },
    ],
    heading: "Friday Is Large, And Physical.",
    body: "Clay is worked on the ground with both hands and full body weight. Not a tiny piece on a table. Bamboo. Rope. Knots that either hold or don’t.",
    quote: "Does it stand? Does it carry? Does it take the weight?",
    footer: "And then comes the test.",
  },
  {
    key: "saturday",
    label: "Saturday",
    icon: Saturday,
    photos: [
      { src: Saturday1, alt: "Child holding their first small clay creation" },
      { src: Saturday2, alt: "Close-up of the finished piece on Thursday" },
    ],
    heading: "Saturday they work in groups of eight",
    body: "And then they build a raft. Bamboo. Rope. Drums. Lashed together by children who, just three days earlier, didn’t know how to tie a knot that holds. Then comes the test",
    quote: "Does it take the weight?",
    footer:
      "They take it into knee-deep water, load it up, and find out one thing:",
  },
  {
    key: "sunday",
    label: "Sunday",
    icon: Sunday,
    photos: [
      { src: Sunday1, alt: "Child holding their first small clay creation" },
      { src: Sunday2, alt: "Close-up of the finished piece on Thursday" },
    ],
    heading: "Sunday morning",
    body: "And then they build a raft. Bamboo. Rope. Drums. Lashed together by children who, just three days earlier, didn’t know how to tie a knot that holds. Then comes the test.",
    quote: " it’s already standing there",
    footer: "And when you arrive,",
  },
];

export const socialIconsData = [
  {
    name: "facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/14nk3g8Cqsz/",
  },
  {
    name: "youtube",
    icon: Youtube,
    href: "https://youtube.com/@soultales.explorations?si=a157RrJKhV2zTQGH",
  },
  {
    name: "instagram",
    icon: Instagram,
    href: "https://www.instagram.com/soultales.explorations?stkn=MTI4eW1peWVzdjZxNw==",
  },
];

export const navOptions = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "TheRetreat",
    href: "#retreat",
  },
  {
    name: "WhatThey'llDo",
    href: "#what-they-do",
  },
  {
    name: "ForParents",
    href: "#for-parents",
  },
  {
    name: "AboutPreeti",
    href: "#founder",
  },
  {
    name: "PracticalDetails",
    href: "#practical-details",
  },
];

export const leftItems = [
  {
    id: "never-slept-away",
    question: "She's never slept away from home.",
    answer: [
      "Then tell me that on the call, and tell me honestly — not the version where she's fine.",
      "Some children do have a hard first night. That is not a failure of the retreat, and it's not a failure of your child. There's an adult sleeping nearby. There's a small group she's already spent a day building something with. In my experience, the child who struggles on Thursday night is very often the one running the fire on Friday.",
      "But some children genuinely aren't ready, and three nights is a long time to be wrong about that. That's what the call is for.",
    ],
  },
  {
    id: "cries-wants-home",
    question: "What if he cries and wants to come home?",
    answer: [
      "We call you. Not to hand him over immediately, but so you know.",
      "Then we work with him, and we keep you informed. If it's genuinely not working, you come and get him. Kamshet is two hours away, and that is one of the reasons we chose it.",
      "This has not happened often. It does happen.",
    ],
  },
  {
    id: "cant-call-child",
    question: "Why can't I call my child?",
    answer: [
      "Because the phone undoes the thing we're doing.",
      "A child who knows a call is coming at eight o'clock spends the day half-somewhere-else. And the hard bit - the bit where they work out they can manage - usually happens right at the point where a call would rescue them out of it.",
    ],
  },
  {
    id: "water",
    question: "There's water. Tell me about that.",
    answer: [
      "Fair question, and here's the honest answer.",
      "The rafts go into shallow water only - knee-deep, where every child can stand up at any moment. Nobody is out of their depth, and nobody is floating away from shore.",
      'Every child wears a lifejacket, swimmer or not. An adult is standing in the water the entire time. And we ask about swimming ability on the medical form — please answer it accurately, including if the answer is "she says she can swim but I\'m not sure."',
    ],
  },
];

export const rightItems = [
  {
    id: "how-many-adults",
    question: "How many adults, really?",
    answer: ["1:5 adult-to-child ratio"],
  },
  {
    id: "medical",
    question: "What about medical?",
    answer: [
      "We collect a full medical form at confirmation - allergies, medication, anything at all. I read every one myself.",
      "There's a first-aid trained adult on site and a vehicle available at all times. The nearest hospital and full emergency details are in the information pack you get once you're booked.",
      "If your child needs medication during the retreat, we manage and record it.",
    ],
  },
  {
    id: "not-outdoorsy",
    question: "My child is not outdoorsy. Or sporty. Or good at art.",
    answer: [
      "Good.",
      "Nothing here is a competition and nothing is displayed for judging. There's no prize, no best-of, no group that wins. The things they make are tested for whether they work, which is a completely different question from whether they're good.",
      "If your child is the one who usually hangs back, tell me on the call. That's useful and it changes how we place them in a group.",
    ],
  },
  {
    id: "hates-it",
    question: "What if he hates it?",
    answer: [
      "Some of it, probably yes. There'll be a cold morning and a burnt dinner and a moment where the thing they built falls over.",
      "That's not the retreat going wrong.",
    ],
  },
];

export const infoItems = [
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
