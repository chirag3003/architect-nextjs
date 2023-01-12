import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
type props = {
    children?: React.ReactNode;
}
function Layout({children}:props) {
    return (
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default Layout;