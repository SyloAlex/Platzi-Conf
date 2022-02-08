import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { PayPalButton } from "react-paypal-button-v2";
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const navigate = useNavigate();
    const totalPrice = () => {
        const sum = cart.reduce((acc, current) => acc + current.price, 0)
        return sum;
    }

    const paypalOptions = {
        clientId: 'AUgMKPphAnKeZEieg2H3DIau_trMB2BN1NmTcH1pAUctC0PsWmCJbRXf52Jbv3Caol60aHPsjLYmnP4J',
        intent: 'capture',
        currency: 'USD'
    }
    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }
    const handlePaymentSuccess = (data) => {
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer: buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            navigate('/checkout/success')
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Order resume:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={totalPrice()}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)} />
                </div>
            </div>
        </div>
    );
}

export { Payment }