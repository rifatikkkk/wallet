import { Text } from "../../../shared/ui/text";
import upPlanet from "../../../shared/assets/upPlanet.svg";
import { Stats } from "../../../shared/ui/stats";
import { Planet } from "../../../shared/ui/planet";

export const Landing = () => {
  return (
    <div className="mt-[35px] mb-[60px] relative text-white h-[628px]">
      <div className="absolute right-[223px] top-[32px]">
        <Planet />
      </div>
      <div className="absolute top-[59px] right-[490px] ">
        <img src={upPlanet} alt="upPlanet" />
      </div>
      <div className="flex justify-between w-full absolute top-[215px]">
        <div className="flex gap-[45px] flex-col">
          <h1 className="font-bebas roundedText font-bold text-[120px] text-justify leading-none max-w-[1007px]">
            Eplore Your Own Planet In{" "}
            <span className="stroke-text">Our New</span> Metaverse
          </h1>
          <Text />
        </div>
        <Stats />
      </div>
    </div>
  );
};
