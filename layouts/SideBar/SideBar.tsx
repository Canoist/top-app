import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./SideBar.module.css";
import cn from "classnames";
import Menu from "../Menu/Menu";
import Logo from "../logo.svg";
import { Search } from "../../components";

interface ISideBar
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const SideBar: React.FC<ISideBar> = ({ className, ...props }) => {
    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <Search />
            <Menu />
        </aside>
    );
};

export default SideBar;
