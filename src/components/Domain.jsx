import { Bamboo } from "./Bamboo";

export const Domain = ({ bamboos }) => {
    return (
        <div className="w-1/5 h-full rounded-md border-2 border-white">
            {bamboos.map((bamboo) => (
                <Bamboo
                    key={bamboo.id}
                    {...bamboo}
                />
            ))}
        </div>
    );
};
