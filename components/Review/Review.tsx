import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Review.module.css";
import cn from "classnames";
import { IReview } from "../../interfaces/IProduct";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating/Rating";
import UserIcon from "./user.svg";

interface IReviewProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: IReview;
}

export const Review: React.FC<IReviewProps> = ({
    review,
    className,
    ...props
}) => {
    const { name, title, description, createdAt, rating } = review;

    return (
        <div className={cn(styles.review, className)} {...props}>
            <UserIcon className={styles.user} />
            <div className={styles.title}>
                <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
            </div>
            <div className={styles.rating}>
                <Rating rating={rating} />
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};
