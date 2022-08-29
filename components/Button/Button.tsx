import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

interface IButton
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    appearance: "primary" | "ghost";
    arrow?: "right" | "down" | "none";
}
export const Button: React.FC<IButton> = ({
    children,
    appearance,
    className,
    arrow = "none",
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
            {arrow != "none" && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow == "down",
                    })}>
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
