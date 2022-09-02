import { AppContextProvider, IAppContext } from "../../context/AppContext";
import { Layout } from "../Layout";

const WithLayout = <T extends Record<string, unknown> & IAppContext>(
    Component: React.FC<T>
) => {
    return function componentWithLayout(props: T): JSX.Element {
        return (
            <AppContextProvider
                menu={props.menu}
                firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};

export default WithLayout;
