import React from "react";
import Header from "../Header/Header";  // to'g'ri yo'l
import Footer from "../Footer/Footer";  // to'g'ri yo'l

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}