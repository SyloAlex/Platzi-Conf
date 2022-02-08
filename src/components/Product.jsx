import React from 'react';

const Product = ({ item }) => {
    return (
        <div className="Products-item">
            <img src={item.image} alt={item.title} />
            <div className="Products-item-info">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
                <p>{item.description}</p>
            </div>
            <button type='button'>Buy</button>
        </div>
    );
};

export { Product };
