import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Tag.module.css";
import cn from "classnames";

interface ITag
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: "s" | "m";
    children: React.ReactNode;
    color?: "ghost" | "red" | "grey" | "green" | "primary";
    href?: string;
}

export const Tag: React.FC<ITag> = ({
    size = "m",
    children,
    className,
    color = "ghost",
    href,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.tag, {
                [styles.s]: size == "s",
                [styles.m]: size == "m",
                [styles.ghost]: color == "ghost",
                [styles.red]: color == "red",
                [styles.grey]: color == "grey",
                [styles.green]: color == "green",
                [styles.primary]: color == "primary",
            })}
            {...props}>
            {href ? <a href={href}>{children}</a> : children}
        </div>
    );
};
