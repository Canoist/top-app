import styles from "./TextArea.module.css";
import cn from "classnames";
import React, {
    DetailedHTMLProps,
    ForwardedRef,
    forwardRef,
    TextareaHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

interface ITextArea
    extends DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    error?: FieldError;
}

export const TextArea = forwardRef(
    (
        { error, className, ...props }: ITextArea,
        ref: ForwardedRef<HTMLTextAreaElement>
    ): JSX.Element => {
        return (
            <div className={cn(styles.textareaWrapper, className)}>
                <textarea
                    className={cn(styles.textarea, {
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

TextArea.displayName = "TextArea";
