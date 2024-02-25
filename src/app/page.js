import { Board } from "@/components/Board";

export default function Home() {
    return (
        <main className="flex h-dvh flex-col items-center justify-between p-24 bg-slate-400">
            <Board
                domains={[
                    {
                        id: "dm-001",
                        bamboos: [
                            {
                                id: "bb-001",
                                domain: "dm-001",
                                taskName: "밥먹기",
                                start: new Date(),
                                end: new Date(),
                                memos: ["ddd"],
                            },
                        ],
                    },
                ]}
            />
        </main>
    );
}
