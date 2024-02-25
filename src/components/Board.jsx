import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Domain } from "./Domain";
import { TimeStamp } from "./TimeStamp";
import { twJoin } from "tailwind-merge";
import { growing } from "@/gsap/tweens";

export const Board = ({ domains }) => {
    return (
        <div className="h-full aspect-[9/16] bg-black overflow-hidden">
            <div
                id="board"
                className={twJoin("relative flex min-h-full justify-end")}
            >
                <TimeStamp />
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
