import {createStore} from 'redux'
import diagramReducer from './reducers'

const store = createStore(diagramReducer)

export default store
