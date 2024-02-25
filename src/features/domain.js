import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export const addDomain = (dispatch, taskName) => {
    dispatch({
        type: "insert",
        value: {
            id: `dm-${uuidv4()}`,
            bamboos: [
                {
                    id: `bb-${uuidv4()}`,
                    taskName: taskName,
                    start: moment(),
                    end: null,
                    memos: [],
                },
            ],
        },
    });
};
