import React, { useRef } from "react";
import Panel1 from "./components/panels/Panel1";

const App: React.FC = () => {
  const panels = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const scroll = (panel: number) => {
    panels[panel]?.current?.scrollIntoView();
  };

  return (
    <>
      <Panel1 ref={panels[0]} scroll={scroll} />

      <div
        className="w-full h-screen bg-blue-900 font-body b-0 p-10"
        ref={panels[1]}
      >
        <h1 className="text-6xl font-semibold text-white text-center">
          Panel 2
        </h1>
      </div>
    </>
  );
};

export default App;
