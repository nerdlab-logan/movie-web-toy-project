import React from 'react'
import LayoutStore from '@/stores/ui/layout.store'

export const StoreContext = React.createContext({
  LayoutStore: new LayoutStore(),
})
