import logo from "../assets/logo.png";

import ScrollDownArrow from "./components/ScrollDownArrow";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-white dark:bg-dark font-body b-0">
        <div className="flex flex-col justify-center items-center h-full">
          <img
            className="w-80 h-80 mb-1 drop-shadow-border blur-none"
            src={logo}
          />

          <div className="p-2 rounded-md bg-gradient-to-r from-red-600 to-purple-800 mb-20 mx-5">
            <div className="p-10 rounded-sm bg-white dark:bg-dark">
              <h1 className="text-6xl font-semibold tracking-[.30em] text-dark dark:text-white text-center">
                Gael Force Robotics
              </h1>
            </div>
          </div>

          <button className="justify-self-end">
            <ScrollDownArrow />
          </button>
        </div>
      </div>

      <div className="w-full h-screen bg-white dark:bg-blue-900 font-body b-0 p-10">
        <h1 className="text-6xl font-semibold text-dark dark:text-white text-center">
          Panel 2
        </h1>
      </div>
    </>
  );
};

export default App;
