import React from "react";
import MenuTopbar from "../../utils/MenuTopBar";
import CategoryView from "./view/CategoryView";

const CategoryPage = () => {
    return (
        <>
            <MenuTopbar title="중고거래 카테고리" />
            <CategoryView />
        </>
    );
};

export default CategoryPage;
