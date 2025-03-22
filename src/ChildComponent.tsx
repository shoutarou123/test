import { messageAtom } from './MyProvider'
import { useAtom } from 'jotai'

export default function ChildComponent() {
  const [message, setMessage] = useAtom(messageAtom)

  return (
    <>
      <div>{message}</div>
      <button onClick={() => setMessage("こんにちは")}>ボタン</button>
    </>
  )
}
