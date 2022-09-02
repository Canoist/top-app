export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export default interface MenuItem {
    _id: {
        secondCategory: string;
    };
    pages: PageItem[];
}
