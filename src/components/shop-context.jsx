import React, { useState, createContext } from 'react';
import { Products } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const getDefaultWishlist = () => {
    let wishlist = {};
    for (let i = 1; i < Products.length + 1; i++) {
        wishlist[i] = 0
    }
    return wishlist;
}

const getSaleProducts = () => {
    let saleProducts = [];
    for (let i = 0; i < Products.length; i++) {
        if (Products[i].sale === true) {
            saleProducts.push(Products[i])
        }
    }
    return saleProducts;
}

const getPhoneProducts = () => {
    let phoneProducts = [];
    for (let i = 0; i < Products.length; i++) {
        if (Products[i].productType === 'phone') {
            phoneProducts.push(Products[i])
        }
    }
    return phoneProducts;
}

const getTabletProducts = () => {
    let tabletProducts = [];
    for (let i = 0; i < Products.length; i++) {
        if (Products[i].productType === 'tablet') {
            tabletProducts.push(Products[i])
        }
    }
    return tabletProducts;
}

const getLaptopProducts = () => {
    let laptopProducts = [];
    for (let i = 0; i < Products.length; i++) {
        if (Products[i].productType === 'laptop') {
            laptopProducts.push(Products[i])
        }
    }
    return laptopProducts;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlist, setWishlist] = useState(getDefaultWishlist());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const getTotalWishlistAmount = () => {
        let wishlistAmount = 0;
        for (const item in wishlist) {
            if (wishlist[item] > 0) {
                let wishItemInfo = Products.find((product) => product.id === Number(item));
                wishlistAmount += wishlist[item] * wishItemInfo.price;
            }
        }
        return wishlistAmount;
    }

    const checkWishlistStatus = (item) => {
        if (wishlist[item] > 0) {
            return true;
        } else {
            return false;
        }
    }

    const clearCartItems = () => {
        setCartItems(getDefaultCart());
    }

    const deleteAllItems = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0}))
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount}));
    }

    const addToWishlist = (itemId) => {
        setWishlist((prev) => ({ ...prev, [itemId]: 1}));
    }

    const removeFromWishlist = (itemId) => {
        setWishlist((prev) => ({ ...prev, [itemId]: 0}));
    }
    
    const clearWishlist = () => {
        setWishlist(getDefaultWishlist());
    };

    const contextValue = {
        cartItems,
        wishlist,
        checkWishlistStatus,
        clearCartItems,
        deleteAllItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        getTotalWishlistAmount,
        getSaleProducts,
        getPhoneProducts,
        getTabletProducts,
        getLaptopProducts,
     };

    // console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};