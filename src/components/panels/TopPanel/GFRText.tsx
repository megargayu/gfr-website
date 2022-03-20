import { motion } from "framer-motion";

const GFRText: React.FC = () => {
  const duration = 0.3;
  // TODO: this is kinda cursed, also fix the spring-y animations

  return (
    <div className="relative p-2 mb-20 mx-5">
      <motion.span
        animate={{ right: 0 }}
        transition={{ delay: duration * 0, duration: duration }}
        className="absolute rounded-md left-0 right-full top-0 h-3 bg-gradient-to-r from-red-600 to-purple-800"
      />
      <motion.span
        animate={{ bottom: 0 }}
        transition={{ delay: duration * 1, duration: duration }}
        className="absolute rounded-md top-0 bottom-full right-0 w-3 bg-purple-800"
      />
      <motion.span
        animate={{ left: 0 }}
        transition={{ delay: duration * 2, duration: duration }}
        className="absolute rounded-md left-full right-0 bottom-0 h-3 bg-gradient-to-r from-red-600 to-purple-800"
      />
      <motion.span
        animate={{ top: 0 }}
        transition={{ delay: duration * 3, duration: duration }}
        className="absolute rounded-md top-full bottom-0 left-0 w-3 bg-red-600"
      />

      <div className="p-10 rounded-sm bg-dark">
        <h1 className="text-6xl font-semibold tracking-title text-white text-center">
          Gael Force Robotics
        </h1>
      </div>
    </div>
  );
};

export default GFRText;
