import { messageAtom } from './MyProvider'
import { useAtomValue, useSetAtom } from 'jotai'

export default function ChildComponent() {
  const message = useAtomValue(messageAtom);
  const setMessage = useSetAtom(messageAtom);

  return (
    <>
      <div>{message}</div>
      <button onClick={() => setMessage("こんにちは")}>ボタン</button>
    </>
  )
}
