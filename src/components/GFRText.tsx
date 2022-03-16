import { motion } from "framer-motion";

const GFRText: React.FC = () => {
  return (
    <motion.div className="p-2 rounded-md bg-gradient-to-r from-red-600 to-purple-800 mb-20 mx-5">
      <div className="p-10 rounded-sm bg-dark">
        <h1 className="text-6xl font-semibold tracking-[.30em] text-white text-center">
          Gael Force Robotics
        </h1>
      </div>
    </motion.div>
  );
};

export default GFRText;
