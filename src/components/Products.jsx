import React from 'react';
import { Product } from './Product';
import '../styles/components/Products.css';

const Products = ({ products }) => {
    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} item={product} />
                ))}
            </div>
        </div>
    );
};

export { Products };
