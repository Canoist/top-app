import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(3);

    return (
        <div>
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
        </div>
    );
}
