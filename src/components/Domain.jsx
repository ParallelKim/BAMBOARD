import { Bamboo } from "./Bamboo";

export const Domain = ({ bamboos }) => {
    return (
        <div className="flex flex-col w-40 min-h-full shrink-0 justify-end">
            {bamboos.map((bamboo) => (
                <Bamboo
                    key={bamboo.id}
                    {...bamboo}
                />
            ))}
        </div>
    );
};
