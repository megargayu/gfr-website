import Title from "../../Title";
import { PanelInfo } from "../Panel";

const TeamPanel: PanelInfo = () => (
  <div className="flex flex-col justify-center items-center h-full gap-10">
    <Title>About Us</Title>

    <h1 className="text-white text-3xl w-10/12 text-center">
      We are an experienced and completely student-run high school club whose
      members work on both real life engineering projects and participate in the
      VEX Robotics Competition. Around 6 years old now, our club takes pride in
      its members’ teamwork and problem solving skills. We also heavily
      emphasize the engineering design process and ensure that all members have
      knowledge of such engineering aspects through our yearly seminars.
    </h1>
  </div>
);

// Panel2.parentClassName = "bg-[#216ae0]"; // original
TeamPanel.parentClassName = "bg-[#101010]";

export default TeamPanel;
