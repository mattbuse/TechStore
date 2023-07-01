import React, { useContext } from 'react';
import { ShoppingCart, Heart, DeviceMobile, DeviceTablet, Laptop } from 'phosphor-react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <div>
            <div className="navbar">
                <div className="store-name">
                    <Link to='/TechStore' className="home-link">One Stop Tech Shop</Link>
                </div>
                <div className="nav-links">
                    <Link to='/phones' className="shop-link" title="Phones" ><DeviceMobile className="phone-icon" /></Link>
                    <Link to='/tablets' className="shop-link" title="Tablets" ><DeviceTablet className="tablet-icon" /></Link>
                    <Link to='/laptops' className="shop-link" title="Laptops" ><Laptop className="laptop-icon" /></Link>
                    <Link to='/wishlist' className="shop-link" title="Wishlist" ><Heart className="heart-icon" /></Link>
                    <Link to='/cart' className="shop-link" title="Cart" ><ShoppingCart className="cart-icon" /></Link>
                </div>
            </div>
        </div>
    )
}

