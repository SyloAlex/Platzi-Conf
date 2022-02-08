import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import '../styles/components/Checkout.css'

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;
    const handleRemoveFromCart = (payload) => {
        removeFromCart(payload)
    }
    const totalPrice = () => {
        const sum = cart.reduce((acc, current) => acc + current.price, 0)
        return sum;
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Order List</h3> : <h3>No items in cart...</h3>}
                {cart.map((item) => (
                    <div className="Checkout-item" key={item.title}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <button type="button" onClick={() => handleRemoveFromCart(item)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 ?
                <div className="Checkout-sidebar">
                    <h3>{`Total price: $${totalPrice()}`}</h3>
                    <Link to="/checkout/info">
                        <button type="button">
                            Continue
                        </button>
                    </Link>
                </div>
                : null
            }
        </div>
    );
}

export { Checkout }