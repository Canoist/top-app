import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import IMenuItem from "../interfaces/IMenuItem";
import WithLayout from "../layouts/Layout";
import topPageService from "../services/topPageService";

function Home({ menu }: HomeProps): JSX.Element {
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
            <ul>
                {menu.map((item) => (
                    <li key={item._id.secondCategory}>
                        {item._id.secondCategory}
                    </li>
                ))}
            </ul>
            <Paragraph variant="s">
                Студенты освоят не только hard skills, необходимые для работы
                веб-дизайнером, но и soft skills — навыки, которые позволят
                эффективно взаимодействовать в команде с менеджерами,
                разработчиками и маркетологами. Выпускники факультета могут
                успешно конкурировать с веб-дизайнерами уровня middle.
            </Paragraph>
            <Paragraph variant="m">
                Студенты освоят не только hard skills, необходимые для работы
                веб-дизайнером, но и soft skills — навыки, которые позволят
                эффективно взаимодействовать в команде с менеджерами,
                разработчиками и маркетологами. Выпускники факультета могут
                успешно конкурировать с веб-дизайнерами уровня middle.
            </Paragraph>
            <Paragraph variant="l">
                Студенты освоят не только hard skills, необходимые для работы
                веб-дизайнером, но и soft skills — навыки, которые позволят
                эффективно взаимодействовать в команде с менеджерами,
                разработчиками и маркетологами. Выпускники факультета могут
                успешно конкурировать с веб-дизайнерами уровня middle.
            </Paragraph>
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
