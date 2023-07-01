import React, { useContext } from 'react';
import { ShopContext } from '../shop-context';
import { Product } from '../product'

export const Phones = () => {
    const { getPhoneProducts } = useContext(ShopContext);
    const allPhoneProducts = getPhoneProducts();

    return (
        <div className="all-shop">
            <h1 className="shop-title">Phones</h1>
            <div className="all-products">
                {allPhoneProducts.map((product) => <Product key={product.id} data={product}/>)}
            </div>
        </div>
    )
}

    