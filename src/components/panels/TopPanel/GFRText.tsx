import { motion } from "framer-motion";
import Title from "../../Title";

const GFRText: React.FC = () => {
  const duration = 0.3;
  // TODO: this is kinda cursed, also fix the spring-y animations

  return (
    <div className="relative p-2">
      <motion.span
        animate={{ right: 0 }}
        transition={{ delay: duration * 0, duration: duration }}
        className="absolute rounded-md left-0 right-full top-0 h-2 sm:hsm:h-3 bg-gradient-to-r from-red-600 to-purple-800"
      />
      <motion.span
        animate={{ bottom: 0 }}
        transition={{ delay: duration * 1, duration: duration }}
        className="absolute rounded-md top-0 bottom-full right-0 w-2 sm:hsm:w-3 bg-purple-800"
      />
      <motion.span
        animate={{ left: 0 }}
        transition={{ delay: duration * 2, duration: duration }}
        className="absolute rounded-md left-full right-0 bottom-0 h-2 sm:hsm:h-3 bg-gradient-to-r from-red-600 to-purple-800"
      />
      <motion.span
        animate={{ top: 0 }}
        transition={{ delay: duration * 3, duration: duration }}
        className="absolute rounded-md top-full bottom-0 left-0 w-2 sm:hsm:w-3 bg-red-600"
      />

      <div className="p-5 sm:hsm:p-10 rounded-sm bg-dark">
        <Title className="tracking-title">
          Gael Force Robotics
        </Title>
      </div>
    </div>
  );
};

export default GFRText;
