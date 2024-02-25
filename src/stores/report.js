import { atomWithStorage, splitAtom } from "jotai/utils";

import moment from "moment";

export const dayInfoAtom = atomWithStorage("dailyInfo", {
    day: moment(),
    work: [moment(), null],
    lunch: [null, null],
});

const initValue = [
    // {
    //     id: "dm-001",
    //     bamboos: [
    //         {
    //             id: "bb-001",
    //             taskName: "1",
    //             start: moment(),
    //             end: null,
    //             memos: ["ddd"],
    //         },
    //     ],
    // },
    // {
    //     id: "dm-002",
    //     bamboos: [
    //         {
    //             id: "bb-002",
    //             taskName: "2",
    //             start: moment(),
    //             end: null,
    //             memos: ["ddd"],
    //         },
    //     ],
    // },
    // {
    //     id: "dm-003",
    //     bamboos: [
    //         {
    //             id: "bb-003",
    //             taskName: "3",
    //             start: moment(),
    //             end: null,
    //             memos: ["ddd"],
    //         },
    //     ],
    // },
    // {
    //     id: "dm-004",
    //     bamboos: [
    //         {
    //             id: "bb-004",
    //             taskName: "4",
    //             start: moment(),
    //             end: null,
    //             memos: ["ddd"],
    //         },
    //     ],
    // },
];

export const domainsAtom = atomWithStorage("report", initValue);

export const domainsAtomsAtom = splitAtom(domainsAtom);
