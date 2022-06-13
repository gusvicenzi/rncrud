import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({})

const actions = {
  createUser(state, action) {
    const user = action.payload
    user.id = Math.random()
    return {
      ...state,
      users: [...state.users, user], // create new objects, not changing the previous state
    }
  },
  updateUser(state, action) {
    const updated = action.payload
    return {
      ...state,
      users: state.users.map(u => (u.id === updated.id ? updated : u)),
    }
  },
  deleteUser(state, action) {
    if (action.type === 'deleteUser') {
      const user = action.payload
      return {
        ...state, // Needed if there are more than one element on the state
        users: state.users.filter(u => u.id !== user.id),
      }
    }
  },
}

export const UsersProvider = props => {
  function reducer(state, action) {
    const fn = actions[action.type] // access the property of an object from a string
    return fn ? fn(state, action) : state
  } // the objective of the reducer is to evolve te state

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UsersContext.Provider
      // useReducer
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext
