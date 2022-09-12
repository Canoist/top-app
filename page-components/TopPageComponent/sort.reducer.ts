import { SortEnum } from "../../components";
import { IProduct } from "../../interfaces/IProduct";

export type SortActions =
    | { type: SortEnum.Price }
    | { type: SortEnum.Rating }
    | { type: "reset"; initialState: IProduct[] };

export interface ISortReducerState {
    sort: SortEnum;
    products: IProduct[];
}

export const sortReducer = (
    state: ISortReducerState,
    action: SortActions
): ISortReducerState => {
    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) =>
                    a.initialRating > b.initialRating ? 1 : -1
                ),
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) =>
                    a.price > b.price ? 1 : -1
                ),
            };
        case "reset":
            return {
                sort: SortEnum.Rating,
                products: action.initialState,
            };

        default:
            throw new Error("Неверный тип сортировки");
    }
};
