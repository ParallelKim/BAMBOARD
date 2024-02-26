"use client";

import "moment/locale/ko";

import { Board } from "@/components/Board";
import moment from "moment";

moment.locale("ko");

export default function Home() {
    return (
        <main className="flex h-dvh justify-center bg-slate-400">
            <Board />
        </main>
    );
}
