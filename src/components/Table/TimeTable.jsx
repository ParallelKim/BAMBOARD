import { dayInfoAtom, domainsAtomsAtom } from "@/stores/report";
import { useAtom, useAtomValue } from "jotai";

import { addDomain } from "@/features/domain";
import { twJoin } from "tailwind-merge";
import { EmptyCol } from "./EmptyCol";
import { NewDomainCol } from "./NewDomainCol";

export const TimeTable = ({ isOverview = true }) => {
    const dayInfo = useAtomValue(dayInfoAtom);
    const [domainsAtoms, dispatch] = useAtom(domainsAtomsAtom);

    return (
        <table className="w-full table-fixed border-separate border-spacing-0 border-1 border-white z-10">
            <tbody>
                {Array(10)
                    .fill(0)
                    .map((_, i) => (
                        <tr key={`table-row-${i}`}>
                            <th
                                scope="row"
                                className={twJoin(
                                    "w-10 border-2 border-white sticky left-0 bg-black z-30",
                                    isOverview ? "h-[10dvh]" : "h-60"
                                )}
                            >
                                {(dayInfo.work[0].hour() + i) % 25}
                            </th>
                            {domainsAtoms.map((atom, j) => (
                                <EmptyCol
                                    key={`table-cell-${i}-${j}`}
                                    atom={atom}
                                />
                            ))}
                            {domainsAtoms.length < 3 &&
                                Array(3 - domainsAtoms.length)
                                    .fill(0)
                                    .map((_, k) => (
                                        <NewDomainCol
                                            key={`table-new-cell-${i}-${k}`}
                                            onClick={() =>
                                                addDomain(dispatch, "new task")
                                            }
                                        />
                                    ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
