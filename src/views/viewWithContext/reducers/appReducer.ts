import { Dispatch } from "react";

export enum ACTIONS_TYPES {
    INCREMENT="INCREMENT",
    DECREMENT="DECREMENT"
}

export type ACTIONTYPE =
    | { type: ACTIONS_TYPES.INCREMENT; payload: number }
    | { type: ACTIONS_TYPES.DECREMENT; payload: number };

export interface IAppContext {
    title: string,
    count: number,
    dispatch: Dispatch<ACTIONTYPE>,
}

export const initialState: IAppContext = {
    title: 'Global text',
    count: 0,
    dispatch: () => null
}

export function appReducer(state: IAppContext, action: ACTIONTYPE) {
    switch (action.type) {
        case ACTIONS_TYPES.INCREMENT:
            return { ...state, count: state.count + action.payload };
        case ACTIONS_TYPES.DECREMENT:
            return { ...state, count: state.count - action.payload };
        default:
            return state
    }
}