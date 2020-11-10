import { makeAutoObservable } from 'mobx'

class LayoutStore {
  contentLoadingToggle = false

  constructor() {
    makeAutoObservable(this)
  }

  contentLoadingOn = () => {
    this.contentLoadingToggle = true
  }

  contentLoadingOff = () => {
    this.contentLoadingToggle = false
  }
}

export default LayoutStore
