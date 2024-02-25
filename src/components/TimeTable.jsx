import { dayInfoAtom } from "@/stores/report";
import { useAtomValue } from "jotai";

export const TimeTable = () => {
    const dayInfo = useAtomValue(dayInfoAtom);
    const domainCount = 5;

    return (
        <table className="w-full table-fixed border-separate border-spacing-0 border-1 border-white z-10">
            <tbody>
                {Array(10)
                    .fill(0)
                    .map((_, i) => (
                        <tr key={`table-row-${i}`}>
                            <th
                                scope="row"
                                className="w-10 h-60 border-2 border-white sticky left-0 bg-black z-30"
                            >
                                {(dayInfo.work[0].hour() + i) % 24}
                            </th>
                            {Array(domainCount)
                                .fill(0)
                                .map((_, j) => (
                                    <td
                                        key={`table-cell-${i}-${j}`}
                                        className="w-40 border-x-2 border-x-white"
                                    />
                                ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
