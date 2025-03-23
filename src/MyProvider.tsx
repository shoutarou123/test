import { atom } from 'jotai'
import { ReactNode } from 'react';

export const messageAtom = atom("おはよう");

export const setMessageAtom = atom(
  null,
  (get, set, newMessage: string) => {
    set(messageAtom, newMessage);
  }
)

export const MyProvider = ({ children } : { children: ReactNode }) => {
  return <>{children}</>
}


