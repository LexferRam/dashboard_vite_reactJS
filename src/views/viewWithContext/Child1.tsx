import { useAppContext } from "./context/ViewContext"

const Child1 = () => {
    const { state: { counterState } } = useAppContext() 
    const { title, count } = counterState

    return (
        <div>
            <h1>Child1:</h1>
            <b>{title}</b>
            <p>Count: {count}</p>
        </div>
    )
}

export default Child1