import * as React from 'react'

export const GlobalContext = React.createContext<GlobalContext>({
  setting: {},
  categories: [],
  comments: [],
  recommendArticles: []
})
