import logo from "../assets/logo.png";
import GFRText from "./components/GFRText";

import ScrollDownArrow from "./components/ScrollDownArrow";

const App: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-dark font-body b-0">
        <div className="flex flex-col justify-center items-center h-full">
          <img
            className="w-80 h-80 mb-1 saturate-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            src={logo}
          />

          <GFRText />

          <button className="justify-self-end">
            <ScrollDownArrow />
          </button>
        </div>
      </div>

      <div className="w-full h-screen bg-blue-900 font-body b-0 p-10">
        <h1 className="text-6xl font-semibold text-white text-center">
          Panel 2
        </h1>
      </div>
    </>
  );
};

export default App;
