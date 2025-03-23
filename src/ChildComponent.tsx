import { messageAtom, setMessageAtom } from './MyProvider'
import { useAtom } from 'jotai'

export default function ChildComponent() {
  const [message] = useAtom(messageAtom);
  const [hoge,setHoge] = useAtom(setMessageAtom);

  return (
    <>
      <div>{message}</div>
      <button onClick={() => setHoge("こんにちは")}>ボタン</button>
    </>
  )
}
