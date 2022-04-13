import React, { useEffect, useRef } from "react";

import Panel from "./components/panels/Panel";
import TopPanel from "./components/panels/TopPanel";
import TeamPanel from "./components/panels/TeamPanel";
import Panel3 from "./components/panels/Panel3";
import { useSpring } from "framer-motion";
import smoothScroll from "./utils/smoothScroll";

const App = () => {
  const scrollSpring = useSpring(window.scrollY, { duration: 1000 });
  scrollSpring.onChange((v) => window.scrollTo({ top: v }));

  const panels = [TopPanel, TeamPanel, Panel3];
  const refs = Array.from({ length: panels.length }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  // on page refresh, go back to top (otherwise, page might be misaligned to panels)
  useEffect(() => {
    scrollSpring.set(window.scrollY, false);
    scrollSpring.set(0);
  }, []);

  const scrollToPanel = (panelNum: number) => {
    if (scrollSpring.getVelocity() !== 0) return;

    const panel = refs[panelNum].current;
    if (panel == null) return;

    scrollSpring.set(window.scrollY, false);
    scrollSpring.set(panel.offsetTop);
  };

  smoothScroll(scrollToPanel, panels.length);

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
