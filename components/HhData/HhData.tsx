import React from "react";
import { DataFromHH } from "../../interfaces/ITopPage";
import priceRu from "../../utils/priceRu";
import { Card } from "../Card/Card";
import styles from "./HhData.module.css";
import RateIcon from "./rate.svg";

interface IHhData extends DataFromHH {}

export const HhData: React.FC<IHhData> = ({
    count,
    juniorSalary,
    middleSalary,
    seniorSalary,
}) => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>
                        {priceRu(juniorSalary)}
                    </div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>
                        {priceRu(middleSalary)}
                    </div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>
                        {priceRu(seniorSalary)}
                    </div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
};
