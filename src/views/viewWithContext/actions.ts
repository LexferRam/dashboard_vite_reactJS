import { CombinedActionType } from "./context/combinedReducers"
import { ACTIONS_TYPES } from "./reducers/appReducer"

const increaseCountAction = (dispatch: React.Dispatch<CombinedActionType>) => dispatch({ type: ACTIONS_TYPES.INCREMENT, payload: 2 })
const decreaseCountAction = (dispatch: React.Dispatch<CombinedActionType>) => dispatch({ type: ACTIONS_TYPES.DECREMENT, payload: 1 })

export {
    increaseCountAction,
    decreaseCountAction
}