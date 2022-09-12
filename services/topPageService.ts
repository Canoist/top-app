import IMenuItem from "../interfaces/IMenuItem";
import ITopPage from "../interfaces/ITopPage";
import httpService from "./httpService";

const topPageEndPoint = "/top-page/";

const topPageService = {
    find: async (firstCategory: number) => {
        const { data } = await httpService.post<IMenuItem[]>(
            topPageEndPoint + "find",
            { firstCategory }
        );
        return data;
    },
    getByAlias: async (category: string | string[]) => {
        const { data } = await httpService.get<ITopPage>(
            topPageEndPoint + "byAlias/" + category
        );
        return data;
    },
};

export default topPageService;
