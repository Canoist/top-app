import MenuItem from "../interfaces/PageItem";
import httpService from "./httpService";

const topPageEndPoint = "/top-page/";

const topPageService = {
    find: async (firstCategory: number) => {
        console.log(topPageEndPoint + "find");

        const { data } = await httpService.post<MenuItem[]>(
            topPageEndPoint + "find",
            { firstCategory }
        );
        return data;
    },
    getByAlias: async (category: string) => {
        const data = await httpService.get(
            topPageEndPoint + "byAlias/" + category
        );
        return data;
    },
};

export default topPageService;
