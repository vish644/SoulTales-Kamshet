import React from "react";

/**
 * SvgImage
 *
 * Reusable image component for rendering SVGs or other image assets with
 * configurable dimensions.
 *
 * Features:
 * - Accepts Tailwind width and height classes.
 * - Uses `object-contain` to preserve the image aspect ratio.
 * - Can receive additional image classes through `size`.

 * Examples:
 * <SvgImage svgImage={Logo} label="Company Logo" />
 *
 * <SvgImage
 *   svgImage={OfferIcon}
 *   label="Offer"
 *   width="w-16"
 *   height="h-16"
 * />
 *
 * <SvgImage
 *   svgImage={Arrow}
 *   width="w-4"
 *   height="h-4"
 *   size="opacity-60"
 * />
 */

// const SvgImage = ({
//   svgImage,
//   label,
//   width = "w-10",
//   height = "h-10",
//   size,
// }) => {
//   return (
//     <div className={`${width} ${height}`}>
//       <img
//         src={svgImage}
//         alt={label}
//         className={`w-full h-full object-contain ${size || ""}`}
//       />
//     </div>
//   );
// };

// export default SvgImage;

const SvgImage = ({
  svgImage,
  label,
  width = "w-10",
  height = "h-10",
  size,
  color, // NEW — pass a bg-* class like "bg-secondary" or "bg-white"
}) => {
  if (color) {
    return (
      <div
        className={`${width} ${height} ${color} ${size || ""}`}
        style={{
          WebkitMaskImage: `url(${svgImage})`,
          maskImage: `url(${svgImage})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
        role="img"
        aria-label={label}
      />
    );
  }

  return (
    <div className={`${width} ${height}`}>
      <img
        src={svgImage}
        alt={label}
        className={`w-full h-full object-contain ${size || ""}`}
      />
    </div>
  );
};

export default SvgImage;
