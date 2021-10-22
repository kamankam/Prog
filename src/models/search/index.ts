import { createEvent, restore } from 'effector'

export const setSearchVisible = createEvent<boolean>()
export const $isSearchVisible = restore(setSearchVisible, false)

export const setSearchValue = createEvent<string>()
export const $searchValue = restore(setSearchValue, '')
