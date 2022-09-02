import React, { DetailedHTMLProps, HTMLAttributes } from "react";
// import styles from "./SideBar.module.css";
// import cn from "classnames";
import Menu from "../Menu/Menu";

interface ISideBar
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const SideBar: React.FC<ISideBar> = ({ ...props }) => {
    return (
        <aside {...props}>
            <Menu />
        </aside>
    );
};

export default SideBar;
