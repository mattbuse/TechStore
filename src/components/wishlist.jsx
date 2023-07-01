import React, { useContext } from 'react';
import { ShopContext } from './shop-context';
import { WishlistItem } from './wishlist-item'
import { Products } from '../products'
import { Link } from 'react-router-dom'
import './wishlist.css';

export const Wishlist = () => {
    const { wishlist, clearWishlist, getTotalWishlistAmount } = useContext(ShopContext);
    const totalWishlistAmount = getTotalWishlistAmount();

    return (
        <div className="wishlist">
            <div className="wishlist-title">
                <h1>Wishlist</h1>
                {totalWishlistAmount > 0 && (<button className="clear-wishlist-button" onClick={() => clearWishlist()}>Clear Wishlist</button>)}
            </div>
            {totalWishlistAmount === 0 && (<p className="empty">There are no items on your Wishlist!</p>)}
            <div className="wishlist-items">
                {Products.map((product) => {
                    if (wishlist[product.id] !== 0) {
                        return <WishlistItem key={product.id} data={product} />}
                    })}
            </div>
            <button className="continue-button"><Link to='/TechStore'>Continue Shopping</Link></button>
        </div>
    )
}

