// TODO: handle different panels properly
import { useEffect } from "react";

// TODO: prevent smooth scrolling up on first and down on last panels to allow for other functions (eg. reloading)
const useSmoothScroll = (
  scrollToPanel: (panel: number) => void,
  numPanels: number
) => {
  const smoothWheel = (e: WheelEvent) => {
    e.preventDefault();

    if (e.deltaY > 0) scrollToPanel(1);
    else if (e.deltaY < 0) scrollToPanel(0);
  };

  let smoothTouchPreviousState: number | undefined = undefined;
  let smoothTouchTimeout: NodeJS.Timeout | undefined = undefined;
  const smoothTouch = (e: TouchEvent) => {
    // don't restrict other movements, such as zooming in
    if (e.touches.length > 1) return;

    e.preventDefault();
    if (smoothTouchPreviousState) {
      let deltaY = e.changedTouches[0].clientY - smoothTouchPreviousState;

      if (deltaY < 0) scrollToPanel(1);
      else if (deltaY > 0) scrollToPanel(0);
    }

    // make sure the previousState is constantly updated, otherwise previous scrolls will affect it
    smoothTouchPreviousState = e.changedTouches[0].clientY;
    if (smoothTouchTimeout) clearTimeout(smoothTouchTimeout);
    smoothTouchTimeout = setTimeout(
      () => (smoothTouchPreviousState = undefined),
      100
    );
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

      case "Home":
        e.preventDefault();
        scrollToPanel(0);
        break;

      case "End":
        e.preventDefault();
        scrollToPanel(numPanels - 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("wheel", smoothWheel, { passive: false });
    document.addEventListener("keydown", smoothKeys, { passive: false });
    document.addEventListener("touchmove", smoothTouch, { passive: false });

    return () => {
      document.removeEventListener("wheel", smoothWheel);
      document.removeEventListener("keydown", smoothKeys);
      document.removeEventListener("touchmove", smoothTouch);

      if (smoothTouchTimeout) clearTimeout(smoothTouchTimeout);
    };
  }, []);
};

export default useSmoothScroll;
