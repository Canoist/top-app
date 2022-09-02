import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import MenuItem from "../../interfaces/IMenuItem";
import { IProduct } from "../../interfaces/IProduct";
import ITopPage from "../../interfaces/ITopPage";
import WithLayout from "../../layouts/HOC/componentWithLayout";
import productService from "../../services/productService";
import topPageService from "../../services/topPageService";

const firstCategory = 0;

const Course: React.FC<CourseProps> = ({ menu, page, products }) => {
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
    const menu = await topPageService.find(firstCategory);

    return {
        paths: menu.flatMap((item) =>
            item.pages.map((page) => "/courses/" + page.alias)
        ),
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

    const menu = await topPageService.find(firstCategory);

    const page = await topPageService.getByAlias(params.alias);

    const products = await productService.find({
        category: page.category,
        limit: 10,
    });

    return {
        props: {
            menu,
            firstCategory,
            page,
            products,
        },
    };
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
    page: ITopPage;
    products: IProduct[];
}
