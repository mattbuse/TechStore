import React, { useContext } from 'react';
import { ShopContext } from '../shop-context';
import { Product } from '../product'

export const Laptops = () => {
    const { getLaptopProducts } = useContext(ShopContext);
    const allLaptopProducts = getLaptopProducts();

    return (
        <div className="all-shop">
            <h1 className="shop-title">Laptops</h1>
            <div className="all-products">
                {allLaptopProducts.map((product) => <Product key={product.id} data={product}/>)}
            </div>
        </div>
    )
}

