import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '../components/Layout'
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";
import { Info } from "../containers/Info";
import { Payment } from "../containers/Payment";
import { PaySuccess } from "../containers/PaySuccess";
import { NotFound } from "../containers/NotFound";
import '../styles/components/App.css';

const App = () => {
    return (
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
    );
}

export { App };