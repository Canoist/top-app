const declOfNum = (num: number, titles: [string, string, string]): string => {
    // const titles = [ "отзыв", "отзыва", "отзывов"]

    const cases = [2, 0, 1, 1, 1, 2];
    // возвращает ["отзывов", "отзыв", "отзыва", "отзыва", "отзыва", "отзывов"];

    return titles[
        num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
    ];
};

export default declOfNum;
