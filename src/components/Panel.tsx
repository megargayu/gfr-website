import React from "react";
import ScrollDownArrow from "./ScrollDownArrow";

const Panel = React.forwardRef<
  HTMLDivElement | null,
  {
    children: React.ReactNode;
    scrollToPanel: () => void;
    className?: string;
    last?: boolean;
  }
>(({ children, scrollToPanel, className, last = false, ...props }, ref) => (
  <div
    className={`w-full h-screen ${className} font-body b-0`}
    ref={ref}
    {...props}
  >
    <div className="flex flex-col items-center h-full">
      <div className="h-[calc(100%_-_2.5rem_-_50px)] w-full">{children}</div>

      {!last && (
        <button onClick={scrollToPanel}>
          <ScrollDownArrow />
        </button>
      )}
    </div>
  </div>
));

export interface PanelInfo {
  (): JSX.Element;
  parentClassName: string;
}

export default Panel;
