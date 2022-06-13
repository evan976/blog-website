import * as React from 'react'

export const GlobalContext = React.createContext<GlobalContext>({
  setting: {} as ISetting,
  categories: []
})
