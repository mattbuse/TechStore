import React, { useContext } from 'react';
import { ShopContext } from './shop-context';
import { Heart } from 'phosphor-react';
import './cart.css';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { wishlist, cartItems, deleteAllItems, addToCart, removeFromCart, updateCartItemCount, addToWishlist, removeFromWishlist, checkWishlistStatus } = useContext(ShopContext);
    const cartPrice = price.toLocaleString()

    const checkWish = checkWishlistStatus(id);

    return (
        <div className="cart-product">
            <img src={productImage} alt="product-image" />
            <div>
                <div className="cart-product-name">
                    <button className="remove-items-button" onClick={() => deleteAllItems(id)}>X</button>
                    <p className="cart-item-name">{productName}</p>
                    {checkWish === true ?
                            (<Heart className="cart-remove-from-wishlist" weight="fill" onClick={() => removeFromWishlist(id)} />) :
                            (<Heart className="cart-add-to-wishlist" onClick={() => addToWishlist(id)} />)
                    }
                </div>
                <p>${cartPrice}</p>
                <div className="cart-total">
                    <button className="decrement-button" onClick={() => removeFromCart(id)}> - </button>
                    <input className="cart-item-total-number" value={cartItems[id]} onChange={(e) => {updateCartItemCount(Number(e.target.value), id)}}></input>
                    <button className="increment-button" onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

