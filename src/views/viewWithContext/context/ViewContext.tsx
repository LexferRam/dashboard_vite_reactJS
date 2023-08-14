import { createContext, useContext, useReducer } from 'react';
import type { PropsWithChildren } from 'react'
import {
   CombinedActionType,
   CombinedInitialStateType,
   initialStateCombined,
   reducerCombined
} from './combinedReducers';

export interface IStateContext {
   state: CombinedInitialStateType;
   dispatch: React.Dispatch<CombinedActionType>;
}

export const AppContext = createContext<IStateContext>(initialStateCombined);

export const AppContextProvider = ({ children }: PropsWithChildren): JSX.Element => {

   const [state, dispatch] = useReducer(reducerCombined, initialStateCombined)

   return (
       <AppContext.Provider value={{ state, dispatch }}>
           {children}
       </AppContext.Provider>
   );
}

export const useAppContext = () => useContext(AppContext);