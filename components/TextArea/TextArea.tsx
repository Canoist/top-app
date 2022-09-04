import styles from "./TextArea.module.css";
import cn from "classnames";
import React, {
    DetailedHTMLProps,
    ForwardedRef,
    forwardRef,
    HTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";

interface ITextArea
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    error?: FieldError;
}

export const TextArea: React.FC<ITextArea> = forwardRef(
    (
        { className, error, ...props },
        ref: ForwardedRef<HTMLTextAreaElement>
    ) => {
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
