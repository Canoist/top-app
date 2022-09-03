import React from "react";
import { TopPageAdvantage } from "../../interfaces/ITopPage";
import styles from "./Adventages.module.css";
import CheckIcon from "./check.svg";

interface IAdventages {
    advantages: TopPageAdvantage[];
}

export const Adventages: React.FC<IAdventages> = ({ advantages }) => {
    return (
        <div className={styles.hh}>
            {advantages.map((item) => (
                <div key={item._id} className={styles.advantage}>
                    <span className={styles.icon}>
                        <CheckIcon />
                    </span>
                    <div className={styles.title}>{item.title}</div>
                    <hr className={styles.vline} />
                    <div>{item.description}</div>
                </div>
            ))}
        </div>
    );
};
