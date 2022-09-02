import { GetStaticProps } from "next";
import React from "react";
import IMenuItem from "../interfaces/IMenuItem";
import WithLayout from "../layouts/HOC/componentWithLayout";
import topPageService from "../services/topPageService";

const SearchPage: React.FC = () => {
    return <div>SearchPage</div>;
};

export default WithLayout(SearchPage);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;

    const menu = await topPageService.find(firstCategory);
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}
