import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export const addBamboo = (val, set, taskName) => {
    if (val.bamboos[val.bamboos.length - 1].end)
        set((old) => ({
            id: old.id,
            bamboos: [
                ...old.bamboos,
                {
                    id: `bb-${uuidv4()}`,
                    taskName: taskName,
                    start: moment(),
                    end: null,
                    memos: [],
                },
            ],
        }));
};