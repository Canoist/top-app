import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

interface IButton
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    appearance: "primary" | "ghost";
}
export const Button: React.FC<IButton> = ({
    children,
    appearance,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == "primary",
                [styles.ghost]: appearance == "ghost",
            })}
            {...props}>
            {children}
        </button>
    );
};
