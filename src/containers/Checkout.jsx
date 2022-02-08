import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/Checkout.css'

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Order List</h3>
                <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>Item name</h4>
                        <span>$ Price</span>
                    </div>
                    <button type="button">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            <div className="Checkout-sidebar">
                <h3>Total price: $Price</h3>
                <Link to="/checkout/info">
                    <button type="button">
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    );
}

export { Checkout }