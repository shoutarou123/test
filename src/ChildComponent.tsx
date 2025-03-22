import React, { useContext } from 'react'
import { MyContext } from './MyProvider'



export default function ChildComponent() {
  const context = useContext(MyContext)
  if (!context) {
    return null
  }
  
  const { message, setMessage } = context
  
  return (
    <>
    <div>{message}</div>
    <button onClick={() => setMessage("さようなら")}>ボタン</button>
    </>
  )
}
