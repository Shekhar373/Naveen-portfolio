import { createContext, useContext, RefObject } from "react";
import gsap from "gsap";

type HorizontalScrollContextType = {
  horizontalRef: RefObject<gsap.core.Tween | null>;
};

const HorizontalScrollContext = createContext<HorizontalScrollContextType | null>(null);

export const useHorizontalScrollContext = () => {
  const context = useContext(HorizontalScrollContext);

  if (!context) {
    throw new Error(
      "useHorizontalScrollContext must be used inside HorizontalScrollProvider"
    );
  }

  return context;
};

export default HorizontalScrollContext;