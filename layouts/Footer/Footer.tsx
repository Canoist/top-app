import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

interface IFooter
    extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Footer: React.FC<IFooter> = ({ className, ...props }) => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div className={styles.company}>
                OwlTop © 2020 - {format(Date.now(), "yyyy")} Все права защищены
            </div>
            <a className={styles.terms} href="#" target="_blank">
                Пользовательское соглашение
            </a>
            <a className={styles.conf} href="#" target="_blank">
                Политика конфиденциальности
            </a>
        </footer>
    );
};

export default Footer;
