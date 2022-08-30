import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";
import cn from "classnames";

interface ILayout {
    children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <SideBar />
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
