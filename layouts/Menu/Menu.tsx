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
import Link from "next/link";
import { useRouter } from "next/router";

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
    const { menu, firstCategory, setMenu } = useContext(AppContext);

    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu &&
            setMenu(
                menu.map((item) => {
                    if (item._id.secondCategory == secondCategory) {
                        item.isOpened = !item.isOpened;
                    }
                    return item;
                })
            );
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((firstLevelMenuItem) => (
                    <div key={firstLevelMenuItem.route}>
                        <Link href={`/${firstLevelMenuItem.route}`}>
                            <a>
                                <div
                                    className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]:
                                            firstLevelMenuItem.id ==
                                            firstCategory,
                                    })}>
                                    {firstLevelMenuItem.icon}
                                    <span>{firstLevelMenuItem.name}</span>
                                </div>
                            </a>
                        </Link>
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
                {menu.map((item) => {
                    if (
                        item.pages
                            .map((page) => page.alias)
                            .includes(router.asPath.split("/")[2])
                    ) {
                        item.isOpened = true;
                    }
                    return (
                        <div key={item._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() =>
                                    openSecondLevel(item._id.secondCategory)
                                }>
                                {item._id.secondCategory}
                            </div>
                            <div
                                className={cn(styles.secondLevelBlock, {
                                    [styles.secondLevelBlockOpened]:
                                        item.isOpened,
                                })}>
                                {buildThirdLevel(item.pages, route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return pages.map((page) => (
            <Link href={`/${route}/${page.alias}`} key={page._id}>
                <a
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]:
                            `/${route}/${page.alias}` == router.asPath,
                    })}>
                    {page.category}
                </a>
            </Link>
        ));
    };

    return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
