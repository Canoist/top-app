import React, { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import AppContext from "../../context/AppContext";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/IMenuItem";
import { TopLevelCategory } from "../../interfaces/ITopPage";
import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: "courses",
        name: "Курсы",
        icon: <CoursesIcon />,
        id: TopLevelCategory.Courses,
    },
    {
        route: "services",
        name: "Сервисы",
        icon: <ServicesIcon />,
        id: TopLevelCategory.Services,
    },
    {
        route: "books",
        name: "Книги",
        icon: <BooksIcon />,
        id: TopLevelCategory.Books,
    },
    {
        route: "products",
        name: "Продукты",
        icon: <ProductsIcon />,
        id: TopLevelCategory.Products,
    },
];

const Menu: React.FC = () => {
    const { menu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((firstLevelMenuItem) => (
                    <div key={firstLevelMenuItem.route}>
                        <a href={`/${firstLevelMenuItem.route}`}>
                            <div
                                className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]:
                                        firstLevelMenuItem.id == firstCategory,
                                })}>
                                {firstLevelMenuItem.icon}
                                <span>{firstLevelMenuItem.name}</span>
                            </div>
                        </a>
                        {firstLevelMenuItem.id == firstCategory &&
                            buildSecondLevel(firstLevelMenuItem.route)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (route: string) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((item) => (
                    <div key={item._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {item._id.secondCategory}
                        </div>
                        <div
                            className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: item.isOpened,
                            })}>
                            {buildThirdLevel(item.pages, route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return pages.map((page) => (
            <a
                key={page._id}
                href={`/${route}/${page.alias}`}
                className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false,
                })}>
                {page.category}
            </a>
        ));
    };

    return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
