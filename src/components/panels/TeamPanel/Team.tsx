export interface Team {
  teamName: string;
}

// TODO
const TeamComponent = ({ teamName }: Team) => (
  <div>{teamName}</div>
);

export default TeamComponent;
