import React from 'react';
import Navbar from "../Navbar";
type props = {
    children?: JSX.Element;
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