import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Header.module.css";
import cn from "classnames";

interface IHeader
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Header: React.FC<IHeader> = ({ ...props }) => {
    return <header {...props}>Header</header>;
};

export default Header;
