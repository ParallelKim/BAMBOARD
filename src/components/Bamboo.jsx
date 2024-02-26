import { useEffect, useState } from "react";

import { finishBamboo } from "@/features/bamboo";
import { dayInfoAtom } from "@/stores/report";
import { useAtomValue } from "jotai";
import moment from "moment";
import { twJoin } from "tailwind-merge";

export const Bamboo = ({
    id,
    domain,
    taskName,
    start,
    end,
    memos,
    val,
    set,
    index,
}) => {
    const dayInfo = useAtomValue(dayInfoAtom);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (end) return;

        const interval = setInterval(() => {
            setDuration((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [end]);

    return (
        <div
            style={{
                height: `${
                    (end
                        ? moment(end).diff(moment(start), "seconds")
                        : duration) / 360
                }%`,
                marginTop: `${
                    moment(start).diff(moment(dayInfo.work[0]), "seconds") / 360
                }%`,
            }}
            className={twJoin(
                "flex shrink-0 w-full justify-center align-middle text-white rounded-lg border-2 border-white bg-green-400 overflow-hidden",
                !end && "border-b-0 rounded-b-none"
            )}
            onClick={() => finishBamboo(val, set, index)}
        >
            {taskName}
        </div>
    );
};
