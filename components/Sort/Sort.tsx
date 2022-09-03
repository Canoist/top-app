import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Sort.module.css";
import SortIcon from "./sort.svg";

enum SortEnum {
    Rating,
    Price,
}

interface ISort
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum) => void;
}

export const Sort: React.FC<ISort> = ({
    sort,
    setSort,
    className,
    ...props
}) => {
    return (
        <div className={cn(className, styles.sort)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({ [styles.active]: sort == SortEnum.Rating })}>
                <SortIcon className={styles.sortIcon} /> по&nbsp;рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({ [styles.active]: sort == SortEnum.Price })}>
                {<SortIcon className={styles.sortIcon} />} по&nbsp;цене
            </span>
        </div>
    );
};
