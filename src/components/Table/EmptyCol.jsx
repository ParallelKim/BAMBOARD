import { addBamboo } from "@/features/bamboo";
import { useAtom } from "jotai";

export const EmptyCol = ({ atom }) => {
    const [val, set] = useAtom(atom);

    return (
        <td
            className="w-40 border-x-2 border-x-white"
            onClick={() => {
                addBamboo(val, set, "new task");

                console.log("added", val);
            }}
        />
    );
};
