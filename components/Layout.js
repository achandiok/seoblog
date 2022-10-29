import React from 'react';
import dynamic from 'next/dynamic'
const Header = dynamic(() => import("./Header"), { ssr: false }); 

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <p>footer</p>
        </React.Fragment>
    );
};

export default Layout;