import React from 'react'
import { StoreContext } from '@store/store.context'

export const useGlobalStore = () => React.useContext(StoreContext)
