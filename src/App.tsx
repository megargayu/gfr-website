import React, { useEffect, useRef } from "react";

import Panel from "./components/panels/Panel";
import TopPanel from "./components/panels/TopPanel";
import TeamPanel from "./components/panels/TeamPanel";
import AboutPanel from "./components/panels/AboutPanel";
import Panel3 from "./components/panels/Panel3";
import { useSpring } from "framer-motion";
import useSmoothScroll from "./hooks/smoothScroll";

const App = () => {
  const scrollSpring = useSpring(window.scrollY, { duration: 1000 });
  scrollSpring.onChange((v) => window.scrollTo({ top: v }));

  const panels = [TopPanel, AboutPanel, TeamPanel, Panel3];
  const refs = Array.from({ length: panels.length }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  // on page refresh, go back to top (otherwise, page might be misaligned to panels), and disable scroll bars
  useEffect(() => {
    scrollSpring.set(window.scrollY, false);
    scrollSpring.set(0);

    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const scrollToPanel = (panelNum: number) => {
    if (scrollSpring.getVelocity() !== 0) return;

    const panel = refs[panelNum].current;
    if (panel == null) return;

    scrollSpring.set(window.scrollY, false);
    scrollSpring.set(panel.offsetTop);
  };

  useSmoothScroll(scrollToPanel, panels.length);

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
