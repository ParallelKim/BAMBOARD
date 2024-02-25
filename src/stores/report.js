import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkModeAtom = atomWithStorage("darkMode", false);

export const dayInfo = atomWithStorage("dailyInfo", {
    day: moment(),
    work: [null, null],
    lunch: [null, null],
});
