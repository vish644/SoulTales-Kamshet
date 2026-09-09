// // src/components/StampBadge.jsx
// import React from "react";

// /**
//  * Reusable rotating "stamp" badge — circular, tilted, colored.
//  * Pass `lines` as an array so you control the line breaks,
//  * e.g. lines={["Never stop", "Exploring"]}
//  */
// const StampBadge = ({
//   lines = ["Never stop", "Exploring"],
//   bgColor = "bg-green",
//   rotate = "-rotate-6",
//   className = "",
// }) => {
//   return (
//     <div
//       className={`
//         flex aspect-square w-24 items-center justify-center rounded-full
//         ${bgColor} ${rotate} shadow-md
//         md:w-28
//         lg:w-[145px]
//         ${className}
//       `}
//     >
//       <p className="flex flex-col items-center text-center font-heading text-sm font-medium leading-tight text-white md:text-base lg:text-xl">
//         {lines.map((line, i) => (
//           <span key={i}>{line}</span>
//         ))}
//       </p>
//     </div>
//   );
// };

// export default StampBadge;



// src/components/StampBadge.jsx
// src/components/StampBadge.jsx
import React from "react";

/**
 * Organic "blob" badge, traced from the reference artwork's actual pixel
 * outlines (not a generic rounded blob) so the wobble and rim thickness
 * match exactly: thin at top, thicker along the bottom/right.
 *
 * Two SVGs stacked: a lighter "back" shape (its own traced outline, not a
 * scaled copy of the front) peeking out as the rim, and a darker "front"
 * shape on top holding the text.
 */
const BACK_PATH =
  "M 95 67 C 89 72.5, 79.5 83.3, 75 90 C 70.5 96.7, 69.7 101.2, 68 107 " +
  "C 66.3 112.8, 65.3 119.5, 65 125 C 64.7 130.5, 64.8 133.7, 66 140 " +
  "C 67.2 146.3, 69 155.5, 72 163 C 75 170.5, 80.2 179.3, 84 185 " +
  "C 87.8 190.7, 90.8 193.3, 95 197 C 99.2 200.7, 103 203.8, 109 207 " +
  "C 115 210.2, 123.3 213.8, 131 216 C 138.7 218.2, 147.2 219.3, 155 220 " +
  "C 162.8 220.7, 168.7 221.3, 178 220 C 187.3 218.7, 202.8 214.8, 211 212 " +
  "C 219.2 209.2, 222.2 206.5, 227 203 C 231.8 199.5, 235.3 197.7, 240 191 " +
  "C 244.7 184.3, 251.8 171, 255 163 C 258.2 155, 258.3 150.5, 259 143 " +
  "C 259.7 135.5, 260.5 126.7, 259 118 C 257.5 109.3, 254.5 99, 250 91 " +
  "C 245.5 83, 239.2 75.8, 232 70 C 224.8 64.2, 217.2 59.7, 207 56 " +
  "C 196.8 52.3, 183.7 49, 171 48 C 158.3 47, 141 48.5, 131 50 " +
  "C 121 51.5, 117 54.2, 111 57 C 105 59.8, 101 61.5, 95 67 Z";

const FRONT_PATH =
  "M 102 65 C 96.5 69.5, 87.8 79.2, 84 84 C 80.2 88.8, 80.5 89.7, 79 94 " +
  "C 77.5 98.3, 75.7 104.7, 75 110 C 74.3 115.3, 74.2 119, 75 126 " +
  "C 75.8 133, 78.3 145.3, 80 152 C 81.7 158.7, 82 160, 85 166 " +
  "C 88 172, 93.7 182.3, 98 188 C 102.3 193.7, 106.3 196.7, 111 200 " +
  "C 115.7 203.3, 121.5 206, 126 208 C 130.5 210, 132.3 210.8, 138 212 " +
  "C 143.7 213.2, 150.2 215.2, 160 215 C 169.8 214.8, 188.3 212.7, 197 211 " +
  "C 205.7 209.3, 207.3 207.5, 212 205 C 216.7 202.5, 221.2 199.3, 225 196 " +
  "C 228.8 192.7, 231.8 189.5, 235 185 C 238.2 180.5, 241.3 176.2, 244 169 " +
  "C 246.7 161.8, 249.7 150.2, 251 142 C 252.3 133.8, 252.2 126.2, 252 120 " +
  "C 251.8 113.8, 252.2 111.5, 250 105 C 247.8 98.5, 242.8 87, 239 81 " +
  "C 235.2 75, 231.7 72.5, 227 69 C 222.3 65.5, 220.2 63, 211 60 " +
  "C 201.8 57, 184.7 52.3, 172 51 C 159.3 49.7, 144.2 51, 135 52 " +
  "C 125.8 53, 122.5 54.8, 117 57 C 111.5 59.2, 107.5 60.5, 102 65 Z";

const StampBadge = ({
  lines = ["Never stop", "Exploring"],
  frontColor = "#336F54",
  backColor = "#8BAA93",
  rotate = "-rotate-3",
  className = "",
}) => {
  return (
    <div
      className={`relative ${rotate} ${className}`}
      style={{ width: "260px", aspectRatio: "194 / 172" }}
    >
      <svg viewBox="60 40 205 187" className="absolute inset-0 h-full w-full overflow-visible">
        <path fill={backColor} d={BACK_PATH} />
        <path fill={frontColor} d={FRONT_PATH} />
      </svg>

      <p
        className="absolute inset-0 flex flex-col items-center justify-center text-center font-heading font-bold leading-tight text-white"
        style={{ fontFamily: "'Kalam', 'Comic Sans MS', cursive", fontSize: "clamp(16px, 6.2cqw, 27px)" }}
      >
        {lines.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </p>
    </div>
  );
};

export default StampBadge;

/*
  Font note: the reference art uses a hand-marker face I couldn't identify
  with certainty from pixels alone. "Kalam" (Google Fonts, weight 700) is
  the closest freely-available match used above — load it via:
  <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap" rel="stylesheet">
  Swap in the exact font file if you have it and the match will be exact.
*/
