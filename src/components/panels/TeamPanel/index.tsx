import { PanelInfo } from "../Panel";
import Team from "./Team";

const Panel2: PanelInfo = () => (
  <div className="flex flex-col justify-center items-center h-full">
    <h1 className="text-6xl font-semibold text-white tracking-title text-center m-10">Teams</h1>
    <Team teamName={"5327D"} />
  </div>
);

Panel2.parentClassName = "bg-neutral-800";

export default Panel2;
