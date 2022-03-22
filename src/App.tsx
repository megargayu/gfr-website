import React, { useRef } from "react";
import checkIfScrolling from "./utils/checkIfScrolling";

import Panel from "./components/panels/Panel";
import TopPanel from "./components/panels/TopPanel";
import TeamPanel from "./components/panels/TeamPanel";
import Panel3 from "./components/panels/Panel3";

const App = () => {
  const panels = [TopPanel, TeamPanel, Panel3];
  const refs = Array.from({ length: panels.length }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  const scrollToPanel = (panel: number) => {
    if (checkIfScrolling()) return;
    refs[panel].current?.scrollIntoView();
  };

  // TODO: handle different panels properly
  const smoothScroll = (e: WheelEvent) => {
    e.preventDefault();

    if (e.deltaY > 0) scrollToPanel(1);
    else if (e.deltaY < 0) scrollToPanel(0);
  };

  const smoothKeys = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp":
      case "PageUp":
        e.preventDefault();
        scrollToPanel(0);
        break;

      case "ArrowDown":
      case "PageDown":
      case "Space":
        e.preventDefault();
        scrollToPanel(1);
        break;

      default:
        break;
    }
  };

  document.addEventListener("wheel", smoothScroll, { passive: false });
  document.addEventListener("keydown", smoothKeys, { passive: false });
  // TODO: handle touch

  return (
    <div>
      {panels.map((panel, i) => {
        return (
          <Panel
            key={i}
            ref={refs[i]}
            scrollToPanel={() => scrollToPanel(i + 1)}
            last={i == panels.length - 1}
            className={panel.parentClassName}
          >
            {React.createElement(panel)}
          </Panel>
        );
      }, [])}
    </div>
  );
};

export default App;
