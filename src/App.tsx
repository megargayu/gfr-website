import React, { useRef } from "react";

import Panel from "./components/panels/Panel";
import TopPanel from "./components/panels/TopPanel";
import TeamPanel from "./components/panels/TeamPanel";
import Panel3 from "./components/panels/Panel3";
import { useSpring } from "framer-motion";

const App = () => {
  const scrollSpring = useSpring(window.scrollY, { duration: 500 });
  scrollSpring.onChange((v) => window.scrollTo({ top: v }));

  const panels = [TopPanel, TeamPanel, Panel3];
  const refs = Array.from({ length: panels.length }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  const scrollToPanel = (panelNum: number) => {
    if (scrollSpring.getVelocity() != 0) return;

    const panel = refs[panelNum].current;
    if (panel == null) return;

    scrollSpring.set(window.scrollY, false);
    scrollSpring.set(panel.offsetTop);
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
  // TODO: fix wheel & key events; too many can cause it to glitch out (wheel events are delayed, and key events are weird)

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
