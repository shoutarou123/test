import { atom } from 'jotai'
import { ReactNode } from 'react';

export const messageAtom = atom("おはよう");

export const MyProvider = ({ children } : { children: ReactNode }) => {
  return <>{children}</>
}