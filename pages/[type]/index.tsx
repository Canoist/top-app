import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { firstLevelMenu } from "../../helpers/helpers";
import IMenuItem from "../../interfaces/IMenuItem";
import { TopLevelCategory } from "../../interfaces/ITopPage";
import WithLayout from "../../layouts/HOC/componentWithLayout";
import topPageService from "../../services/topPageService";

const TypePage: React.FC<TypeProps> = ({ firstCategory }) => {
    return <div>Course Page (category): {firstCategory}</div>;
};

export default WithLayout(TypePage);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map((item) => "/" + item.route),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params || !params.type) {
        return {
            notFound: true,
        };
    }

    const firstCategoryItem = firstLevelMenu.find(
        (item) => item.route == params.type
    );

    if (!firstCategoryItem) {
        return {
            notFound: true,
        };
    }

    const menu = await topPageService.find(firstCategoryItem.id);
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id,
        },
    };
};

interface TypeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: TopLevelCategory;
}
