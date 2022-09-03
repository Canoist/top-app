import React from "react";
import { HhData, Htag, Tag } from "../../components";
import { IProduct } from "../../interfaces/IProduct";
import ITopPage, { TopLevelCategory } from "../../interfaces/ITopPage";
import styles from "./TopPageComponent.module.css";

interface ITopPageComponents {
    firstCategory: TopLevelCategory;
    page: ITopPage;
    products: IProduct[];
}
const TopPageComponents: React.FC<ITopPageComponents> = ({
    page,
    products,
    firstCategory,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && (
                    <Tag color="grey" size="m">
                        {products.length}
                    </Tag>
                )}
                <span>Sort</span>
            </div>
            <div>
                {products &&
                    products.map((prod) => (
                        <div key={prod._id}>{prod.title}</div>
                    ))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red">hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && (
                <HhData {...page.hh} />
            )}
        </div>
    );
};
export default TopPageComponents;