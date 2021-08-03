import { useStore } from 'effector-react'
import { createStore, createEvent } from 'effector'
import { useReducer } from 'react'
import { checkServerIdentity } from 'tls'

const add = createEvent()
const sub = createEvent()
const reset = createEvent()

const counter = createStore(0)
  .on(add, (count) => count + 1)
  .on(sub, (count) => count - 1)
  .reset(reset)

add.watch((n) => console.log('add', n))
sub.watch((n) => console.log('subtract', n))
reset.watch(() => console.log('reset counter'))
