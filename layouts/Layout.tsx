import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";
import cn from "classnames";

interface ILayout {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
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

const WithLayout = <T extends Record<string, unknown>>(
    Component: React.FC<T>
) => {
    return function componentWithLayout(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

export default WithLayout;
