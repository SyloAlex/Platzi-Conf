import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from '../components/Layout'
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";
import { Info } from "../containers/Info";
import { Payment } from "../containers/Payment";
import { PaySuccess } from "../containers/PaySuccess";
import { NotFound } from "../containers/NotFound";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";

import '../styles/components/App.css';

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/checkout/info" element={<Info />} />
                        <Route path="/checkout/payment" element={<Payment />} />
                        <Route path="/checkout/success" element={<PaySuccess />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export { App };