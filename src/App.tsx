import React from 'react'
import { MyProvider } from './MyProvider'
import ChildComponent from './ChildComponent'

export default function App() {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  )
}
