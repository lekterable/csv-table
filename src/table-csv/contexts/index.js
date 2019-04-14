import { createContext } from 'react'

export const ModeContext = createContext({ isEditable: false })
export const ContentContext = createContext([
  { content: [], uniqueKeys: [] },
  () => {}
])
