import React, { useContext } from 'react';
import { ShopContext } from './shop-context';
import { Product } from './product'
import './shop.css';

export const Shop = () => {
    const { getSaleProducts } = useContext(ShopContext);
    const saleProducts = getSaleProducts();

    return (
        <div className="all-shop">
            <h1 className="shop-home">One Stop Tech Shop</h1>
            <h2 className="sale-text">All Apple Products Now 10% Off!</h2>
            <div className="all-products">
                {saleProducts.map((product) => <Product key={product.id} data={product}/>)}
            </div>
        </div>
    )
}

