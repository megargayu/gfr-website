export interface Team {
  teamLetter: string;
}

// TODO
const TeamComponent = ({ teamLetter }: Team) => (
  <h1 className="text-[15em] text-white hover:[opacity:_1_!important] hover:drop-shadow-glow group-hover:opacity-60 cursor-pointer">
    {teamLetter}
  </h1>
);

export default TeamComponent;
