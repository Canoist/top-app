import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import IMenuItem from "../interfaces/IMenuItem";
import WithLayout from "../layouts/HOC/componentWithLayout";
import topPageService from "../services/topPageService";

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(3);

    return (
        <>
            <Htag tag="h1">text</Htag>
            <Htag tag="h2">text</Htag>
            <Htag tag="h3">text</Htag>
            <Button appearance="primary">SSSS</Button>
            <Button appearance="ghost" arrow="right">
                XXXXXX
            </Button>
            <Button appearance="primary" arrow="down">
                ZZZZZ
            </Button>
            <Paragraph variant="s">small</Paragraph>
            <Paragraph variant="m">medium</Paragraph>
            <Paragraph variant="l">large</Paragraph>
            <Tag size="s" color="ghost">
                Ghost
            </Tag>
            <Tag size="s" color="red">
                111
            </Tag>
            <Tag size="s" color="primary">
                22
            </Tag>
            <Tag size="s" color="grey">
                333
            </Tag>
            <Tag size="s" color="green">
                444444
            </Tag>
            <Tag color="green">444444</Tag>
            <Tag size="m" color="green" href="#">
                444444
            </Tag>
            <Rating rating={3} />
            <Rating rating={rating} setRating={setRating} isEditable />
        </>
    );
}

export default WithLayout(Home);

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
