import { atomWithStorage } from "jotai/utils";
import moment from "moment";

const darkModeAtom = atomWithStorage("darkMode", false);

export const dayInfoAtom = atomWithStorage("dailyInfo", {
    day: moment(),
    work: [moment(), null],
    lunch: [null, null],
});
