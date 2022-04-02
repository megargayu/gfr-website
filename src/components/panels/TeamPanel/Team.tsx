export interface Team {
  teamLetter: string;
}

// TODO
const TeamComponent = ({ teamLetter }: Team) => (
  <h1 className="text-[3rem] md:text-[6rem] lg:text-[8rem] xl:text-[11rem] text-white hover:[opacity:_1_!important] hover:drop-shadow-glow group-hover:opacity-60 cursor-pointer">
    {teamLetter}
  </h1>
);

export default TeamComponent;
