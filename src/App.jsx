import React from "react";
import { motion } from "framer-motion";

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
import ScrollToTop from "./common/ScrollToTop";
import {
  CallbackFormProvider,
  useCallbackForm,
} from "./context/CallbackFormContext";

// Common
import Button from "./common/Button";
import SvgImage from "./common/SvgImage";
import WhatsappIcon from "../src/assets/Whatsapp.svg";

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

// Outer App — just sets up the provider, nothing else
const App = () => {
  return (
    <CallbackFormProvider>
      <AppContent />
    </CallbackFormProvider>
  );
};

// Inner component — safe to use the hook, it's a CHILD of the provider
const AppContent = () => {
  const { openForm } = useCallbackForm();

  return (
    <>
      <Navbar className="sticky top-0 z-50 bg-white" />

      <ScrollToTop />

      <div className="flex flex-col gap-10 lg:gap-20">
        {SECTIONS.map(({ id, Component }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
      </div>

      <Footer />

      {/* Fixed bottom bar — CTA button + WhatsApp, mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 bg-white/10 px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] sm:hidden">
        <Button className="flex-1" onClick={openForm} />
        <motion.a
          href="https://wa.me/919209180701"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="shrink-0"
        >
          <SvgImage
            svgImage={WhatsappIcon}
            label="Chat on WhatsApp"
            width="w-10"
            height="h-10"
          />
        </motion.a>
      </div>

      {/* WhatsApp icon only — desktop/tablet, floating bottom-right */}
      <div className="hidden sm:block fixed bottom-6 right-6 md:bottom-10 md:right-6 z-40 cursor-pointer">
        <motion.a
          href="https://wa.me/919209180701"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="block"
        >
          <SvgImage
            svgImage={WhatsappIcon}
            label="Chat on WhatsApp"
            width="w-12"
            height="h-12"
          />
        </motion.a>
      </div>
    </>
  );
};

export default App;
