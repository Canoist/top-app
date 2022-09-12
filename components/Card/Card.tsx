import cn from "classnames";
import React, {
    DetailedHTMLProps,
    ForwardedRef,
    forwardRef,
    HTMLAttributes,
} from "react";
import styles from "./Card.module.css";

interface ICard
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: "white" | "blue";
    children: React.ReactNode;
}

export const Card = forwardRef(
    (
        { color = "white", children, className, ...props }: ICard,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        return (
            <div
                className={cn(className, styles.card, {
                    [styles.white]: color == "white",
                    [styles.blue]: color == "blue",
                })}
                ref={ref}
                {...props}>
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
