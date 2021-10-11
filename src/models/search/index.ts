import { createEvent, restore } from 'effector'

export const setSearchVisible = createEvent<boolean>()
export const $isSearchVisible = restore(setSearchVisible, false)

export const setSearchValue = createEvent<string>()
export const $searchValue = restore(setSearchValue, '')

// todo: define storeName
// $isSearchVisible.watch(logStore)
// export function logStore(storeState: any) {
//   const storeName = 'dummy'
//   console.log(`${storeName}`, storeState)
// }
