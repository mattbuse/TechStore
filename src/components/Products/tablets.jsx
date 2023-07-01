import React, { useContext } from 'react';
import { ShopContext } from '../shop-context';
import { Product } from '../product'

export const Tablets = () => {
    const { getTabletProducts } = useContext(ShopContext);
    const allTabletProducts = getTabletProducts();

    return (
        <div className="all-shop">
            <h1 className="shop-title">Tablets</h1>
            <div className="all-products">
                {allTabletProducts.map((product) => <Product key={product.id} data={product}/>)}
            </div>
        </div>
    )
}

