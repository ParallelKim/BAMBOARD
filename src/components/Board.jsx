import { Domain } from "./Domain";
import { TimeTable } from "./TimeTable";

export const Board = ({ domains }) => {
    return (
        <div className="relative w-[26rem] h-full bg-black overflow-scroll">
            <TimeTable />
            <div className="absolute top-0 left-10 flex min-h-full justify-end items-end flex-nowrap ">
                {domains.map((domain) => (
                    <Domain
                        key={domain.id}
                        bamboos={domain.bamboos}
                    />
                ))}
            </div>
        </div>
    );
};
