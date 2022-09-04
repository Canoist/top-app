import styles from "./Input.module.css";
import cn from "classnames";
import React, {
    DetailedHTMLProps,
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

interface IInput
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    error?: FieldError;
}

export const Input: React.FC<IInput> = forwardRef(
    ({ className, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <div className={cn(className, styles.inputWrapper)}>
                <input
                    className={cn(styles.input, {
                        [styles.error]: error,
                    })}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <span role="alert" className={styles.errorMessage}>
                        {error.message}
                    </span>
                )}
            </div>
        );
    }
);
