import React from "react";

import './CategoryTab.scss';

const CategoryTab = (props) => {
    return (
        <ul className="menu-container">
            {props.menuArr.map((el, index) => (
                    <li
                        className={index === props.menuTab ? "menu focused" : "menu"}
                        onClick={() => props.setMenuTab(index)}
                    >
                        {el}
                    </li>
            ))}
        </ul>
    );
}

export default CategoryTab;
