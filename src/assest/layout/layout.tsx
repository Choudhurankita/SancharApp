import React, { Suspense } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";
import Loader from "./loader/loader";

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
                
            </main>
            <Footer />
        </>
    );

};

export default Layout;