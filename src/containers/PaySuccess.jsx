import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
import { Map } from "../components/Map";
import '../styles/components/PaySuccess.css';

const PaySuccess = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    return (
        <div className="Success">
            <div className="Success-content">
                {/* <h2>{`${buyer[0].name}! Thank you for your purchase!`}</h2> */}
                <span>Your order will arrive in N days</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    );
}

export { PaySuccess }