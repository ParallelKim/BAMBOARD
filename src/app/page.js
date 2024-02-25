"use client";
import moment from "moment";
import "moment/locale/ko";
import { Board } from "@/components/Board";

moment.locale("ko");

export default function Home() {
    return (
        <main className="flex h-dvh justify-center bg-slate-400">
            <Board
                domains={[
                    {
                        id: "dm-001",
                        bamboos: [
                            {
                                id: "bb-001",
                                taskName: "1",
                                start: new Date(),
                                end: new Date(),
                                memos: ["ddd"],
                            },
                        ],
                    },
                    {
                        id: "dm-002",
                        bamboos: [
                            {
                                id: "bb-002",
                                taskName: "2",
                                start: new Date(),
                                end: new Date(),
                                memos: ["ddd"],
                            },
                        ],
                    },
                    {
                        id: "dm-003",
                        bamboos: [
                            {
                                id: "bb-003",
                                taskName: "3",
                                start: new Date(),
                                end: new Date(),
                                memos: ["ddd"],
                            },
                        ],
                    },
                    {
                        id: "dm-004",
                        bamboos: [
                            {
                                id: "bb-004",
                                taskName: "4",
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
