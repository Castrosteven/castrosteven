import { Backend } from "./Backend";
import { Cloud } from "./Cloud";
import { Desktop } from "./Desktop";
import { FrontEnd } from "./FrontEnd";
import { Mobile } from "./Mobile";

export const SKills = () => {
  return (
    <div className="w-full h-full mt-20 " id="skills">
      <div className="flex  mb-20">
        <span className="text-3xl font-bold pr-5">Skills</span>
        <div className="border-yellow-400 border-b-2 w-full"></div>
      </div>
      <div className="flex flex-col gap-40">
        <FrontEnd />
        <Mobile />
        <Desktop />
        <Backend />
        <Cloud />
      </div>
    </div>
  );
};
