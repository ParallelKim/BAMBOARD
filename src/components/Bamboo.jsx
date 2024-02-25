import { dayInfoAtom } from "@/stores/report";
import { useAtomValue } from "jotai";
import { twJoin } from "tailwind-merge";

export const Bamboo = ({ id, domain, taskName, start, end, memos }) => {
    const dayInfo = useAtomValue(dayInfoAtom);

    return (
        <div
            className={twJoin(
                "flex w-full justify-center align-middle text-white rounded-lg border-2 border-white bg-green-400",
                // `mt-[${dayInfo.work[0].subtract(start).minute()}rem]`,
                end
                    ? `h-[${end - start}]`
                    : "min-h-full border-b-0 rounded-b-none"
            )}
        >
            {taskName}
        </div>
    );
};
