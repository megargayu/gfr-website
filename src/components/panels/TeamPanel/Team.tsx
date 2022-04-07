export interface Team {
  teamLetter: string;
}

// TODO
const TeamComponent = ({ teamLetter }: Team) => (
  <h1 className="text-white text-[4rem] sm:hsm:text-[8rem] hover:[opacity:_1_!important] hover:drop-shadow-glow group-hover:opacity-60 cursor-pointer">
    {teamLetter}
  </h1>
);

export default TeamComponent;
