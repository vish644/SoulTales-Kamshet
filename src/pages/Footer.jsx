import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Youtube from "../assets/Youtube.svg";
import phoneCall1 from "../assets/phone-call1.svg";
import Logo from "../assets/Logo.svg";
import Mail from "../assets/Email.svg";
import { socialIconsData } from "../data/data";
import SvgImage from "../common/SvgImage";

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" }, // TODO: swap icon
  { icon: Youtube, href: "#", label: "YouTube" }, // TODO: swap icon
  { icon: Instagram, href: "#", label: "Instagram" }, // TODO: swap icon
];

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "The Retreat", href: "#retreat" },
  { label: "What They'll Do", href: "#what-they-do" },
  { label: "For Parents", href: "#for-parents" },
  { label: "About Preeti", href: "#founder" },
  { label: "Practical Details", href: "#practical-details" },
];

export default function Footer() {
  return (
    <footer className="bg-pink pb-10 sm:pb-0 ">
      <div className="max-w-360 mx-auto px-6 md:px-10 py-10 md:py-14 flex flex-col gap-8">
        {/* Logo */}
        <div className="flex justify-center">
          {/* TODO: swap for real logo SVG */}
          <img
            src={Logo}
            alt="Young Soul Tales"
            className="h-14 lg:h-22.5 w-auto object-contain"
          />
        </div>

        {/* Social icons */}
        <div className=" flex justify-center items-center gap-3">
          {socialIconsData.map(({ name, icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer">
              <SvgImage
                svgImage={icon}
                label={name}
                width="w-5 sm:w-6"
                height="h-5 sm:h-6"
              />
            </a>
          ))}
        </div>

        {/* Nav links */}
        <nav className=" grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 text-center">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-base font-semibold leading-none tracking-normal hover:text-secondary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact row */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className=" flex flex-wrap justify-center items-center gap-2 sm:gap-5">
            <a
              href="tel:+919209180701"
              className="flex items-center gap-2 text-base font-semibold leading-none tracking-normal text-[#1A1A1A]"
            >
              <img src={phoneCall1} size={14} className="text-secondary" />
              +91 92091 - 80701
            </a>
            <a
              href="mailto:soul@youngsoultales.com"
              className="flex items-center gap-2 text-base font-semibold leading-none tracking-normal text-black"
            >
              <img src={Mail} size={14} className="text-secondary" />
              soul@youngsoultales.com
            </a>
          </div>

          <p className="text-center text-base font-semibold leading-none tracking-normal text-black">
            Thoughtfully Curated & Marketed By{" "}
            <a
              href="https://osumare.com/"
              className="hover:underline text-secondary"
            >
              Osumare
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
