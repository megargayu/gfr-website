import React, { useRef } from "react";
import Panel from "./components/Panel";
import Panel1 from "./components/panels/Panel1";
import Panel2 from "./components/panels/Panel2";
import Panel3 from "./components/panels/Panel3";

const App = () => {
  const panels = [Panel1, Panel2, Panel3];
  const refs = Array.from({ length: panels.length }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  const scrollToPanel = (panel: number) => {
    refs[panel]?.current?.scrollIntoView();
  };

  return panels.map((panel, i) => {
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
  }, []);
};

export default App;
