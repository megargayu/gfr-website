import React from "react";
import ScrollDownArrow from "./ScrollDownArrow";

const Panel = React.forwardRef<
  HTMLDivElement | null,
  { scroll: (panel: number) => void, panelNum: number }
>(({ children, scroll, panelNum, ...props }, ref) => (
  <div className={`w-full h-screen ${props.className} font-body b-0`} ref={ref}>
    {children}

    <button onClick={() => scroll(panelNum + 1)}>
      <ScrollDownArrow />
    </button>
  </div>
));

export default Panel;
