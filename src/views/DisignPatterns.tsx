import { Button } from "@mui/material"
import { useState } from "react"

const DisignPatterns = () => {
  const [showError, setShowError] = useState(false)

  if (showError) throw new Error('Not implemented')
  return (
    <div>
      <h2>Error Boundary</h2>
      <p>Click on the button to show the error boundary</p>
      <Button
       onClick={() => setShowError(true)}
      >
        Throw Error
      </Button>
    </div>
  )
}

export default DisignPatterns