import { useSpring, animated } from "react-spring";
import colors from "tailwindcss/colors";
import logo from "../assets/logo.png";

const App = () => {
  return (
    <div className="w-screen h-screen bg-white dark:bg-dark font-body">
      <div className="flex flex-col justify-center items-center h-full">
        <img className="w-80 h-80 mb-1 drop-shadow-border blur-none" src={logo} />

        <div className="p-2 rounded-md bg-gradient-to-r from-red-600 to-purple-800">
          <div className="p-10 rounded-sm bg-white dark:bg-dark">
            <h1 className="text-6xl font-semibold tracking-[.30em] text-dark dark:text-white">
              Gael Force Robotics
            </h1>
          </div>
        </div>

        <button className="">Check out our stuff!</button>
      </div>
    </div>
  );
};

export default App;
