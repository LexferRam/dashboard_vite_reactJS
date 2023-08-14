
export enum ACTIONS_TYPES_GLOBAL {
    GET_GLOBAL_MSG="GET_GLOBAL_MSG"
}

export type ACTION_TYPE_GLOBAL =
    | { type: ACTIONS_TYPES_GLOBAL.GET_GLOBAL_MSG }

export interface IglobalMsgState {
    titleGlobalMsg: string
}

export const globalMsgState: IglobalMsgState = {
    titleGlobalMsg: 'Global Message'
}

export function globalMsgReducer(state: IglobalMsgState, action: ACTION_TYPE_GLOBAL) {
    switch (action.type) {
        case ACTIONS_TYPES_GLOBAL.GET_GLOBAL_MSG:
            return state
        default:
            return state;
    }
}