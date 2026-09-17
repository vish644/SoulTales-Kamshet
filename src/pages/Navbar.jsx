import React, { useState } from "react";
import SvgImage from "../common/SvgImage";
import TopBar from "./TopBar";
import Logo from "../assets/Logo.svg";
import { navOptions } from "../data/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="">
      {/* Social Links / Top Bar */}
      <div className="w-full">
        <TopBar />
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-360 mx-auto flex items-center justify-between py-2 px-4 lg:px-8">
          {/* Logo */}
          <SvgImage
            svgImage={Logo}
            label="Logo"
            width="w-16 lg:w-28"
            height="h-8 lg:h-12"
          />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navOptions.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="font-body text-base font-medium text-black hover:text-secondary transition-colors tracking-widest"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <ul className="px-4 py-2">
              {navOptions.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 font-body text-sm font-medium text-black hover:text-secondary transition-colors border-b border-gray-50 last:border-none tracking-widest"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
