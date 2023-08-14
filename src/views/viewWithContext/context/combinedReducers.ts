import combineReducers from 'react-combine-reducers';
import { IStateContext } from './ViewContext';

import {
  ACTIONTYPE,
  IAppContext,
  appReducer,
  initialState
} from '../reducers/appReducer';
import {
  ACTION_TYPE_GLOBAL,
  IglobalMsgState,
  globalMsgReducer,
  globalMsgState
} from '../reducers/globalMsgReducer';
import { 
  ITodoContext, 
  TODO_ACTION_TYPE, 
  todosInitialState, 
  todosReducer 
} from '../reducers/todoReducer';

export type CombinedInitialStateType = {
  counterState: IAppContext;
  globalMsg: IglobalMsgState;
  todosList: ITodoContext
};

export type CombinedActionType = ACTION_TYPE_GLOBAL | ACTIONTYPE | TODO_ACTION_TYPE

export type combineReducersType = (state: CombinedInitialStateType, action: CombinedActionType) => IStateContext

export const [reducerCombined, initialStateCombined] = combineReducers<combineReducersType>({
  counterState: [appReducer, initialState],
  globalMsg: [globalMsgReducer, globalMsgState],
  todosList: [todosReducer, todosInitialState],
  // ...
});