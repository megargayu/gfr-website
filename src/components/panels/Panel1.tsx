import React from "react";
import logo from "../../../assets/logo.png";

import GFRText from "../GFRText";
import ScrollDownArrow from "../ScrollDownArrow";

const Panel1 = React.forwardRef<
  HTMLDivElement | null,
  { scroll: (panel: number) => void }
>(({ scroll }, ref) => (
  <div className="w-full h-screen bg-dark font-body b-0" ref={ref}>
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center h-[calc(100%_-_2.5rem_-_100px)]">
        <img
          className="w-80 h-80 mb-1 saturate-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] justify-self-center"
          src={logo}
        />

        <GFRText />
      </div>

      <button onClick={() => scroll(1)}>
        <ScrollDownArrow />
      </button>
    </div>
  </div>
));

export default Panel1;
