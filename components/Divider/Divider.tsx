import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Divider.module.css";

interface IDivider
    extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

export const Divider: React.FC<IDivider> = ({ className, ...props }) => {
    return <hr className={cn(className, styles.hr)} {...props} />;
};
