import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag="h1">text</Htag>
            <Htag tag="h2">text</Htag>
            <Htag tag="h3">text</Htag>
            <Button appearance="primary">SSSS</Button>
            <Button appearance="ghost">XXXXXX</Button>
        </div>
    );
}
