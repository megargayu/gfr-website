import DownArrow from "../../assets/icons/chevron-down.svg";
import { motion } from "framer-motion";

const ScrollDownArrow: React.FC = () => {
  return (
    <div>
      <motion.img
        animate={{ y: 20, opacity: [0.1, 0.5] }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={DownArrow}
        className="invert w-10 mb-[-20px]"
      />
    </div>
  );
};

export default ScrollDownArrow;
