import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Paragraph.module.css";

interface IParagraph
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    variant?: "s" | "m" | "l";
    children: React.ReactNode;
}

export const Paragraph: React.FC<IParagraph> = ({
    variant = "m",
    children,
    className,
    ...props
}) => {
    return (
        <p
            className={cn(className, {
                [styles.s]: variant == "s",
                [styles.m]: variant == "m",
                [styles.l]: variant == "l",
            })}
            {...props}>
            {children}
        </p>
    );
};
