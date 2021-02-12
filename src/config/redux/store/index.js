import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {dataSheets} from '../reducer'

const store = createStore(dataSheets, applyMiddleware(thunk))

export default store;