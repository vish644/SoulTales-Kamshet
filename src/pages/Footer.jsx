import Facebook from "../assets/Facebook.svg"; 
import Instagram from "../assets/Instagram.svg"; 
import Youtube from "../assets/Youtube.svg"; 
import phoneCall1 from "../assets/phone-call1.svg"; 
import Logo from "../assets/Logo.svg"; 
import Mail from "../assets/Email.svg"; 



const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" }, // TODO: swap icon
  { icon: Youtube, href: "#", label: "YouTube" }, // TODO: swap icon
  { icon: Instagram, href: "#", label: "Instagram" }, // TODO: swap icon
];

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "The Retreat", href: "#" },
  { label: "What They'll Do", href: "#" },
  { label: "For Parents", href: "#" },
  { label: "About Preeti", href: "#" },
  { label: "Practical Details", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FCF4DC]">
      <div className="max-w-360 mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* Logo */}
        <div className="flex justify-center">
          {/* TODO: swap for real logo SVG */}
          <img
            src={Logo}
            alt="Young Soul Tales"
            className="h-[90px] w-auto object-contain"
          />
        </div>

        {/* Social icons */}
        <div className="mt-5 flex justify-center items-center gap-3">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full  text-white transition-colors"
            >
              <img src={Icon} size={16} />
            </a>
          ))}
        </div>

        {/* Nav links */}
        <nav className="mt-10 flex flex-wrap justify-between gap-x-10 gap-y-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[18px] font-semibold leading-none tracking-normal text-[#1A1A1A] hover:text-[#EE7141] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact row */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          <a
            href="tel:+919209180701"
            className="flex items-center gap-2 text-base font-semibold leading-none tracking-normal text-[#1A1A1A]"
          >
            <img src={phoneCall1} size={16} className="text-[#EE7141]" />
            +91 92091 - 80701
          </a>
          <a
            href="mailto:soul@youngsoultales.com"
            className="flex items-center gap-2 text-base font-semibold leading-none tracking-normal text-[#1A1A1A]"
          >
            <img src={Mail} size={16} className="text-[#EE7141]" />
            soul@youngsoultales.com
          </a>
        </div>
      </div>
    </footer>
  );
}