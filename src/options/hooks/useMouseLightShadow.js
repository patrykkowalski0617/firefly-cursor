import { useEffect, useRef } from "react";

// ======================
// Global shared state
// ======================
const subscribers = new Set();

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let rafId = null;

// ======================
// Default effect configuration
// ======================
const DEFAULT_CONFIG = {
  maxOffset: 3,
  maxBlur: 1,
  maxDist: 100,
};

// ======================
// Shadow-related constants
// ======================
const BASE_BLUR = 20; // base blur (when mouse is over the center)
const SHADOW_COLOR = "rgba(0, 0, 0, 0.5)"; // shadow color and opacity
const INITIAL_SHADOW_INSET = `inset 0px 0px ${BASE_BLUR}px ${SHADOW_COLOR}`;
const INITIAL_SHADOW_NORMAL = `0px 0px ${BASE_BLUR}px ${SHADOW_COLOR}`;

// ======================
// Function updating all shadows
// ======================
const updateAllShadows = () => {
  rafId = null;

  subscribers.forEach((sub) => {
    if (!sub.ref.current) return;

    const { ref, isInternal, cssVariableName } = sub;
    const config = { ...DEFAULT_CONFIG, ...sub.customConfig };
    const { maxOffset, maxBlur, maxDist } = config;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const distance = Math.hypot(dx, dy);
    const factor = Math.min(distance / maxDist, 1);

    const offsetMultiplier = maxOffset / maxDist;
    const offsetX = -dx * factor * offsetMultiplier;
    const offsetY = -dy * factor * offsetMultiplier;
    const blur = BASE_BLUR + factor * maxBlur;

    const shadowType = isInternal ? "inset" : "";
    const newShadow = `${shadowType} ${offsetX}px ${offsetY}px ${blur}px ${SHADOW_COLOR}`;

    // Apply as CSS variable if name is provided, otherwise apply as inline box-shadow
    if (cssVariableName) {
      ref.current.style.setProperty(cssVariableName, newShadow);
    } else {
      ref.current.style.boxShadow = newShadow;
    }
  });

  // Schedule next frame only if there are subscribers
  if (subscribers.size > 0) {
    rafId = requestAnimationFrame(updateAllShadows);
  }
};

// ======================
// Scheduling updates
// ======================
const scheduleUpdate = () => {
  if (!rafId) {
    rafId = requestAnimationFrame(updateAllShadows);
  }
};

// ======================
// Global mouse move listener
// ======================
const handleMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  scheduleUpdate();
};

// Add listener only once (outside React)
if (typeof window !== "undefined") {
  document.addEventListener("mousemove", handleMouseMove);
}

// ======================
// Public hook
// ======================
export const useMouseLightShadow = (
  ref,
  isInternal = false,
  customConfig = {},
  cssVariableName = null
) => {
  const sub = useRef({
    ref,
    isInternal,
    customConfig,
    cssVariableName,
  });

  useEffect(() => {
    const currentSub = sub.current;

    // Update references in case of prop changes
    currentSub.ref = ref;
    currentSub.isInternal = isInternal;
    currentSub.customConfig = customConfig;
    currentSub.cssVariableName = cssVariableName;

    if (!ref.current) return;

    // Subscribe
    subscribers.add(currentSub);

    // Set initial shadow
    const initialShadow = isInternal
      ? INITIAL_SHADOW_INSET
      : INITIAL_SHADOW_NORMAL;

    if (cssVariableName) {
      ref.current.style.setProperty(cssVariableName, initialShadow);
    } else {
      ref.current.style.boxShadow = initialShadow;
    }

    // Scroll listener – element positions change
    const handleScroll = scheduleUpdate;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      subscribers.delete(currentSub);
      window.removeEventListener("scroll", handleScroll);

      // Clean up RAF if no active elements remain
      if (subscribers.size === 0 && rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
  }, [ref, isInternal, customConfig, cssVariableName]);

  return null;
};
