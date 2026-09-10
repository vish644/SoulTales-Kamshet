import Facebook from "../assets/Facebook.svg";
import Youtube from "../assets/Youtube.svg";
import Instagram from "../assets/Instagram.svg";

// Days
import Thursday from "../assets/Thursday.svg";
import Friday from "../assets/Friday.svg";
import Saturday from "../assets/Saturday.svg";
import Sunday from "../assets/Sunday.svg";
import thursdayPhoto1 from "../assets/Honesty.png";
import thursdayPhoto2 from "../assets/Honesty.png";

export const socialIconsData = [
  {
    name: "facebook",
    icon: Facebook,
    href: "#",
  },
  {
    name: "youtube",
    icon: Youtube,
    href: "#",
  },
  {
    name: "instagram",
    icon: Instagram,
    href: "#",
  },
];

export const navOptions = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "TheRetreat",
    href: "#",
  },
  {
    name: "WhatThey'llDo",
    href: "#",
  },
  {
    name: "ForParents",
    href: "#",
  },
  {
    name: "AboutPreeti",
    href: "#",
  },
  {
    name: "PracticalDetails",
    href: "#",
  },
];

export const DAYS = [
  {
    key: "thursday",
    label: "Thursday",
    icon: Thursday,
    photos: [thursdayPhoto1, thursdayPhoto2],
    heading: "Thursday Is Small And Quick.",
    body: "Everyone Finishes Something Within About Twenty Minutes, Because Everyone Needs To Begin From",
    quote: "I made a thing.",
    footer: "No Exceptions. No Child Left Behind. On Day One.",
  },
  {
    key: "friday",
    label: "Friday",
    icon: Friday,
    photos: [thursdayPhoto1, thursdayPhoto2],
    heading: "Friday Is Large, And Physical.",
    body: "Clay is worked on the ground with both hands and full body weight. Not a tiny piece on a table. Bamboo. Rope. Knots that either hold or don’t.",
    quote: "Does it stand? Does it carry? Does it take the weight?",
    footer: "And then comes the test.",
  },
  {
    key: "saturday",
    label: "Saturday",
    icon: Saturday,
    photos: [thursdayPhoto1, thursdayPhoto2],
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
    photos: [thursdayPhoto1, thursdayPhoto2],
    heading: "Sunday morning",
    body: "And then they build a raft. Bamboo. Rope. Drums. Lashed together by children who, just three days earlier, didn’t know how to tie a knot that holds. Then comes the test.",
    quote: " it’s already standing there",
    footer: "And when you arrive,",
  },
];
