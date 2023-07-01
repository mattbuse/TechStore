import React, { useState, useContext } from 'react';
import { ShopContext } from './shop-context';
import { Heart, Star } from 'phosphor-react';

export const Product = (props) => {
    const { id, productName, price, sale, productImage } = props.data;
    const { addToCart, cartItems, addToWishlist, removeFromWishlist, checkWishlistStatus } = useContext(ShopContext);
    const [ rating, setRating ] = useState(0);
    const cartItemAmount = cartItems[id]
    const productPrice = price.toLocaleString()

    const checkWish = checkWishlistStatus(id);

    const priceColor = {
        color: sale ? "green" : "white",
        fontWeight: sale ? "bold" : "normal"
    }

    const salePrice = Math.floor(price * .9);

        return (
            <>
                <div className="product">
                    <img src={productImage} alt="product-image" className="shop-product-image" />
                    <p>{productName}</p>
                    {rating === 1 ? 
                    <Star className="star-one" onClick={() => setRating(0)} weight="fill" /> :
                    <Star className="star-one" onClick={() => setRating(1)} weight={rating > 1 ? "fill" : "light"} />
                    }
                    {rating === 2 ? 
                    <Star className="star-one" onClick={() => setRating(0)} weight="fill" /> :
                    <Star className="star-one" onClick={() => setRating(2)} weight={rating > 2 ? "fill" : "light"} />
                    }
                    {rating === 3 ? 
                    <Star className="star-one" onClick={() => setRating(0)} weight="fill" /> :
                    <Star className="star-one" onClick={() => setRating(3)} weight={rating > 3 ? "fill" : "light"} />
                    }
                    {rating === 4 ? 
                    <Star className="star-one" onClick={() => setRating(0)} weight="fill" /> :
                    <Star className="star-one" onClick={() => setRating(4)} weight={rating > 4 ? "fill" : "light"} />
                    }
                    {rating === 5 ? 
                    <Star className="star-one" onClick={() => setRating(0)} weight="fill" /> :
                    <Star className="star-one" onClick={() => setRating(5)} weight="light" />
                    }   
                    <p style={priceColor} >{sale && (<span>SALE </span>)}${sale ? salePrice : productPrice}</p>
                    {checkWish === true ?
                            (<Heart className="product-wishlist" weight="fill" onClick={() => removeFromWishlist(id)} />) :
                            (<Heart className="product-wishlist" onClick={() => addToWishlist(id)} />)
                    }
                    <button className="shop-add-to-cart" onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                </div>
            </>
        )
}

