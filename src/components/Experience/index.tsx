const Card = ({ location, title }: { location: string; title: string }) => {
  return (
    <div className="bg-yellow-400 flex flex-col p-2 w-full h-80 rounded-md items-center justify-center text-black ">
      <p className="font-bold text-2xl text-center">{location}</p>
      <p className="font-medium text-lg">{title} </p>
    </div>
  );
};
export const Experience = () => {
  return (
    <div className="w-full h-full mb-20 mt-20 " id="experience">
      <div className="flex">
        <span className="text-3xl font-bold pr-5">Experience</span>
        <div className="border-yellow-400 border-b-2 w-full"></div>
      </div>
      <ul className="pt-10 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 w-full gap-10">
        <li>
          <Card
            location="Weill Cornell Medical College"
            title="Front End Web Developer"
          />
        </li>
        <li>
          <Card location="Portobel" title="Front End Typescript Engineer" />
        </li>
        <li>
          <Card location="Express Scripts" title="Front End  Engineer" />
        </li>
        <li>
          <Card location="Mount Sinai" title="Web Analyst" />
        </li>{" "}
        <li>
          <Card location="BNP Paribas" title="Migration Engineer" />
        </li>
        <li>
          <Card location="Castro AI" title="Founder and Lead Developer" />
        </li>
      </ul>
    </div>
  );
};
