import React, { useContext } from 'react';
import { ShopContext } from './shop-context';
import { Heart } from 'phosphor-react';

export const WishlistItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, removeFromWishlist, addToCart, checkWishlistStatus } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    const wishlistPrice = price.toLocaleString()

    const checkWish = checkWishlistStatus(id);

    return (
        <div className="wishlist-product">
            <img src={productImage} alt="product-image" />
            <div>
                <div className="wishlist-product-name">
                    <p>{productName}</p>
                    {checkWish === true && (<Heart className="wishlist-remove-from-wishlist" weight="fill" onClick={() => removeFromWishlist(id)} />)}
                </div>
                <div>
                    <p>${wishlistPrice}</p>
                    <button className="shop-add-to-cart" onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                </div>
            </div>
        </div>
    )
}

