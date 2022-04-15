import React, { useEffect, useRef } from "react";

import Panel from "./components/panels/Panel";
import TopPanel from "./components/panels/TopPanel";
import TeamPanel from "./components/panels/TeamPanel";
import AboutPanel from "./components/panels/AboutPanel";
import Panel3 from "./components/panels/Panel3";
import useSmoothScroll from "./hooks/useSmoothScroll";

const App = () => {
  const panels = [TopPanel, AboutPanel, TeamPanel, Panel3];
  const refs = Array.from({ length: panels.length }, () =>
    useRef<HTMLDivElement | null>(null)
  );
  const scrollToPanel = useSmoothScroll(refs);

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
