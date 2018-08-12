import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import drawermenu from './reducers/drawermenu'
import dialogModal from './reducers/dialogModal'

export default combineReducers({
    drawermenu,
    dialogModal,
    router: routerReducer
})