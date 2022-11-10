import React from "react"
import { reducer, initialState } from "./reducer"

export const UserContext = React.createContext({
  state: initialState,
  dispatch: (): void => null
})

type Props = {
  children: React.Component
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}