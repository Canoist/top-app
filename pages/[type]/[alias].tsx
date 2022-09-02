import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { firstLevelMenu } from "../../helpers/helpers";
import MenuItem from "../../interfaces/IMenuItem";
import { IProduct } from "../../interfaces/IProduct";
import ITopPage, { TopLevelCategory } from "../../interfaces/ITopPage";
import WithLayout from "../../layouts/HOC/componentWithLayout";
import productService from "../../services/productService";
import topPageService from "../../services/topPageService";

const Course: React.FC<CourseProps> = ({ products }) => {
    return (
        <>
            {products && (
                <ul>
                    {products.map((item) => (
                        <li key={item._id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default WithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const menu = await topPageService.find(m.id);
        paths = paths.concat(
            menu.flatMap((item) =>
                item.pages.map((p) => `/${m.route}/${p.alias}`)
            )
        );
    }
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params || !params.alias) {
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
    try {
        const menu = await topPageService.find(firstCategoryItem.id);

        if (!menu.length) {
            return {
                notFound: true,
            };
        }
        const page = await topPageService.getByAlias(params.alias);

        const products = await productService.find({
            category: page.category,
            limit: 10,
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products,
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: ITopPage;
    products: IProduct[];
}
