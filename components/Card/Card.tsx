import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface ICard
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: "white" | "blue";
    children: React.ReactNode;
}

export const Card: React.FC<ICard> = ({
    color = "white",
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.card, {
                [styles.white]: color == "white",
                [styles.blue]: color == "blue",
            })}
            {...props}>
            {children}
        </div>
    );
};
