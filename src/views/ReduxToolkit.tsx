import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setTodos } from "../features/todoSlice";
import { setLoading } from "../features/loadingSlice";

const ReduxToolkit = () => {

  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todosList.todos)

  useEffect(() => {
    (async function():Promise<void>{
      dispatch(setLoading(true))
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      dispatch(setTodos(data))
      dispatch(setLoading(false))
    })()
  },[dispatch])

  return (
    <div>ReduxToolkit
      {
        todos?.map((todo:any) => (
          <div key={todo.id}>
            {todo.title}
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default ReduxToolkit
