import React, {
    DetailedHTMLProps,
    HTMLAttributes,
    KeyboardEvent,
    useEffect,
    useState,
} from "react";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./iconStar.svg";

interface IRating
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}

export const Rating: React.FC<IRating> = ({
    isEditable = false,
    rating,
    setRating,
    ...props
}) => {
    const [currentRating, setCurrentRating] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    useEffect(() => {
        renderRating(rating);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        renderRating(i);
    };

    const renderRating = (current: number) => {
        const updatedArray = currentRating.map(
            (item: JSX.Element, index: number) => {
                return (
                    <span
                        key={"star_" + index}
                        className={cn(styles.star, {
                            [styles.filled]: index < current,
                            [styles.editable]: isEditable,
                        })}
                        onMouseEnter={() => changeDisplay(index + 1)}
                        onMouseLeave={() => changeDisplay(rating)}
                        onClick={() => handleClick(index + 1)}>
                        <StarIcon
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(event: KeyboardEvent<SVGAElement>) =>
                                isEditable && handleSpace(index + 1, event)
                            }
                        />
                    </span>
                );
            }
        );
        setCurrentRating(updatedArray);
    };

    const handleClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code != "Space" || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props}>
            {currentRating.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    );
};
