
export enum TODO_ACTIONS_TYPES {
   SET_TODOS="SET_TODOS",
}

export type TODO_ACTION_TYPE = { type: TODO_ACTIONS_TYPES.SET_TODOS; payload: any }


export interface ITodoContext {
   todos: any
}

export const todosInitialState: ITodoContext = {
   todos: []
}

export function todosReducer(state: ITodoContext, action: TODO_ACTION_TYPE) {
   switch (action.type) {
       case TODO_ACTIONS_TYPES.SET_TODOS:
            console.log(state)
           return {...state, todos: action.payload };
       default:
           return state
   }
}
