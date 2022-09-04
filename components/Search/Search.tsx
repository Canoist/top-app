import styles from "./Search.module.css";
import cn from "classnames";
import React, {
    DetailedHTMLProps,
    HTMLAttributes,
    KeyboardEvent,
    useState,
} from "react";
import { useRouter } from "next/router";
import { Button } from "../Button/Button";
import SearchIcon from "./search.svg";
import { Input } from "../Input/Input";

interface ISearch
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > {}

export const Search: React.FC<ISearch> = ({ className, ...props }) => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: "/search",
            query: {
                q: search,
            },
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            goToSearch();
        }
    };

    return (
        <form className={cn(className, styles.search)} {...props} role="search">
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={goToSearch}
                aria-label="Искать по сайту">
                <SearchIcon />
            </Button>
        </form>
    );
};
