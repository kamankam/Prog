import { createEvent, restore } from 'effector'

export const setMenuHeaderVisible = createEvent<boolean>()
export const $isMenuHeaderVisible = restore(setMenuHeaderVisible, false)
