import React, { createContext, ReactNode, useState } from 'react'

type MyContextType = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextType | null>(null);

export const MyProvider = ({ children }: { children: ReactNode}) => {
  const [message, setMessage] = useState<string>("こんにちは");

  return (
    <MyContext.Provider value={{ message, setMessage }}>
      {children}
    </MyContext.Provider>
  )
}

