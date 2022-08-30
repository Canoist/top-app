import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import cn from "classnames";

interface IFooter
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Footer: React.FC<IFooter> = ({ ...props }) => {
    return <footer {...props}>Footer</footer>;
};

export default Footer;
