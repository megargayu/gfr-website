import DownArrow from "../../assets/icons/chevron-down.svg";
import { motion } from "framer-motion";

const ScrollDownArrow = () => {
  // TODO: add animation!
  return (
    <div>
      {/*<motion.img
        animate={{ y: 20, opacity: [0.1, 0.5] }}
        transition={{ type: "spring", duration: 3, repeat: Infinity }}
        src={DownArrow}
        className="invert w-10 mb-[-20px]"
  />*/}
      <img src={DownArrow} className="invert w-10" />
    </div>
  );
};

export default ScrollDownArrow;
