// import React from "react";
// import SvgImage from "../common/SvgImage";
// import TopBar from "./TopBar";
// import PhoneCall from "../assets/phone-call1.svg";
// import Logo from "../assets/Logo.svg";
// import { navOptions } from "../data/data";

// const Navbar = () => {
//   return (
//     <section className="">
//       {/* Social Links  */}
//       <TopBar />

//       {/* Navbar Options  */}
//       <div className=" max-w-360 mx-auto flex items-center justify-between bg-white py-1">
//         <SvgImage svgImage={Logo} label="Logo" width="w-20" height="h-10" />
//         <ul className="flex items-center gap-8">
//           {navOptions.map(({ name, href }) => (
//             <li key={name}>
//               <a
//                 href={href}
//                 className="font-body text-sm font-medium text-black hover:text-secondary transition-colors"
//               >
//                 {name}
//               </a>
//             </li>
//           ))}
//         </ul>

//       </div>
//     </section>
//   );
// };

// export default Navbar;

// Navbar.jsx
import React, { useState } from "react";
import SvgImage from "../common/SvgImage";
import TopBar from "./TopBar";
import Logo from "../assets/Logo.svg";
import { navOptions } from "../data/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section>
      {/* Social Links  */}
      <TopBar />

      {/* Navbar Options  */}
      <div className="max-w-360 mx-auto flex items-center justify-between bg-white py-1 px-4 lg:px-8">
        <SvgImage
          svgImage={Logo}
          label="Logo"
          width="w-16 lg:w-20"
          height="h-8 lg:h-10"
        />

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navOptions.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="font-body text-sm font-medium text-black hover:text-secondary transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col bg-white border-t border-gray-100 px-4 py-2">
          {navOptions.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-body text-sm font-medium text-black hover:text-secondary transition-colors py-3 border-b border-gray-50 last:border-none"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Navbar;
