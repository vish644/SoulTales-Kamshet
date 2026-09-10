// import React from "react";
// import { socialIconsData } from "../data/data";
// import SvgImage from "../common/SvgImage";
// import PhoneCall from "../assets/phone-call1.svg";

// const TopBar = () => {
//   return (
//     <section className="bg-pink">
//       <div className="flex items-center justify-between py-4 max-w-360 mx-auto">
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <SvgImage
//               svgImage={PhoneCall}
//               label="Offer"
//               width="w-5"
//               height="h-5"
//             />
//             +91 92091 - 80701
//           </div>
//           <div className="flex items-center gap-2">
//             <SvgImage
//               svgImage={PhoneCall}
//               label="Offer"
//               width="w-5"
//               height="h-5"
//             />
//             soul@youngsoultales.com
//           </div>
//         </div>
//         <div className="flex items-center gap-6">
//           {socialIconsData.map(({ name, icon, href }) => (
//             <a key={name} href={href} target="_blank" rel="noopener noreferrer">
//               <SvgImage svgImage={icon} label={name} width="w-6" height="h-6" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopBar;

// TopBar.jsx
import React from "react";
import { socialIconsData } from "../data/data";
import SvgImage from "../common/SvgImage";
import PhoneCall from "../assets/phone-call1.svg";
import Mail from "../assets/Email.svg";

const TopBar = () => {
  return (
    <section className="bg-pink">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 py-2 sm:py-3 max-w-360 mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <SvgImage
              svgImage={PhoneCall}
              label="Offer"
              width="w-4 sm:w-5"
              height="h-4 sm:h-5"
            />
            +91 92091 - 80701
          </div>
          <div className="flex items-center gap-2">
            <SvgImage
              svgImage={Mail}
              label="Offer"
              width="w-4 sm:w-5"
              height="h-4 sm:h-5"
            />
            soul@youngsoultales.com
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
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
      </div>
    </section>
  );
};

export default TopBar;
