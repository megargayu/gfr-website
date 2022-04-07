import Title from "../../Title";
import { PanelInfo } from "../Panel";
import Team from "./Team";

const TeamPanel: PanelInfo = () => (
  <div className="flex flex-col justify-center items-center h-full">
    <Title>
      Teams
    </Title>
    <div className="flex gap-x-24 sm:gap-x-24 gap-y-0 flex-wrap w-full justify-center group">
      <Team teamLetter={"D"} />
      <Team teamLetter={"K"} />
      <Team teamLetter={"Z"} />
      <Team teamLetter={"A"} />
      <Team teamLetter={"S"} />
      <Team teamLetter={"GFA"} />
    </div>
  </div>
);

// Panel2.parentClassName = "bg-[#216ae0]"; // original
TeamPanel.parentClassName = "bg-blue-900"

export default TeamPanel;
