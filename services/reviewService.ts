import { IReviewForForm } from "../components";
import httpService from "./httpService";

const reviewEndPoint = "review/create-demo";

interface IReviewSentResponse {
    message: string;
}

interface IPayload extends IReviewForForm {
    productId: string;
}

const reviewService = {
    create: async (payload: IPayload) => {
        const { data } = await httpService.post<IReviewSentResponse>(
            reviewEndPoint,
            payload
        );

        return data;
    },
};

export default reviewService;
