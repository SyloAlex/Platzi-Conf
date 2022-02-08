import React from "react";
import '../styles/components/PaySuccess.css';

const PaySuccess = () => {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Alex, thank you for your purchase!</h2>
                <span>Your order will arrive in N days</span>
                <div className="Success-map">
                    Google Maps
                </div>
            </div>
        </div>
    );
}

export { PaySuccess }