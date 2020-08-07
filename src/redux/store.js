import { createStore, applyMiddleware} from 'redux'
import logger from "redux-logger"
import {composeWithDevTools} from 'redux-devtools-extension'
import todoApp from '../reducers/todoApp'

const store = createStore(todoApp, applyMiddleware(logger))
// const store = createStore(todoApp)

// composeWithDevTools()

// console.log(store.getState())

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(addTodo('hi'))
// store.dispatch(addTodo('dgdgi'))
// store.dispatch(addTodo('hdgdgdi'))
// store.dispatch(addTodo('hdsgsdgfi'))

// unsubscribe()

export default store