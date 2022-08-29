import { Button, Htag, Paragraph } from "../components";

export default function Home(): JSX.Element {
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
        </div>
    );
}
