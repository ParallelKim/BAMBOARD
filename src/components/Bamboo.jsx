import { twJoin } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import { growing } from "@/gsap/tweens";

export const Bamboo = ({ id, domain, taskName, start, end, memos }) => {
    useGSAP(growing);

    return (
        <div
            className={twJoin(
                "flex w-full h-20 justify-center align-middle text-white rounded-md border-2 border-white bg-blue-200"
            )}
        >
            {taskName}
        </div>
    );
};
