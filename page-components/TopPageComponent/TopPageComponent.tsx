import React from "react";
import { Adventages, HhData, Htag, Sort, Tag } from "../../components";
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
                <Sort
                    sort={0}
                    setSort={() => {
                        return;
                    }}
                />
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
            {firstCategory == TopLevelCategory.Courses && page.hh && (
                <HhData {...page.hh} />
            )}
            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Adventages advantages={page.advantages} />
                </>
            )}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.seoText && (
                <div
                    className={styles.seo}
                    dangerouslySetInnerHTML={{ __html: page.seoText }}
                />
            )}
            {page.tags.map((tag) => (
                <Tag key={tag} color="primary">
                    {tag}
                </Tag>
            ))}
        </div>
    );
};
export default TopPageComponents;
