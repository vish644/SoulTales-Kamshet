import React from "react";

// Pages
import Navbar from "./pages/Navbar";
import Hero from "../src/pages/Hero";
import Retreat from "../src/pages/TheRetreat";
import WhatTheyDo from "../src/pages/WhatTheyDo";
import TheyCook from "../src/pages/TheyCook";
import ForParents from "./pages/ForParents";
import WhyItBuilt from "../src/pages/WhyItBuilt";
import Founder from "../src/pages/FounderPreeti";
import FAQ from "../src/pages/FAQ";
import PracticalDetails from "../src/pages/PracticalDetails";
import Booking from "../src/pages/Booking";
import Honesty from "../src/pages/Honesty";
import Footer from "./pages/Footer";

/**
 * Landing page sections, in display order.
 * Each entry maps a stable DOM id (used for in-page nav / anchor links)
 * to the component that renders that section.
 *
 * Keeping this as a config array (rather than hand-written JSX below)
 * means adding, removing, or reordering sections is a one-line change,
 * and it's easy to unit-test the page structure independently of markup.
 */
const SECTIONS = [
  { id: "hero", Component: Hero },
  { id: "retreat", Component: Retreat },
  { id: "what-they-do", Component: WhatTheyDo },
  { id: "they-cook", Component: TheyCook },
  { id: "for-parents", Component: ForParents },
  { id: "why-it-built", Component: WhyItBuilt },
  { id: "founder", Component: Founder },
  { id: "faq", Component: FAQ },
  { id: "practical-details", Component: PracticalDetails },
  { id: "booking", Component: Booking },
  { id: "honesty", Component: Honesty },
];

const App = () => {
  return (
    <>
      <Navbar />
      {SECTIONS.map(({ id, Component }) => (
        <section key={id} id={id}>
          <Component />
        </section>
      ))}
      <Footer />
    </>
  );
};

export default App;
