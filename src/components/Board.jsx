import { Domain } from "./Domain";
import { TimeTable } from "./Table/TimeTable";

export const Board = ({ domains }) => {
    return (
        <div className="relative w-[26rem] h-full bg-black overflow-hidden">
            <TimeTable />
            <div className="absolute top-0 left-12 flex min-h-full justify-end flex-nowrap ">
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
