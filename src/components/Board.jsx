import { Domain } from "./Domain";

export const Board = ({ domains }) => {
    return (
        <div className="w-full h-full bg-blue-800">
            {domains.map((domain) => (
                <Domain
                    key={domain.id}
                    bamboos={domain.bamboos}
                />
            ))}
        </div>
    );
};
