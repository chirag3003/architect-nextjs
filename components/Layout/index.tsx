import React from 'react';
import Navbar from "../Navbar";
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
        </>
    );
}

export default Layout;