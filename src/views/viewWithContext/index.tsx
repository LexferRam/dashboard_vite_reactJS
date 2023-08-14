import Child1 from "./Child1"
import Child2 from "./Child2"
import { AppContextProvider } from "./context/ViewContext"

const ViewWithContext = () => {
  return (
    <AppContextProvider>
        <Child1 />
        <Child2 />
    </AppContextProvider>
  )
}

export default ViewWithContext