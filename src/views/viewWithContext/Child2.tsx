import { useAppContext } from "./context/ViewContext"
import { decreaseCountAction, increaseCountAction } from "./actions"
import { setLoading } from "../../features/loadingSlice"
import { TODO_ACTIONS_TYPES } from "./reducers/todoReducer"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const Child2 = () => {

    const dispatchRedux = useDispatch()
    const { state: { counterState: { title }, todosList: { todos } }, dispatch } = useAppContext()
    console.log(useAppContext())

    const handleSearchTodos = async () => {
       try {
            dispatchRedux(setLoading(true))
            const res = await fetch(`${import.meta.env.VITE_URL
            }/todos`)
            const data = await res.json()
            dispatch({ type: TODO_ACTIONS_TYPES.SET_TODOS, payload: data })
            dispatchRedux(setLoading(false))
       } catch (error) {
        dispatchRedux(setLoading(false))
            console.log('aqui error')
            throw new Error('error')
       }
    }

    useEffect(() => { 
        const handleCallEvent = ((event: CustomEvent<boolean>) => { 
            console.log(event.detail) 
        }) as any 
            window.addEventListener("testEvent", handleCallEvent) 
            return () => window.removeEventListener("testEvent", handleCallEvent) 
    }, [])

    return (
        <div>
            <h1>Child2</h1>
            <button
                onClick={() => increaseCountAction(dispatch)}
            >
                Increase count
            </button>
            <p>{title}</p>

            <button
                onClick={() => decreaseCountAction(dispatch)}
            >
                Decrease count
            </button>

            <button
                onClick={handleSearchTodos}
            >
                search Todos
            </button>

            <button
                onClick={() => {
                    const event = new CustomEvent("testEvent", { detail: 'test' } );
                    window.dispatchEvent(event);
                }}
            >
                Custom Event
            </button>

            {
                todos?.map((item: any) => (
                    <h5>{item.title}</h5>
                ))
            }
        </div>
    )
}

export default Child2