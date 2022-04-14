import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import Title from "../../Title";

const GFRText: React.FC = () => {
  // quit the animation when leaving the page to cause glitches
  const [forceQuit, setForceQuit] = useState(false);
  const duration = 0.3;

  const container = {
    main: {
      transition: {
        staggerChildren: duration,
      },
    },
  };

  const changeVisibility = () => {
    setForceQuit(true);
    document.removeEventListener("visibilitychange", changeVisibility);
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", changeVisibility);
    return () =>
      document.removeEventListener("visibilitychange", changeVisibility);
  }, []);

  const classes = [
    "left-0 top-0 h-2 sm:hsm:h-3 bg-gradient-to-r from-red-600 to-purple-800",
    "top-0 right-0 w-2 sm:hsm:w-3 bg-purple-800",
    "right-0 bottom-0 h-2 sm:hsm:h-3 bg-gradient-to-r from-red-600 to-purple-800",
    "bottom-0 left-0 w-2 sm:hsm:w-3 bg-red-600",
  ];

  const modifiers = ["right", "bottom", "left", "top"];

  return (
    <div className="relative p-2">
      {!forceQuit ? (
        <motion.span variants={container} animate={"main"}>
          {classes.map((val, i) => {
            return (
              <motion.span
                key={i}
                variants={{ main: { [modifiers[i]]: 0 } }}
                className={`absolute rounded-md ${val}`}
              />
            );
          })}
        </motion.span>
      ) : (
        <span>
          {classes.map((val, i) => {
            return (
              <span
                key={i}
                className={`absolute rounded-md ${val} ${modifiers[i]}-0`}
              />
            );
          })}
        </span>
      )}

      <div className="p-5 sm:hsm:p-10 rounded-sm bg-dark">
        <Title className="tracking-title">Gael Force Robotics</Title>
      </div>
    </div>
  );
};

export default GFRText;
