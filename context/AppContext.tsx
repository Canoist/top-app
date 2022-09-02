import React, { createContext, PropsWithChildren, useState } from "react";
import IMenuItem from "../interfaces/IMenuItem";
import { TopLevelCategory } from "../interfaces/ITopPage";

export interface IAppContext {
    menu: IMenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
    menu: [],
    firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider: React.FC<PropsWithChildren<IAppContext>> = ({
    menu,
    firstCategory,
    children,
}) => {
    const [menuState, setMenuState] = useState<IMenuItem[]>(menu);

    const setMenu = (newMenu: IMenuItem[]) => {
        setMenuState(newMenu);
    };

    return (
        <AppContext.Provider
            value={{ menu: menuState, firstCategory, setMenu }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppContext;
