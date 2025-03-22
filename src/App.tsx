import ChildComponent from './ChildComponent'
import { MyProvider } from './MyProvider'


export default function App() {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  )
}
