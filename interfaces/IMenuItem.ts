import { TopLevelCategory } from "./ITopPage";

export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export default interface IMenuItem {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageItem[];
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}
