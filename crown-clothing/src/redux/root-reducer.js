import { combineReducers } from 'redux'
import userReducer from './users/users.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    users: userReducer,
    cart: cartReducer
})