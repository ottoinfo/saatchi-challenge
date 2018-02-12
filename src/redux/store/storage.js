// The Dan Abramov way of state persistence

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')

    if (!serializedState) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}
// NOTE Just wanted to store just favorites, but good idea, except knowing if items are new/products
// NOTE if( state && localStorage) - WHY TRY and CATCH
