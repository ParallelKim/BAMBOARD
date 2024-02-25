"use client";

import "moment/locale/ko";

import { Board } from "@/components/Board";
import { domainsAtom } from "@/stores/report";
import { useAtomValue } from "jotai";
import moment from "moment";

moment.locale("ko");

export default function Home() {
    const report = useAtomValue(domainsAtom);

    return (
        <main className="flex h-dvh justify-center bg-slate-400">
            <Board domains={report} />
        </main>
    );
}
