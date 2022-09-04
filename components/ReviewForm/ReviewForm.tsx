import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Button, Input, Rating, TextArea } from "..";
import CloseIcon from "./close.svg";
import { Controller, useForm } from "react-hook-form";
import reviewService from "../../services/reviewService";

interface IReviewForm
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
    isOpened: boolean;
}

export interface IReviewForForm {
    name: string;
    title: string;
    description: string;
    rating: number;
}

const ReviewForm: React.FC<IReviewForm> = ({
    productId,
    isOpened,
    className,
    ...props
}) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
    } = useForm<IReviewForForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForForm) => {
        try {
            const data = await reviewService.create({ ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError("Что-то пошло не так");
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register("name", {
                        required: { value: true, message: "Заполните имя" },
                    })}
                    placeholder="Имя"
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={errors.name ? true : false}
                />
                <Input
                    {...register("title", {
                        required: {
                            value: true,
                            message: "Заполните заголовок",
                        },
                    })}
                    placeholder="Заголовок отзыва"
                    className={styles.title}
                    error={errors.title}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={errors.title ? true : false}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name="rating"
                        rules={{
                            required: {
                                value: true,
                                message: "Укажите рейтинг",
                            },
                        }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <TextArea
                    {...register("description", {
                        required: {
                            value: true,
                            message: "Заполните описание",
                        },
                    })}
                    placeholder="Текст отзыва"
                    className={styles.description}
                    error={errors.description}
                    tabIndex={isOpened ? 0 : -1}
                    aria-label="Текст отзыва"
                    aria-invalid={errors.description ? true : false}
                />
                <div className={styles.submit}>
                    <Button
                        appearance="primary"
                        tabIndex={isOpened ? 0 : -1}
                        onClick={() => clearErrors()}>
                        Отправить
                    </Button>
                    <span className={styles.info}>
                        * Перед публикацией отзыв пройдет предварительную
                        модерацию и проверку
                    </span>
                </div>
            </div>
            {isSuccess && (
                <div className={cn(styles.success, styles.panel)} role="alert">
                    <div className={styles.successTitle}>
                        Ваш отзыв отправлен
                    </div>
                    <div>
                        Спасибо, ваш отзыв будет опубликован после проверки.
                    </div>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className={styles.close}
                        aria-label="Закрыть оповещение">
                        <CloseIcon />
                    </button>
                </div>
            )}
            {error && (
                <div className={cn(styles.error, styles.panel)} role="alert">
                    Что-то пошло не так, попробуйте обновить страницу
                    <button
                        onClick={() => setError(undefined)}
                        className={styles.close}
                        aria-label="Закрыть оповещение">
                        <CloseIcon />
                    </button>
                </div>
            )}
        </form>
    );
};

export default ReviewForm;
