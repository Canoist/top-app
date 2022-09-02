import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";
// import cn from "classnames";

interface ILayout {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <SideBar className={styles.sidebar} />
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer} />
        </div>
    );
};
