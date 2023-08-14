import React from 'react'

interface ICodeBlock {
    children: React.ReactNode
}
const CodeBlock = ({children}: ICodeBlock) => {
  return (
    <div>
      <code style={{backgroundColor: 'black', color:'white', padding: 10, borderRadius: 10}}>
          {children}
      </code>
    </div>
  )
}

export default CodeBlock