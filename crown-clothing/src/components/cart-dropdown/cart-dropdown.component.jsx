import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className = "cart-dropdown">      
        <div className = "cart-items"></div>
        {
            cartItems.length ? cartItems.map(cartItem => (<CartItem key = {cartItem.id} item = {cartItem} />))
                                : (<span className = "empty-message">No items in cart</span> )
                
        }
        <CustomButton onClick = {() => {
            history.push("/checkout")
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));