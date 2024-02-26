import { addBamboo } from "@/features/bamboo";
import { useAtom } from "jotai";
import { Bamboo } from "./Bamboo";

export const Domain = ({ atom }) => {
    const [val, set] = useAtom(atom);

    return (
        <div
            className="flex flex-col w-40 min-h-full shrink-0"
            onClick={() => {
                addBamboo(val, set, "new task");

                console.log("added", val);
            }}
        >
            {val.bamboos.map((bamboo, i) => (
                <Bamboo
                    key={bamboo.id}
                    val={val}
                    set={set}
                    index={i}
                    {...bamboo}
                />
            ))}
        </div>
    );
};
