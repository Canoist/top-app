import React, { useContext } from "react";
// import styles from "./Menu.module.css";
// import cn from "classnames";
import AppContext from "../../context/AppContext";

const Menu: React.FC = () => {
    const { menu } = useContext(AppContext);

    return (
        <div>
            {" "}
            <ul>
                {menu.map((item) => (
                    <li key={item._id.secondCategory}>
                        {item._id.secondCategory}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
