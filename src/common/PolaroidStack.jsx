import React, { useEffect, useState } from "react";

/**
 * Reusable animated polaroid stack — tight overlap, continuous front/back cycling.
 * images: [{ src, alt }]
 */
const SLOT_STYLES = [
  // front slot (bottom-right, on top)
  {
    top: "26%",
    left: "24%",
    rotate: 5,
    scale: 1,
    z: 20,
  },
  // back slot (top-left, behind)
  {
    top: "0%",
    left: "0%",
    rotate: -7,
    scale: 0.95,
    z: 10,
  },
  // extra slot, only used if more than 2 images passed
  {
    top: "6%",
    left: "12%",
    rotate: -2,
    scale: 0.9,
    z: 5,
  },
];

const PolaroidStack = ({ images = [], intervalMs = 3200, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div
      className={`relative aspect-4/5 w-full max-w-70 md:max-w-85 lg:max-w-95 ${className}`}
    >
      {images.map((image, i) => {
        const slotIndex = (i - activeIndex + images.length) % images.length;
        const slot =
          SLOT_STYLES[slotIndex] ?? SLOT_STYLES[SLOT_STYLES.length - 1];

        return (
          <div
            key={image.src || i}
            className="absolute w-[66%] rounded-xs bg-white p-2 pb-4 shadow-xl transition-all duration-700 ease-in-out md:p-2.5 md:pb-4"
            style={{
              top: slot.top,
              left: slot.left,
              zIndex: slot.z,
              transform: `rotate(${slot.rotate}deg) scale(${slot.scale})`,
            }}
          >
            <img
              src={image.src}
              alt={image.alt || ""}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PolaroidStack;
