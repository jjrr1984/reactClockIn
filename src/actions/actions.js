import {CLOCK_IN,BREAK_IN,BREAK_OUT} from "./actionTypes";

export const doClockIn = (date) => {
    return {
        "type": CLOCK_IN,
        "date": date
    };
}

export const doBreakIn = (date) => {
    return{
        "type": BREAK_IN,
        "date": date
    };
}

export const doBreakOut = (date) => {
    return {
        "type": BREAK_OUT,
        "date": date
    };
}
