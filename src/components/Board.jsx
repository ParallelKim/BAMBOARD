import { domainsAtomsAtom } from "@/stores/report";
import { useAtom } from "jotai";
import { Domain } from "./Domain";
import { TimeTable } from "./Table/TimeTable";

export const Board = () => {
    const [domainsAtoms, dispatch] = useAtom(domainsAtomsAtom);

    return (
        <div className="relative w-[26rem] h-full bg-black overflow-hidden">
            <TimeTable />
            <div className="absolute top-0 left-10 flex min-h-full justify-end flex-nowrap ">
                {domainsAtoms.map((atom, i) => (
                    <Domain
                        key={`domains-${i}`}
                        atom={atom}
                    />
                ))}
            </div>
        </div>
    );
};
