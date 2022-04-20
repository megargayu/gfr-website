import { useSpring } from "framer-motion";
import { useEffect } from "react";

const SPRING_DURATION = 1000;
const LOCK_DURATION = 2000;

// TODO: prevent smooth scrolling up on first and down on last panels to allow for other functions (eg. reloading)
// TODO: lock based on previous scroll
const useSmoothScroll = (
  refs: React.MutableRefObject<HTMLDivElement | null>[]
) => {
  const scrollSpring = useSpring(window.scrollY, { duration: SPRING_DURATION });
  scrollSpring.onChange((v) => window.scrollTo({ top: v }));

  const scrollToPanel = (panelNum: number) => {
    if (scrollSpring.getVelocity() !== 0) return;

    const panel = refs[panelNum].current;
    if (panel == null) return;

    scrollSpring.set(window.scrollY, false);
    scrollSpring.set(panel.offsetTop);
  };

  let currentPanel: number = 0;

  // on page refresh, go back to top (otherwise, page might be misaligned to panels), and disable scroll bars
  useEffect(() => {
    scrollToPanel(0);

    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const scrollDown = () => {
    if (currentPanel < refs.length - 1) scrollToPanel(++currentPanel);
  };

  const scrollUp = () => {
    if (currentPanel > 0) scrollToPanel(--currentPanel);
  };

  let active = true;
  let activeTimeout: NodeJS.Timeout | undefined = undefined;
  const deactivate = () => {
    if (activeTimeout) clearTimeout(activeTimeout);
    active = false;
    activeTimeout = setTimeout(() => (active = true), LOCK_DURATION);
  };

  const smoothWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (!active) return;

    if (e.deltaY > 0) scrollDown();
    else if (e.deltaY < 0) scrollUp();

    deactivate();
  };

  let smoothTouchPreviousState: number | undefined = undefined;
  let smoothTouchTimeout: NodeJS.Timeout | undefined = undefined;
  const smoothTouch = (e: TouchEvent) => {
    // don't restrict other movements, such as zooming in
    if (e.touches.length > 1) return;
    if (!active) return;

    e.preventDefault();
    if (smoothTouchPreviousState) {
      let deltaY = e.changedTouches[0].clientY - smoothTouchPreviousState;

      if (deltaY < 0) scrollDown();
      else if (deltaY > 0) scrollUp();

      deactivate();
    }

    // make sure the previousState is constantly updated, otherwise previous scrolls will affect it\
    if (smoothTouchTimeout) clearTimeout(smoothTouchTimeout);
    smoothTouchPreviousState = e.changedTouches[0].clientY;
    smoothTouchTimeout = setTimeout(
      () => (smoothTouchPreviousState = undefined),
      100
    );
  };

  const smoothKeys = (e: KeyboardEvent) => {
    if (!active) return;

    switch (e.code) {
      case "ArrowUp":
      case "PageUp":
        e.preventDefault();
        scrollUp();
        deactivate();
        break;

      case "ArrowDown":
      case "PageDown":
      case "Space":
        e.preventDefault();
        scrollDown();
        deactivate();
        break;

      case "Home":
        e.preventDefault();
        scrollToPanel(0);
        deactivate();
        break;

      case "End":
        e.preventDefault();
        scrollToPanel(refs.length - 1);
        deactivate();
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
      if (activeTimeout) clearTimeout(activeTimeout);
    };
  }, []);

  return scrollToPanel;
};

export default useSmoothScroll;
