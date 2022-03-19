import { PanelInfo } from "../Panel";

import logo from "../../../../assets/logo.png";
import GFRText from "./GFRText";

const Panel1: PanelInfo = () => (
  <div className="flex flex-col justify-center items-center h-full">
    <img
      className="w-80 h-80 mb-1 saturate-200 drop-shadow-glow justify-self-center"
      src={logo}
    />
    <GFRText />
  </div>
);

Panel1.parentClassName = "bg-dark";

export default Panel1;
