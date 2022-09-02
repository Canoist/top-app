import { IProduct } from "../interfaces/IProduct";
import httpService from "./httpService";

const productEndPoint = "product/";

interface IPayload {
    category: string;
    limit: number;
}

const productService = {
    find: async (payload: IPayload) => {
        const { data } = await httpService.post<IProduct[]>(
            productEndPoint + "find/",
            payload
        );
        return data;
    },
};

export default productService;
