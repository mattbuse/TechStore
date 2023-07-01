import React, {useContext} from 'react';
import { CartItem } from './cart-item';
import { ShopContext } from './shop-context';
import { Products } from '../products'
import { Link } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
    const { cartItems, clearCartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalCartAmount = getTotalCartAmount();
    const withCommas = totalCartAmount.toLocaleString()
    
    return (
        <div className="cart">
            <div className="cart-title">
                <h1>Cart</h1>
                {totalCartAmount > 0 && (<button className="clear-cart-button" onClick={() => clearCartItems()}>Clear Cart</button>)}
            </div>
            <div className="cart-items">
                {Products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />}
                    })}
            </div>
            {totalCartAmount > 0 ? 
                <div className="check-out">
                    <p className="sub-total">Subtotal: ${withCommas}</p>
                    <button className="continue-button"><Link to='/'>Continue Shopping</Link></button>
                    <button className="check-out-button" onClick={() => alert('Your products are on the way! 🙂')}>Check Out</button>
                </div> :
                (<div>
                    <p className="empty">There are no items in your cart!</p>
                    <button className="continue-button"><Link to='/'>Continue Shopping</Link></button>
                </div>)}
        </div>
    )
}

    